import React, { useState } from 'react';

const Titulos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1)); // Ajustado a 3 slides
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1)); // Ajustado a 3 slides
  };

  const carouselContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '90%', // Ajustado para ocupar el 90% del ancho de la pantalla
    maxWidth: '500px', // Máximo ancho para pantallas grandes
    height: 'auto',
    margin: '20px auto', // Ajustado el margen
    borderRadius: '20px', // Ajustado el radio de borde
    marginBottom: '30px', // Ajustado el margen inferior
  };

  const carouselSlideStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    flexDirection: 'row',
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  const imageStyle = {
    width: '100%',
    flexShrink: 0,
    borderRadius: '10px', // Agregado radio de borde a las imágenes
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '8px 12px', // Ajustado el padding
    cursor: 'pointer',
    fontSize: '18px', // Ajustado el tamaño de la fuente
    borderRadius: '5px', // Agregado radio de borde a los botones
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: '5px', // Ajustado el posicionamiento
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '5px', // Ajustado el posicionamiento
  };

  return (
    <div>
      <div>
        <h1 style={{ fontSize: "clamp(2rem, 8vw, 3rem)", marginBottom: "30px", marginTop: "20px", fontWeight: "bold", textAlign: "center" }}>TITULOS</h1>
      </div>
      <div style={carouselContainerStyle}>
        <div style={carouselSlideStyle}>
          <img src="https://res.cloudinary.com/dxvkqumpu/image/upload/v1744324612/WhatsApp_Image_2025-04-10_at_15.24.08_1_b5fgvr.jpg" alt="Imagen 1" style={imageStyle} />
          <img src="https://res.cloudinary.com/dxvkqumpu/image/upload/v1744324618/WhatsApp_Image_2025-04-10_at_15.28.25_ljjyt9.jpg" alt="Imagen 2" style={imageStyle} />
          <img src="https://res.cloudinary.com/dxvkqumpu/image/upload/v1744324734/WhatsApp_Image_2025-04-10_at_15.49.27_smzn2q.jpg" alt="Imagen 3" style={imageStyle} />
          <img src="https://res.cloudinary.com/dxvkqumpu/image/upload/v1744324734/WhatsApp_Image_2025-04-10_at_15.49.27_smzn2q.jpg" alt="Imagen 4" style={imageStyle} />
        </div>
        <button style={prevButtonStyle} onClick={handlePrev}>
          &#10094;
        </button>
        <button style={nextButtonStyle} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Titulos;