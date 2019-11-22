import React from 'react';

const Image = ({ id, name, image, handleImageClick }) => {
  return (
    <img
      src={image}
      alt={name}
      className="img-fluid w-100 h-50"
      onClick={() => handleImageClick(id)}
    />
  );
};

export default Image;
