import React, { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

const ReductionsChart = () => {
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
      type: 'bar',
      data: {
        labels: ['Absoluta', 'Porcentual'],
        datasets: [{
          label: 'Reducción',
          data: [205.16, 52.6],
          backgroundColor: ['#4ade80', '#86efac'],
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataIndex === 1
                  ? `${context.parsed.y}%`
                  : `${context.parsed.y} tCO₂e`;
              },
            },
          },
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
      className="bg-white p-2 rounded-md shadow-sm" 
      style={{ width :'270px', 
        height: '280px',
         fontSize: '10px',
          border: '5px solid #7ef26d',
          margin: '10px',
        marginTop: '-260px',
        marginLeft: '1px',
        borderRadius: '8px',
        backgroundColor: '#f9fafb',
            fontFamily: 'Arial, sans-serif',
            marginTop: '-284px',
          }} 
    >
     <h4 className="text-xs font-semibold text-green-700 mb-1" 
      style={{ marginLeft: '40px',
       marginTop: '5px',
        fontSize: '15px',
         color: '#7ef26d',
       }}>
  Reducción de Emisiones
</h4>
      <canvas 
        ref={chartRef} 
        width={180}  // ancho fijo
        height={180} // alto fijo
       
        style={{ 
              display: 'flex', 
    marginLeft: '60px',   
    marginTop: '40px',

  }}
      />
    </div>
  );
};

export default ReductionsChart;
