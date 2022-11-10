Chart.defaults.font.size = 14;
Chart.defaults.color = "#787D83";
Chart.defaults.borderColor = "#E4F6FB";

 
  const data1 = {
    datasets: [{
      fill:'origin',  
      backgroundColor: '#b2edfd',
      borderColor: '#55C6EA',
      order:0,
    },
    {
        fill:'origin',  
        backgroundColor: '#E4F8F4',
        borderColor: '#4ACEB7',
        order:1,
      }],
  };

  const config1 = {
    type: 'line',
    data: data1,
    options: {
        plugins:{
            legend:{
                display:false,
            }
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 500,
                ticks:{
                    stepSize:100,
                }
            },
            x:{
                labels:['Ja','Fe','Ma','Ap','Ma','Ju','Ji','Au','Se','Oc','No','De'],
            },
            
        }
    },
  };

  
  
  const data2 = {
    datasets: [{
      fill:'origin',  
      backgroundColor: '#b2edfd',
      borderColor: '#55C6EA',
      order:0,
    },
    {
        fill:'origin',  
        backgroundColor: '#E4F8F4',
        borderColor: '#4ACEB7',
        order:1,
      }],
  };

  const config2 = {
    type: 'line',
    data: data2,
    options: {
        plugins:{
            legend:{
                display:false,
            }
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 500,
                ticks:{
                    stepSize:100,
                }
            },
            x:{
                labels:['Ja','Fe','Ma','Ap','Ma','Ju','Ji','Au','Se','Oc','No','De'],
            },
            
        }
    },
  };

  const data3 = {
    datasets: [{
      backgroundColor: [
        '#55C6EA',
        '#E4F6FB',
      ],
      cutout:'75%',
    }]
  };

  const config3 = {
    type: 'doughnut',
    data: data3,
  };

  const data4 = {
    datasets: [{
      backgroundColor: [
        '#55C6EA',
        '#E4F6FB',
      ],
      cutout:'80%',
      rotation:220,
    }]
  };

  const config4 = {
    type: 'doughnut',
    data: data4,
  };

  $.ajax('data.json',{
    dataType: 'json',
    async: true,
    success: function(data, status, xhr) {
      data1.datasets[0].data = data.graphs[0];
      data1.datasets[1].data = data.graphs[1];
      data2.datasets[0].data = data.graphs[2];
      data2.datasets[1].data = data.graphs[3];
      data3.datasets[0].data = data.graphs[4];
      data4.datasets[0].data = data.graphs[5];

      $("#progress-bar").width(data.graphs[6].toString() + "%")
      

  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
  );

  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
  );

  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
  );

  const myChart4 = new Chart(
    document.getElementById('myChart4'),
    config4
  );

}
});

