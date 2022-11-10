const bs = require('browser-sync').create();
const {src, dest, watch, series} = require("gulp");
const concat = require("gulp-concat");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer =require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

async function browserSync() {
    serveSass();

    bs.init({
        port: 8080,
        server: {
            baseDir: 'app',
        },
    });


    watch('app/*.html').on('change', bs.reload);
    watch('app/scss/*.scss', serveSass);
    watch('app/js/*.js').on('change', bs.reload);
}

exports.server = browserSync

function serveSass() {

    return src('app/sass/*.scss')
        .pipe(sass())
        .pipe(dest('app/css'))
            .pipe(bs.stream());
}

function task_html(){
    return src("app/*.html")
        .pipe(dest("dist"));
}
exports.html = task_html

function task_sass(){
    return src ("app/sass/*.scss")
        .pipe(concat('styles.scss'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest("dist/css"));
}
exports.sass = task_sass

function task_scripts(){
    return src("app/js/*.js")
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest("dist/js"))
}
exports.scrpits = task_scripts()

function task_imgs(){
    return src ("app/img/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins:[{removeViewBox:false}],
            interlaced: true
        }))
        .pipe(dest("dist/images"))
}
exports.imgs = task_imgs

function task_watch(){
    watch("app/*.html", task_html);
    watch("app/js/*.js", task_scripts);
    watch("app/sass/*.scss", task_sass);
    watch("app/images/*.+(jpg|jpeg|png|gif)", task_imgs)
}
exports.watch = task_watch

function task_server(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
}

exports.build = series(browserSync, task_html, task_sass, task_scripts, task_imgs, task_watch)

