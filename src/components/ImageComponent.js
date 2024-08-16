

import React from 'react';

const ImageComponent = ({ src = '', alt = 'Image', className }) => {
  let imagePath = '';

  if (src && src.startsWith('data:image')) {
    // If the src is already a base64 string, use it directly
    imagePath = src;
  } else if (src) {
    try {
      // Attempt to load the image from the assets/images directory
      imagePath = require(`../assets/images/${src}`).default;
    } catch (error) {
      console.error("Error loading image:", error);
      imagePath = ''; // Provide a fallback or empty string
    }
  } else {
    console.error("Image source is undefined");
    // Optionally, set a placeholder image here
    imagePath = ''; // or 'path/to/placeholder.jpg';
  }

  return <img src={imagePath} alt={alt} className={className} />;
};

export default ImageComponent;

