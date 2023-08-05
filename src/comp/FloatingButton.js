import React from 'react';

const FloatingButton = ({ image, alt, text, style, onClick }) => {
  return (
      <button className="floating-button" style={style} onClick={onClick}>
          <img src={image} alt={alt} className="button-image" />
          <span className="button-text">{text}</span>
      </button>
  );
};
export default FloatingButton;
