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
              font: { size: 10 },
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
  style={{
    position: 'absolute',
    top: '0px', // ↓ mientras menor el valor, más arriba
    width: '100%',
    maxWidth: '280px',
    height: '100%',
    maxHeight: '300px',
    margin: '0px 350px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    marginTop: '0px',
  }}
>

      {/* Título independiente, flotante */}
      <h5
        style={{
          position: 'absolute',
          maxHeight: '100%',
          height: '30px',
          maxWidth: '100%',
          width: '190px',
          transform: 'translateX(-50%)',
          color: '#15803d',
          fontWeight: '600',
          fontSize: '18px',
          backgroundColor: '#ffffff',
          borderRadius: '5px',
          padding: '4px 8px',
          boxShadow: '0px 5px 6px rgba(0,0,0,0.1)',
          zIndex: 1,
          top: '610px',
          marginLeft: '190px',
        }}
      >
        Emisiones por Scope
      </h5>

      {/* Contenedor del gráfico */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#ffffff',
          padding: '25px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          maxHeight: '300px',
          height: '100%',
          maxWidth: '250px',
          width: '100%',
          maxHeight: '250px',
          height: '100%',
          marginTop: '478px',
          marginLeft: '50px',
          boxShadow: '0px 5px 6px rgba(0,0,0,0.1)',

        }}
      >
        <canvas ref={chartRef} style={{ width: '100%' , height: '100%' }} />
      </div>
    </div>
  );
};

export default GHGEmissionsByScopeChart;
