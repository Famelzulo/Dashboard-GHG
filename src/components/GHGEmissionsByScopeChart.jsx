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
        maintainAspectRatio: true,
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
              font: { size: 7 },
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
    className="bg-white p-2 rounded-md shadow-sm flex flex-col items-center justify-center"
    style={{ 
      width: '250px', 
      height: '273px', 
      border: '5px solid #7ef26d',
      fontSize: '20px',
      marginLeft: '585px',
      marginTop: '25px',
      borderRadius: '8px',
      backgroundColor: '#f9fafb',

    }}
  >
    <h5 className="text-green-700 font-semibold text-lg mb-2"
       style={{ marginLeft: '30px'
       , marginTop: '20px'
       ,  fontSize: '15px' ,
          color: '#7ef26d',
          fontFamily: 'Arial, sans-serif',
       }}>
      Emisiones por Scope
    </h5>
    <canvas 
      ref={chartRef} 
      width={160}
      height={180}
      style={{ display: 'grid',
        marginTop: '-20px',
        marginLeft: '20px',
       }}
    />
  </div>
);
};

export default GHGEmissionsByScopeChart;
