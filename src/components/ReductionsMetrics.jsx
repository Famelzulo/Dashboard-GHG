export default function ReductionMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 text-light">
      <div className="bg-green-dark p-4 rounded-xl text-center shadow">
        <h3 className="text-lg">Percentage Reduction</h3>
        <p className="text-3xl font-bold">-35%</p>
      </div>
      <div className="bg-green-dark p-4 rounded-xl text-center shadow">
        <h3 className="text-lg">Absolute Reduction</h3>
        <p className="text-3xl font-bold">-17 MtCO₂e</p>
      </div>
    </div>
  );
}

