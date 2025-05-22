import React from 'react';

const KPIComponent = ({ label, value, unit }) => {
  return (
    <div
      className="bg-white p-2 rounded-md shadow-sm"
      style={{
        width: 250,
        height: 100,
        border: '5px solid #7ef26d',
        marginTop: '-275px',
        marginLeft: '990px',
        borderRadius: '8px',
        display: 'flex',
        backgroundColor: '#f9fafb',
      }}
    >
      <h6
        className="text-xs font-semibold text-green-700 mb-1 text-center"
        style={{
          fontSize: '20px',
          color: '#4b5563', 
          marginLeft: '50px',
          marginTop: '40px',
        }}
      >
        {label}
      </h6>
      
      <div className="text-center">
        <span
          className="text-xl font-bold"
          style={{ color: '#1f2937',
            fontSize: '20px', 
            marginLeft: '10px',
            marginTop: '-20px',
            fontWeight: 'bold',
           }} 
        >
          {value}
        </span>
        {unit && (
          <span
            className="text-sm font-normal ml-1"
            style={{ color: '#6b7280',
              fontSize: '20px', 
              marginLeft: '10px',
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
