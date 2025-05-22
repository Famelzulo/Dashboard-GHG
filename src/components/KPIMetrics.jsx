import React from 'react';
import KPIComponent from './KPIComponent.jsx';

const KPIMetrics = () => {
  return (
    <div
      className="mt-4 flex justify-center"
    >
      <div
        className="flex gap-4 flex-wrap justify-center p-4 rounded-md shadow-md"
       
      >
        <KPIComponent label="Meta HST 2025" value="100" unit="tCO₂e" />
        <KPIComponent label="Meta HST 2030" value="50" unit="tCO₂e" />
        <KPIComponent label="Reducción Total" value="75%" unit="" />
      </div>
    </div>
  );
};

export default KPIMetrics;
