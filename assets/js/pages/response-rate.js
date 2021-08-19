var options = {
    chart: {
        height: 299,
        type: "radialBar"
    },
    colors: ['#00b0db'],
    series: [70.9],

    plotOptions: {
        radialBar: {
            hollow: {
                margin: 10,
                size: "70%"
            },


            dataLabels: {
                showOn: "always",
                name: {
                    offsetY: -10,
                    show: true,
                    color: "#888",
                    fontSize: "13px"
                },
                value: {
                    color: "#111",
                    fontSize: "20px",
                    show: true,
                },
                total: {
                    show: true,
                    label: 'Response Rate',
                    fontSize: '18px',
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return "70.9%"
                    }
                }
            }
        }
    },

    stroke: {
        lineCap: "round",
    },
    labels: ["Response Rate"]
};

var chart = new ApexCharts(document.querySelector("#response-rate-chart"), options);

chart.render();

