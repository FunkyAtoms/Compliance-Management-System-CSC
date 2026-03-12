document.addEventListener('DOMContentLoaded', function () {
    
    // Set Chart.js global font to Outfit
    Chart.defaults.font.family = "'Outfit', sans-serif";
    Chart.defaults.color = "#666";

    const colors = {
        deepRed: '#780000',
        lightRed: '#c1121f',
        deepBlue: '#003049',
        lightBlue: '#669bbc'
    };

    // --- Area Chart ---
    const areaCtx = document.getElementById('areaChart').getContext('2d');
    new Chart(areaCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Visits',
                    data: [8, 11, 7, 9, 14, 11, 15],
                    backgroundColor: 'rgba(102, 155, 188, 0.3)',
                    borderColor: colors.lightBlue,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Pages/Visit',
                    data: [4, 7, 5, 12, 7, 16, 11],
                    backgroundColor: 'rgba(193, 18, 31, 0.3)',
                    borderColor: colors.lightRed,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', align: 'end' }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f5f5f5' } },
                x: { grid: { display: false } }
            }
        }
    });

    // --- Pie Chart ---
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Series 1', 'Series 2', 'Series 3'],
            datasets: [{
                data: [35, 40, 25],
                backgroundColor: [colors.lightBlue, colors.deepBlue, colors.lightRed],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
});