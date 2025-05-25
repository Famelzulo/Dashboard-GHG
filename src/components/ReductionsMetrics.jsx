import { color } from "chart.js/helpers";

export default function ReductionMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 text-light">
      <div className="bg-green-dark p-4 rounded-xl text-center shadow">
        <h3 className="text-lg"
        style={{ color: 'green',
          backgroundColor: 'white',
          padding: '10px ',
          fontSize: '1rem',
          fontWeight: 'bold',
          marginLeft: '60px',
          marginTop: '400px',
          margonbottom: '10px',
          width: '100%',
          maxWidth: '260px',
         borderRadius: '8px',
          boxShadow: '10px 5px 6px rgba(0,0,0,0.1)',


         }}>Total Reduction Percentage Reduction  -35%</h3>
      </div>

      <div className= "grid grid-cols-2 gap-4 text-light">
        <h8 className="text-lg"
        style={{ 
          backgroundColor: '#f9fafb',
          padding: '20px ',
          fontSize: '1rem',
          fontWeight: 'bold',
          marginLeft: '60px',
          top: '0px',
         borderRadius: '8px',
          boxShadow: '10px 5px 6px rgba(0,0,0,0.1)',
          color: 'green',


         }}>Absolute Reduction -17 MtCO₂e
        </h8>
      </div>
    </div>
  );
}

