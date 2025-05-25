import React from 'react';

const KPIComponent = ({ label, value, unit }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth  : '200px',  
        height: '100%',
        maxHeight: '90px', // Altura máxima
        borderRadius: '8px',
        backgroundColor: 'white',
        padding: '4px 16px',
        display: 'flex',
        flexDirection: 'row', // Mantiene horizontal
        justifyContent: 'space-between', // Separa label y valor
        alignItems: 'center',
        marginBottom: '10px',
        marginTop: '10px',
        top: '350px', // Espacio desde la parte superior
        marginLeft: '80px', // Espacio a la izquierda
        boxShadow: '10px 9px 6px rgba(0,0,0,0.1)',}}
    >
      <h6
        style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#4b5563',
        }}
      >
        {label}
      </h6>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          // Removido marginTop para mantener horizontal
        }}
      >
        <span
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1f2937',
          }}
        >
          {value}
        </span>
        {unit && (
          <span
            style={{
              fontSize: '16px',
              color: '#6b7280',
              marginLeft: '6px',
            }}
          >
            {unit}
          </span>
        )}
      </div>
    </div>
  );
};

export default KPIComponent;