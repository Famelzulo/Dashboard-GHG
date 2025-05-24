import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

const data = {
  labels: ['2022', '2024', '2026', '2028', '2030'],
  datasets: [
    {
      label: 'Actual',
      data: [50, 42, 36, 28, 24],
      borderColor: '#2d6a4f',
      tension: 0.3,
      fill: false,
    },
    {
      label: 'Target',
      data: [50, 38, 30, 20, 10],
      borderColor: '#40916c',
      borderDash: [5, 5],
      tension: 0.3,
      fill: false,
    },
    {
      label: 'Projected',
      data: [50, 40, 32, 24, 18],
      borderColor: '#74c69d',
      tension: 0.3,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#14532d',
        font: { size: 10 },
      },
    },
    tooltip: {
      callbacks: {
        label: context => `${context.dataset.label}: ${context.raw}`,
      },
    },
  },
  scales: {
    y: {
      ticks: { color: '#14532d', font: { size: 9 } },
    },
    x: {
      ticks: { color: '#14532d', font: { size: 9 } },
    },
  },
};

export default function TotalEmissionsChart() {
  return (
    <div
      style={{
        maxWidth: '600px',    // ancho máximo limitado
        width: '90%',         // ocupa el 90% del ancho del contenedor padre
        height: '300px',      // altura fija para mantener proporción
        margin: '20px auto',  // centrado horizontal automático
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h5
        style={{
          fontSize: '20px',
          color: '#7ef26d',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '16px',
          textAlign: 'center',
          marginTop: '0',
          marginLeft: '0',
        }}
      >
        Emisiones Totales
      </h5>

      <div style={{ width: '100%', height: 'calc(100% - 40px)' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
