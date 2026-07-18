import React from 'react';

const Legend = () => {
  return (
    <div className="rounded-xl p-6 border-2 mb-8" style={{ 
      backgroundColor: '#F2D1D9',
      borderColor: '#D93664'
    }}>
      <h3 className="text-xl font-bold mb-4" style={{ color: '#731731' }}>📖 Guía de Colores</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded border-2" style={{ 
            backgroundColor: '#F294A5',
            borderColor: '#D93664'
          }}></div>
          <span style={{ color: '#731731' }} className="text-sm font-medium">Sin desbloquear</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded border-2 animate-pulse" style={{ 
            backgroundColor: '#F294A5',
            borderColor: '#D93664'
          }}></div>
          <span style={{ color: '#731731' }} className="text-sm font-medium">✨ Desbloqueada</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded border-2" style={{ 
            backgroundColor: '#D93664',
            borderColor: '#731731'
          }}></div>
          <span style={{ color: '#731731' }} className="text-sm font-medium">✓ Aprobada</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded border-2 opacity-60" style={{ 
            backgroundColor: '#F2D1D9',
            borderColor: '#D93664',
            color: '#731731'
          }}></div>
          <span style={{ color: '#731731' }} className="text-sm font-medium">🔒 Bloqueada</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;