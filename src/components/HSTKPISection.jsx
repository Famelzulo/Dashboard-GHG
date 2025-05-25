import React from 'react';
import KPIComponent from './KPIComponent';

const HSTKPISectionGrid = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',    // ✅ 3 columnas horizontales
        gap: '20px',                          
        padding: '10px',
        alignItems: 'center',                 // ✅ Centrar verticalmente
      }}
    >
      <KPIComponent label="Scope 1" value={150} unit="USD" />
      <KPIComponent label="Scope 2" value={1200} unit="Usuarios" />
      <KPIComponent label="Scope 3" value={75} unit="tons" />
    </div>
  );
};

export default HSTKPISection;
