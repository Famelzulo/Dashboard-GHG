// src/components/SourcesTable.jsx
function SourcesTable({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>Sin datos disponibles</p>;
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2 text-green-700">
        Emisiones por Fuente
      </h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-green-800 border-b">
            <th className="p-2">Fuente</th>
            <th className="p-2">Emisiones (tCO₂e)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((source, index) => (
            <tr key={index} className="border-b hover:bg-green-50">
              <td className="p-2">{source.name}</td>
              <td className="p-2">{source.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SourcesTable;
