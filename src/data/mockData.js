import { Line } from 'react-chartjs-2';

const data = {
  labels: ['2022', '2024', '2026', '2028', '2030'],
  datasets: [
    {
      label: 'Actual',
      data: [50, 42, 36, 28, 24],
      borderColor: '#2d6a4f',
      tension: 0.3,
      fill: false
    },
    {
      label: 'Target',
      data: [50, 38, 30, 20, 10],
      borderColor: '#40916c',
      borderDash: [5, 5],
      tension: 0.3,
      fill: false
    },
    {
      label: 'Projected',
      data: [50, 40, 32, 24, 18],
      borderColor: '#74c69d',
      tension: 0.3,
      fill: false
    }
  ]
};

export default function TotalEmissionsChart() {
  return <Line data={data} />;
}
