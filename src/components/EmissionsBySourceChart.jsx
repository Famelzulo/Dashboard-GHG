import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Transport', 'Electricity', 'Other'],
  datasets: [
    {
      label: 'Scope 1',
      data: [15, 10, 12],
      backgroundColor: '#2d6a4f',
    },
    {
      label: 'Scope 3',
      data: [10, 12, 15],
      backgroundColor: '#74c69d',
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // permite adaptar tamaño al contenedor padre
  aspectRatio: 1,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#333',
        font: {
          size: 10,
          family: 'Arial',
          weight: 'bold',
        },
        padding: 8,
        boxWidth: 12,
      }
    },
    title: {
      display: true,
      text: 'Emissions by Source',
      color: '#555',
      font: {
        size: 12,
        family: 'Arial',
        weight: 'bold',
      },
      padding: { top: 2, bottom: 5 }
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#222',
      titleFont: { size: 12 },
      bodyFont: { size: 11 }
    }
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: '#444',
        font: { size: 8, family: 'Arial' },
        maxRotation: 0,
        padding: 4
      },
      grid: { color: '#eee', display: false }
    },
    y: {
      stacked: true,
      ticks: {
        color: '#444',
        font: { size: 8, family: 'Arial' },
        padding: 4,
        maxTicksLimit: 5
      },
      grid: { color: '#f0f0f0', lineWidth: 0.5 }
    }
  },
  layout: {
    padding: { top: 5, bottom: 5, left: 5, right: 5 }
  },
  elements: {
    bar: {
      borderRadius: 2,
      borderSkipped: false
    }
  }
};

export default function EmissionsBySourceChart() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        maxWidth: '380px',
        height: '312px',           // ✅ altura fija
        borderRadius: '8px',
        backgroundColor: '#fff',
        left: '790px',
        top: '120px',
        boxShadow: '10px 10px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}
