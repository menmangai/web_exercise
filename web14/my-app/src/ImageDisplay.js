import React from 'react';
import srcImage from './Images/src-image.jpg'; 
function ImageDisplay() {
  return (
    <div>
      <h2>Image from public/Images folder:</h2>
      <img src={`${process.env.PUBLIC_URL}/Images/public-image.jpg`} alt="Public Image" />

      <h2>Image from src/Images folder:</h2>
      <img src={srcImage} alt="Src Image" />
    </div>
  );
}

export default ImageDisplay;
