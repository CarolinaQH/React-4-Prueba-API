// Importación de módulos
import React from 'react';
import './App.css';
import MiApi from './components/MiApi';

// componente principal
function App() {

  // Estructura del componente
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido a la App de Gatitos!</h1>
      </header>
      <main className="App-main">
        <MiApi />
      </main>
      <footer className="App-footer">
        <p>© 2023 App de 🐱 </p>
      </footer>
    </div>
  );
}
// Exportación del componente
export default App;









