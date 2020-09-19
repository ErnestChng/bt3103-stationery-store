import {Line} from 'vue-chartjs';
import axios from 'axios';

export default {
    extends: Line,
    data: () => ({
        results: [],
        chartdata: {
            labels: [],
            datasets: [
                {
                    label: 'MRT',
                    data: [],
                    borderColor: "blue",
                    backgroundColor: 'blue',
                    fill: false
                },
                {
                    label: 'LRT',
                    data: [],
                    borderColor: "red",
                    backgroundColor: 'red',
                    fill: false
                },
                {
                    label: 'Bus',
                    data: [],
                    borderColor: "green",
                    backgroundColor: 'green',
                    fill: false
                },
                {
                    label: 'Taxi',
                    data: [],
                    borderColor: "yellow",
                    backgroundColor: 'yellow',
                    fill: false
                }
            ]
        },
        options: {}
    }),
    methods: {
        fetchData: function () {
            axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a'
            ).then(response => {
                this.results = response.data.result.records;

                this.chartdata.labels = [...new Set(this.results.map((e) => e.year))];
                this.chartdata.datasets.forEach((d) => {
                    d.data = this.results.filter((e) => e.type_of_public_transport === d.label).map((e) => parseInt(e.average_ridership));
                });

                this.renderChart(this.chartdata, this.options);
            });
        }
    },
    mounted() {
        this.fetchData();
    }
};