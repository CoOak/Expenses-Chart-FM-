import './style.scss'
import * as bootstrap from "bootstrap";
import Chart from 'chart.js/auto';





const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun'],
        datasets: [{

            data: [7, 16, 23, 15, 6, 17,11],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ],


        }]
    },

            options: {
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {

                            display: false,
                            drawTicks:false
                        },
                        beginAtZero: true,
                        ticks:{

                            display:false
                        }


                    },


                },
                plugins: {
                    legend: {
                        display: false,

                    }
                }

            },
        });
