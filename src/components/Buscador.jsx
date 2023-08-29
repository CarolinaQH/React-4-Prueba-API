// Importación de módulos
import React from 'react';

// Se define el componente
const Buscador = ({ onNext }) => {

    // Se renderiza componente
  return (
    <div>
      <button onClick={onNext}>Próximo gatito 🩷</button>
    </div>
  );
};

export default Buscador;


