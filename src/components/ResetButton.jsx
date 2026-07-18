import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="fixed bottom-6 right-6 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      style={{ 
        backgroundColor: '#D93664'
      }}
    >
      🔄 Reiniciar Progreso
    </button>
  );
};

export default ResetButton;