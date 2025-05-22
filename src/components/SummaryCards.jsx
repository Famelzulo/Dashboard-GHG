// src/components/SummaryCards.jsx
import React from 'react';

export default function SummaryCards({ totalEmissions, reduction }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-green-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Total Emisiones 2022</h2>
        <p className="text-3xl font-bold text-green-900">{totalEmissions[2022]} tCO₂e</p>
      </div>
      <div className="bg-green-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Reducción Absoluta</h2>
        <p className="text-3xl font-bold text-green-900">-{reduction.absolute} tCO₂e</p>
      </div>
      <div className="bg-green-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Reducción Porcentual</h2>
        <p className="text-3xl font-bold text-green-900">-{reduction.percentage}%</p>
      </div>
    </div>
  );
}
