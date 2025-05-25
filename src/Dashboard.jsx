import React from 'react';
import EmissionsBySourceChart from './components/EmissionsBySourceChart';
import GHGEmissionsByScopeChart from './components/GHGEmissionsByScopeChart';
import TrendChart from './components/TrendChart';
import KPIMetrics from './components/KPIMetrics';
import TotalEmissionsChart from './components/TotalEmissionsChart';
import ReductionsMetrics from './components/ReductionsMetrics';
import IndicatorsTo2030Chart from './components/IndicatorsTo2030Chart';

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-gray-500 p-2 overflow-hidden">
      <div className="bg-white rounded-lg p-3 shadow-lg h-full flex flex-col overflow-hidden">
        {/* Header */}
        <h1 className="text-center font-bold mb-2 text-xl text-green-400"
          style={{
            color: '#33662b',
            fontSize: '22px',
            fontWeight: 'bold',
            marginLeft: '40px',
            marginTop: '60px',
            width: '100%',
            maxWidth: '600px',
            padding: '10px',
          }}>

             <img
    src="https://images.icon-icons.com/1863/PNG/96/dashboard_119241.png"
    alt="GHG Icon"
    style={{ width: '20px', height: '20px', objectFit: 'contain',  }}
  />

          Dashboard GHG Emissions
        </h1>

        {/* Grid compacto sin scroll */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2 flex-grow overflow-hidden">
          <div className="h-[150px] overflow-hidden">
            <EmissionsBySourceChart />
          </div>
          <div className="h-[150px] overflow-hidden">
            <GHGEmissionsByScopeChart />
          </div>
          <div className="h-[150px] overflow-hidden">
            <TrendChart />
          </div>
          <div className="h-[150px] overflow-hidden">
            <TotalEmissionsChart />
          </div>
          <div className="h-[150px] overflow-hidden">
            <KPIMetrics />
          </div>
          <div className="h-[150px] overflow-hidden">
            <ReductionsMetrics />
          </div>
          <div className="h-[150px] overflow-hidden max-w-[300px] mx-auto">
            <IndicatorsTo2030Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
