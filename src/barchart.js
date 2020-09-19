import {Bar} from 'vue-chartjs';

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
                {
                    label: 'Sales1',
                    data: [400, 300, 150, 1000],
                    backgroundColor: '#AA6',
                    borderWidth: 0.5,
                    borderColor: "#000"
                },
                {
                    label: 'Sales2',
                    data: [300, 500, 100, 150],
                    backgroundColor: '#7C1'
                }
            ]

        },
        options: {
            title: {
                display: true,
                text: 'Bar Chart Example',
                fontColor: 'Black',
                fontSize: 15

            },
            legend: {
                position: 'bottom'
            },
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 5
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }

                }]
            }

        }
    }),
    mounted() {
        this.renderChart(this.chartdata, this.options);
    }
};