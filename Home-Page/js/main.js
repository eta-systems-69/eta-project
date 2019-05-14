 //sidebar controls
 $(document).ready(function(){

    $('.sidebar-item').click(
        function() {
            if( $(this).hasClass('sidebar-item-selected') ) {
                $('.sidebar-item').removeClass('sidebar-item-selected');
            } else {
                $('.sidebar-item').removeClass('sidebar-item-selected');
                $(this).toggleClass('sidebar-item-selected');
            }
            
        }
    );
    
 });


 //-----plotly charts------------------------------------//

 //sales-orders
 $(document).ready(function(){
    //----------color set---------------------------------------------------//
    chartsBackgroundColors = ['#093f96','#255fbc','#3870c9','#5387db','#7aa7ef',
        '#0d7c50','#219667','#3cb786','#5acea0','#7be5bb',
        '#8c1c1c','#ad3535','#c45252','#e27373','#f7a3a3'
    ]
    chartsBorderColor = '#262626';
    chartsFontColor = '#48505A';
    chartsGridlinesColor = '#48505A';

    //-----------pie-chart (quantity by PN)----------------------------------//
    var ctx1 = document.getElementById('sales-orders-chart-pie').getContext('2d');

    var dataPie = {
        labels: ['Product 1','Product 2','Product 3','Product 4','Product 5','Product 6','Product 7','Product 8'],
        datasets: [{
            data: [10, 25, 35, 15, 4, 24, 27, 60],
            backgroundColor: chartsBackgroundColors,
            borderColor: chartsBorderColor,
            borderWidth: 0
        }]
    };

    var optionsPie = {
        elements: {
            center: {
            text: 'Total: 1,562,451',
            color: '#48505A', //Default black
            fontStyle: 'Helvetica', //Default Arial
            sidePadding: 30 //Default 20 (as a percentage)
          }
        },
        plugins: {
            labels: {
                render: 'label',
                fontColor: '#000',
                position: 'outside',
                textMargin: 8
            }
        },
        legend: {
            display: false,
            position: 'right',
            labels: {
                fontColor: chartsFontColor
            }
        },
        title: {
            position: 'top',
            display: false,
            fontSize: 20,
            fontColor: chartsFontColor,
            text: "Current PN Demand"
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 20,
            }
        },
        maintainAspectRatio: true,
        aspectRatio: 1.4,
        responsive: true,
        cutoutPercentage: 75,
    };

    

    var myDoughnutChart = new Chart(ctx1, {
        type: 'doughnut',
        data: dataPie,
        options: optionsPie
    });
    console.log(myDoughnutChart.data.datasets[0].labels);

    //-----------bar-chart1 (quantity by PN)----------------------------------//
    var ctx = document.getElementById('sales-orders-chart-bar').getContext('2d');

    var barChartData = {
        labels: ['201905','201906','201907','201908','201909','201910','201911','201912','201913','201914','201915','201916'],
        datasets: [{
            label: 'Product 1',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[0],
            data: [50*(0.7+0.3*Math.random()), 50*(0.7+0.3*Math.random()), 50*(0.7+0.3*Math.random()), 50*(0.7+0.3*Math.random()),
                50*(0.7+0.3*Math.random())*0.8, 50*(0.7+0.3*Math.random())*0.8,50*(0.7+0.3*Math.random())*0.5, 50*(0.7+0.3*Math.random())*0.4,
                50*(0.7+0.3*Math.random())*0.3, 50*(0.7+0.3*Math.random())*0.25,50*(0.7+0.3*Math.random())*0.2, 50*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Product 2',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[1],
            data: [125*(0.7+0.3*Math.random()), 125*(0.7+0.3*Math.random()), 125*(0.7+0.3*Math.random()), 125*(0.7+0.3*Math.random()),
                125*(0.7+0.3*Math.random())*0.8, 125*(0.7+0.3*Math.random())*0.8,125*(0.7+0.3*Math.random())*0.5, 125*(0.7+0.3*Math.random())*0.4,
                125*(0.7+0.3*Math.random())*0.3, 125*(0.7+0.3*Math.random())*0.25,125*(0.7+0.3*Math.random())*0.2, 125*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Product 3',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[2],
            data: [170*(0.7+0.3*Math.random()), 170*(0.7+0.3*Math.random()), 170*(0.7+0.3*Math.random()), 170*(0.7+0.3*Math.random()),
                170*(0.7+0.3*Math.random())*0.8, 170*(0.7+0.3*Math.random())*0.8,170*(0.7+0.3*Math.random())*0.5, 170*(0.7+0.3*Math.random())*0.4,
                170*(0.7+0.3*Math.random())*0.3, 170*(0.7+0.3*Math.random())*0.25,170*(0.7+0.3*Math.random())*0.2, 170*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Product 4',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[3],
            data: [75*(0.7+0.3*Math.random()), 75*(0.7+0.3*Math.random()), 75*(0.7+0.3*Math.random()), 75*(0.7+0.3*Math.random()),
                75*(0.7+0.3*Math.random())*0.8, 75*(0.7+0.3*Math.random())*0.8,75*(0.7+0.3*Math.random())*0.5, 75*(0.7+0.3*Math.random())*0.4,
                75*(0.7+0.3*Math.random())*0.3, 75*(0.7+0.3*Math.random())*0.25,75*(0.7+0.3*Math.random())*0.2, 75*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Product 5',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[4],
            data: [20*(0.7+0.3*Math.random()), 20*(0.7+0.3*Math.random()), 20*(0.7+0.3*Math.random()), 20*(0.7+0.3*Math.random()),
                20*(0.7+0.3*Math.random())*0.8, 20*(0.7+0.3*Math.random())*0.8,20*(0.7+0.3*Math.random())*0.5, 20*(0.7+0.3*Math.random())*0.4,
                20*(0.7+0.3*Math.random())*0.3, 20*(0.7+0.3*Math.random())*0.25,20*(0.7+0.3*Math.random())*0.2, 20*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Product 6',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[5],
            data: [120*(0.7+0.3*Math.random()), 120*(0.7+0.3*Math.random()), 120*(0.7+0.3*Math.random()), 120*(0.7+0.3*Math.random()),
                120*(0.7+0.3*Math.random())*0.8, 120*(0.7+0.3*Math.random())*0.8,120*(0.7+0.3*Math.random())*0.5, 120*(0.7+0.3*Math.random())*0.4,
                120*(0.7+0.3*Math.random())*0.3, 120*(0.7+0.3*Math.random())*0.25,120*(0.7+0.3*Math.random())*0.2, 120*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Product 7',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[6],
            data: [140*(0.7+0.3*Math.random()), 140*(0.7+0.3*Math.random()), 140*(0.7+0.3*Math.random()), 140*(0.7+0.3*Math.random()),
                140*(0.7+0.3*Math.random())*0.8, 140*(0.7+0.3*Math.random())*0.8,140*(0.7+0.3*Math.random())*0.5, 140*(0.7+0.3*Math.random())*0.4,
                140*(0.7+0.3*Math.random())*0.3, 140*(0.7+0.3*Math.random())*0.25,140*(0.7+0.3*Math.random())*0.2, 140*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Product 8',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[7],
            data: [300*(0.7+0.3*Math.random()), 300*(0.7+0.3*Math.random()), 300*(0.7+0.3*Math.random()), 300*(0.7+0.3*Math.random()),
                300*(0.7+0.3*Math.random())*0.8, 300*(0.7+0.3*Math.random())*0.8,300*(0.7+0.3*Math.random())*0.5, 300*(0.7+0.3*Math.random())*0.4,
                300*(0.7+0.3*Math.random())*0.3, 300*(0.7+0.3*Math.random())*0.25,300*(0.7+0.3*Math.random())*0.2, 300*(0.7+0.3*Math.random())*0.15].map(function(x) { return x.toFixed(0); })
        }]

    };

    var options = {
        plugins: {
            labels: {
                render: 'value',
                fontSize: 0,
            }
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: chartsFontColor
            }
        },
        title: {
            display: false,
            fontSize: 16,
            fontColor: chartsFontColor,
            text: "Current Demand (Next 3 Months)"
        },
        layout: {
            padding: {
                left: 10,
                right: 30,
                bottom: 0,
                top: 30,
            }
        },
        aspectRatio: 2.7,
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    fontColor: chartsFontColor
                },
                gridLines: {
                    color: "rgb(0,0,0,0)",
                    zeroLineColor: chartsFontColor
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    fontColor: chartsFontColor
                },
                ticks: {
                    fontColor: chartsFontColor
                },
                gridLines: {
                    color: "rgb(0,0,0,0)",
                    zeroLineColor: chartsFontColor
                }
            }]
        }
    };

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: options
    });
    
    //-----------bar-chart2 (quotes/salesorders by date)----------------------------------//
    var ctx2 = document.getElementById('sales-orders-chart-bar2').getContext('2d');

    var barChartData2 = {
        labels: ['201849','201850','201851','201852','201901','201902','201903','201904'],
        datasets: [{
            label: 'Quotes',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[0],
            data: [100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()),
                100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()),100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random())].map(function(x) { return x.toFixed(0); })
        }, {
            label: 'Sales',
            borderColor: chartsBorderColor,
            borderWidth: 0,
            backgroundColor: chartsBackgroundColors[5],
            data: [100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()),
                100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random()),100*(0.7+0.3*Math.random()), 100*(0.7+0.3*Math.random())].map(function(x) { return (x*.3).toFixed(0); })
        }]

    };

    var options = {
        plugins: {
            labels: {
                render: 'value',
                fontSize: 0,
            }
        },
        legend: {
            display: false,
            position: 'right',
            labels: {
                fontColor: chartsFontColor
            }
        },
        title: {
            display: false,
            fontSize: 16,
            fontColor: chartsFontColor,
            text: "Quotes/Sales Orders (Last 2 Months)"
        },
        layout: {
            padding: {
                left: 0,
                right: 30,
                bottom: 0,
                top: 40,
            }
        },
        maintainAspectRatio: true,
        aspectRatio: 1.4,
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: chartsFontColor
                },
                gridLines: {
                    color: "rgb(0,0,0,0)",
                    zeroLineColor: chartsFontColor
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    fontColor: chartsFontColor
                },
                ticks: {
                    fontColor: chartsFontColor,
                    beginAtZero: true
                },
                gridLines: {
                    color: "rgb(0,0,0,0)",
                    zeroLineColor: chartsFontColor
                }
            }]
        }
    };

    var myBarChart2 = new Chart(ctx2, {
        type: 'bar',
        data: barChartData2,
        options: options
    });

});