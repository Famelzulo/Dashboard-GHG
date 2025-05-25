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
      label: 'PECE',
      data: [30, 28, 25, 21, 18],
      borderColor: '#52b788',
      tension: 0.4,
    },
    {
      label: 'HST Value',
      data: [40, 35, 30, 27, 24],
      borderColor: '#1b4332',
      tension: 0.4,
    }
  ]
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
      }
    }
  },
  scales: {
    y: {
      ticks: { color: '#14532d', font: { size: 9 } },
    },
    x: {
      ticks: { color: '#14532d', font: { size: 9 } },
    }
  }
};

export default function IndicatorsTo2030Chart() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        maxWidth: '300px',
        height: '280px',
        maxHeight: '280px',   
        top: '120px',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '10px 10px 6px rgba(0,0,0,0.1)',
        marginLeft: '404px',
      }}
    >
      <h3 style={{
        color: '#14532d',
        fontWeight: '600',
        fontSize: '16px',
        marginBottom: '12px',
        textAlign: 'center'
      }}>Proyección HST al 2030</h3>
      <div style={{ width: '100%', height: 'calc(100% - 40px)' }}>
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: '#14532d', font: { size: 10 } },
              },
              tooltip: {
                callbacks: {
                  label: ctx => `${ctx.dataset.label}: ${ctx.raw}`,
                },
              },
            },
            scales: {
              y: { ticks: { color: '#14532d', font: { size: 9 } } },
              x: { ticks: { color: '#14532d', font: { size: 9 } } },
            },
          }}
        />
      </div>
    </div>
  );
}


