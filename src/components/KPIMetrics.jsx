import React from 'react';
import KPIComponent from './KPIComponent';

const KPIMetrics = () => {
  return (
    <div
      className="mt-4 flex justify-center"
    >
      <div
        className="flex gap-4 flex-wrap justify-center p-4 rounded-md shadow-md"
       
      >
        <KPIComponent label="Scope 1" value="27.47" unit="tCO₂eq" top="100px" left="60px" />
<KPIComponent label="Scope 2" value="108.76" unit="tCO₂eq" top="100px" left="340px" />
<KPIComponent label="Scope 3" value="318.4" unit="tCO₂eq" top="100px" left="620px" />

      </div>
    </div>
  );
};

export default KPIMetrics;
