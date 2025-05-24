import React, { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

const GHGEmissionsByScopeChart = () => {
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
      type: 'doughnut',
      data: {
        labels: ['Scope 1', 'Scope 2', 'Scope 3'],
        datasets: [{
          label: 'tCO₂eq',
          data: [27.47, 108.76, 318.4],
          backgroundColor: ['#86efac', '#4ade80', '#22c55e'],
          borderColor: '#fff',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: context => `${context.label}: ${context.raw} tCO₂eq`,
            },
          },
          legend: {
            position: 'bottom',
            labels: {
              color: '#14532d',
              font: { size: 8 },
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
    <div className="h-full w-full bg-white p-2 rounded-md shadow-sm flex flex-col items-center justify-center">
      <h5 className="text-green-600 font-semibold text-sm mb-1 text-center">
        Emisiones por Scope
      </h5>
      <div className="h-full w-full">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default GHGEmissionsByScopeChart;
