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
        position: 'absolute', // lo hace independiente del flujo
        maxWidth: '360px',
        maxHeight: '290px',    // ancho máximo limitado
        width: '100%',         // ocupa el 90% del ancho del contenedor padre
        height: '100%',      // altura fija para mantener proporción
        margin: '20px auto',  // centrado horizontal automático
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '10px 8px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        marginTop: '370px',
        marginLeft: '780px',
      }}
    >
      <h4
  style={{
    position: 'absolute', // lo hace independiente del flujo
    bottom: '240px',          // posición vertical desde el borde superior
    left: '0px',         // posición horizontal desde el borde izquierdo
    fontSize: '50px',
    color: 'green',
    fontFamily: 'Arial, sans-serif',
    fontSize: '20px',
        boxShadow: '10 2px 6px rgba(0,0,0,0.1)',
        padding: '14px',
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        maxHeight: '30px', // altura máxima
        maxWidth: '352px',  // ancho máximo

    
  }}
>
  Emisiones Totales
</h4>

      <div style={{ width: '300px', height: '300px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
