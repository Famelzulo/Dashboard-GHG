import React, { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

const TrendChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    chartInstance.current = new Chart.Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [
          {
            label: 'Emisiones (tons CO₂)',
            data: [389.73, 184.57, 150.23, 120.45, 100.12, 80.45, 70.23, 60.12, 50.00, 40.00],
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22, 163, 74, 0.2)',
            fill: true,
            tension: 0.3,
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { font: { size: 8 } } },
          tooltip: { mode: 'index', intersect: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { font: { size: 8 } },
          },
          x: {
            ticks: { font: { size: 8 } },
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
      className="bg-white p-2 rounded-md shadow-sm flex flex-col items-center justify-center"
      style={{
        width: '250px',
        height: '280px',
        border: '5px solid #7ef26d',
        fontSize: '20px',
        marginLeft: '404px',
        marginTop: '-30px',
        borderRadius: '8px',
        backgroundColor: '#f9fafb',
      }}
    >
      <h3
        className="text-green-700 font-semibold text-lg mb-2"
        style={{
          marginLeft: '40px',
          marginTop: '5px',
          fontSize: '15px',
          color: '#7ef26d',
          
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Tendencia de Emisiones
      </h3>
      <canvas
        ref={chartRef}
        width={190}
        height={190}
        style={{
          display: 'block',
          marginTop: '30px',
          marginLeft: '20px',
          
        }}
      />
    </div>
  );
};

export default TrendChart;
