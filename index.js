const graph = document.getElementById('graph').getContext('2d');

let myChart = new Chart(graph, {
    type: "bar",
    data: {
        labels: ["Abidjan", "Alger", "Bamako", "Casablanca", "Dakar", "Kinshasa", "Montreal", "Paris"],
        datasets: [
            {
                label: "Population en M ",
                data: [6, 8, 3, 4, 4, 17, 4, 12],
                backgroundColor: ['red', "orange", "salmon", "blue", "yellow", "purple", "green", "tomato"],
                hoverBorderWidth: 3,
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: "Population Francophones du monde",
            fontSize: 24,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                top: 20,
            },
        },
    },
});