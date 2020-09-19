import {Bubble} from 'vue-chartjs';
import database from './firebase';

export default {
    extends: Bubble,
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: []
            },
            options: {
                title: {
                    display: true,
                    text: 'GDP, happiness and population'
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Happiness"
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "GDP (PPP)"
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false
            },
        };
    },
    methods: {
        fetchItems: function () {
            database.collection('bubble-countries').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.datacollection.datasets.push({
                        label: doc.data().label,
                        backgroundColor: doc.data().backgroundColor,
                        borderColor: doc.data().borderColor,
                        data: [{
                            x: doc.data().data[0],
                            y: doc.data().data[1],
                            r: doc.data().data[2],
                        }]
                    });
                });

                this.renderChart(this.datacollection, this.options);
            });
        }
    },
    created() {
        this.fetchItems();
    }
};