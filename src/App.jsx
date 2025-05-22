import React from 'react';
import Dashboard from './Dashboard';

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  DoughnutController,
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes solo UNA VEZ aquí:
Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  DoughnutController,
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

const App = () => {
  return <Dashboard />;
};

export default App;
