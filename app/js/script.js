Chart.defaults.font.size = 14;
Chart.defaults.color = "#787D83";
Chart.defaults.borderColor = "#E4F6FB";

  const data1 = {
    datasets: [{
      fill:'origin',  
      backgroundColor: '#b2edfd',
      borderColor: '#55C6EA',
      order:0,
      data: [0, 10, 5, 2, 20, 30, 45,100,200,150,300,100],
    },
    {
        fill:'origin',  
        backgroundColor: '#E4F8F4',
        borderColor: '#4ACEB7',
        order:1,
        data: [200,200,400,100,200,300,100,200,350,400,150,200],
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
      data: [0, 10, 5, 2, 20, 30, 45,100,200,150,300,100],
    },
    {
        fill:'origin',  
        backgroundColor: '#E4F8F4',
        borderColor: '#4ACEB7',
        order:1,
        data: [200,200,400,100,200,300,100,200,350,400,150,200],
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
      data: [150,250],
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
      data: [150,250],
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