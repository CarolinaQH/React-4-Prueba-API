// Importación de módulos

import React, { useState, useEffect } from 'react';
import Buscador from './buscador';

// Definición del componente
const MiApi = () => {
    // Inicialización de estados
const [catImage, setCatImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

//   Efecto
  useEffect(() => {
    const fetchCatImage = async () => {
    try {
        const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_34Gm3QlfZqha7jrRvd7VFbzB9yQ62QZ7Ws8CoFazgAFKRXXghwraIC1P8rUd6KwY`
      );

      const data = await response.json();
      setCatImage(data);
    } catch (error) {
      console.error('Error al obtener imágenes:', error);
    }
  };

  fetchCatImage();
}, []);

// Función handleNextImage:
const handleNextImage = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % catImage.length);
};

// Renderizado del componente
return (
  <div>
    <Buscador onNext={handleNextImage} />
    {catImage.length > 0 && (
      <div className="cat-image">
        <img src={catImage[currentIndex].url} alt="Gato" />
      </div>
    )}
  </div>
);
};

export default MiApi;
