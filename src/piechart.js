import {Pie} from 'vue-chartjs';

export default {
    extends: Pie,
    data: () => ({
        chartdata: {
            labels: ['USA', 'China', 'Japan', 'Europe', 'Singapore'],
            datasets: [
                {
                    label: 'Region',
                    data: [0.3, 0.2, 0.15, 0.2, 0.15],
                    backgroundColor: ['blue', 'red', 'green', 'yellow', 'orange'],
                    borderWidth: 2,
                    borderColor: "#000"
                }
            ]
        },
        options: {}
    }),
    mounted() {
        this.renderChart(this.chartdata, this.options);
    }
};