import React from 'react';
import KPIComponent from './KPIComponent';

const HSTKPISection = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <KPIComponent title="Meta de reducción para 2030" value="70%" unit="vs. año base 2021" />
      <KPIComponent title="Emisiones proyectadas en 2030" value="110.25" unit="tCO₂eq" />
      <KPIComponent title="Reducción acumulada al 2024" value="269.48" unit="tCO₂eq" />
    </div>
  );
};

export default HSTKPISection;
