import React from 'react';

const Header = ({ completedCount, totalCount }) => {
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="text-white py-8 px-6 mb-8 rounded-lg shadow-2xl" style={{ 
      backgroundColor: '#D93664'
    }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">📚 Malla Curricular Interactiva</h1>
        <p className="text-white text-opacity-90 text-lg mb-6">Licenciatura en Lengua Castellana</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-lg">
            <div className="text-sm font-semibold text-white text-opacity-90">Materias Completadas</div>
            <div className="text-3xl font-bold mt-1">{completedCount}/{totalCount}</div>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-lg">
            <div className="text-sm font-semibold text-white text-opacity-90">Progreso</div>
            <div className="text-3xl font-bold mt-1">{percentage}%</div>
            <div className="mt-2 w-full bg-white bg-opacity-30 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{ 
                  width: `${percentage}%`,
                  backgroundColor: '#731731'
                }}
              ></div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur p-4 rounded-lg">
            <div className="text-sm font-semibold text-white text-opacity-90">Semestres</div>
            <div className="text-3xl font-bold mt-1">10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;