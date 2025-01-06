const canvas = document.getElementById('dietaGatos');
canvas.width = 300; // Define a largura do canvas
canvas.height = 300; // Define a altura do canvas

const ctx = canvas.getContext('2d');
const dietaGatosChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Proteínas', 'Gorduras', 'Carboidratos', 'Vitaminas', 'Minerais'],
        datasets: [{
            label: 'Composição (%)',
            data: [60, 20, 10, 5, 5],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false, // Desativa o comportamento responsivo
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Composição da Dieta dos Gatos'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
