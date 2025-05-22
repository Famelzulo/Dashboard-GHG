import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const EmissionsBySourceChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Raw Materials', 'Electricity', 'Water', 'Home-Work'],
        datasets: [
          {
            label: '2021',
            data: [144.43, 36.58, 7.47, 31.03],
            backgroundColor: 'rgba(34,197,94,0.6)',
            borderRadius: 2,
          },
          {
            label: '2022',
            data: [50.47, 72.18, 42.57, 24.88],
            backgroundColor: 'rgba(74,222,128,0.6)',
            borderRadius: 2,
          },
          {
            label: '2023',
            data: [55.12, 70.45, 40.33, 26.77],
            backgroundColor: 'rgba(34,197,94,0.6)',
            borderRadius: 2,
          },
          {
            label: '2024',
            data: [110.00, 30.00, 6.50, 24.00],
            backgroundColor: 'rgba(74,222,128,0.6)',
            borderRadius: 2,
          },
          {
            label: '2025',
            data: [100.00, 28.00, 6.20, 22.00],
            backgroundColor: 'rgba(34,197,94,0.6)',
            borderRadius: 2,
          },
          {
            label: '2026',
            data: [92.00, 26.00, 5.90, 20.00],
            backgroundColor: 'rgba(74,222,128,0.6)',
            borderRadius: 2,
          },
          {
            label: '2027',
            data: [85.00, 24.50, 5.60, 18.00],
            backgroundColor: 'rgba(34,197,94,0.6)',
            borderRadius: 2,
          },
          {
            label: '2028',
            data: [78.00, 23.00, 5.30, 16.50],
            backgroundColor: 'rgba(74,222,128,0.6)',
            borderRadius: 2,
          },
          {
            label: '2029',
            data: [72.00, 21.50, 5.00, 15.00],
            backgroundColor: 'rgba(34,197,94,0.6)',
            borderRadius: 2,
          },
          {
            label: '2030',
            data: [66.00, 20.00, 4.70, 13.50],
            backgroundColor: 'rgba(74,222,128,0.6)',
            borderRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { size: 8 } },
          },
          tooltip: {
            callbacks: {
              label: context => `${context.dataset.label}: ${context.raw.toFixed(1)} tCO₂eq`,
            },
          },
        },
        scales: {
          x: {
            ticks: { font: { size: 7 } },
            grid: { display: false },
          },
          y: {
            ticks: {
              color: '#065f46',
              font: { size: 6 },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      className="bg-white p-2 rounded-md shadow-sm"
      style={{
        width: 835,
        height: 300,
        border: '5px solid #7ef26d',
        marginTop: '10px',
        borderRadius: '8px',
        backgroundColor: '#f9fafb',
      }}
    >
      <h6
        className="text-xs font-semibold text-green-700 mb-1 text-center"
        style={{
          marginLeft: '30px',
          marginTop: '30px',
          fontSize: '20px',
            color: '#7ef26d',
            fontFamily: 'Arial, sans-serif',

        }}
      >
        Emisiones por Fuente
      </h6>
      <canvas
        ref={chartRef}
        width={800}
        height={200}
        style={{
          display: 'grid',
          marginLeft: '20px',
          marginTop: '-40px',
        }}
      />
    </div>
  );
};

export default EmissionsBySourceChart;
