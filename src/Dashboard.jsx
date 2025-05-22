import React from 'react';
import EmissionsBySourceChart from './components/EmissionsBySourceChart';
import GHGEmissionsByScopeChart from './components/GHGEmissionsByScopeChart';
import ReductionsChart from './components/ReductionsChart';
import TrendChart from './components/TrendChart';
import KPIMetrics from './components/KPIMetrics';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-teal-300 p-4">
      <div className="h-full flex flex-col">
        <h1
          className="text-lg font-bold text-center text-green-800 mb-3"
          style={{
            fontSize: '45px',
            color: '#7ef26d',
            fontFamily: 'Arial, sans-serif',
            marginTop: '20px',
          }}
        >
          Dashboard GHG Emissions
        </h1>

        {/* GRÁFICOS: Responsive con Flexbox */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="w-full md:w-1/2">
            <EmissionsBySourceChart />
          </div>
          <div className="w-full md:w-1/2">
            <GHGEmissionsByScopeChart />
          </div>
          <div className="w-full md:w-1/2">
            <ReductionsChart />
          </div>
          <div className="w-full md:w-1/2">
            <TrendChart />
          </div>
        </div>

        {/* KPIs debajo */}
        <div className="mt-6">
          <KPIMetrics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
