
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const GHGEmissionsPerformanceChart = () => {
  const labels = ['2021', '2022'];
  const emissions = [389.73, 184.57];

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Emisiones',
        data: emissions,
        backgroundColor: ['#34d399', '#bbf7d0'], // verde oscuro y verde claro
        borderRadius: 8,
        barThickness: 50,
      },
      {
        type: 'line',
        label: 'Reducción',
        data: emissions,
        borderColor: '#16a34a',
        borderWidth: 2,
        borderDash: [5, 5],
        pointBackgroundColor: '#15803d',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: context =>
            `${context.dataset.label}: ${context.raw} tCO₂eq`,
        },
      },
      legend: { position: 'top' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'tCO₂eq',
          color: '#14532d',
          font: { weight: 'bold' },
        },
      },
      x: {
        ticks: {
          color: '#166534',
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-lg font-semibold text-primary mb-4">
        GHG Emissions Performance
      </h2>
      <Chart type="bar" data={data} options={options}  />
    </div>
  );
};

export default GHGEmissionsPerformanceChart;
