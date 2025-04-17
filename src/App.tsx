import React, { useState } from 'react';
import './App.css'; // Optional for styling

const RotatingImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [currentImage, setCurrentImage] = useState('me.jpg');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    display: 'block',
    width: '50%',
    height: 'auto',
    margin: '0 auto',
    transition: 'all 0.5s ease-in-out',
    transform: currentImage === 'me.jpg' ? (isHovered ? 'rotate(180deg)' : undefined) : (isHovered ? 'translate(0px, -100px)' : undefined),
    opacity: currentImage === 'bunny.png' && isHovered ? 0.5 : 1,
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '200px 0px 0px 0px',
  };

  const handleClickEvent = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImage(currentImage === 'me.jpg' ? 'bunny.png' : 'me.jpg');
      setIsFading(false);
    }, 500);
  };



  return (
    <div style={containerStyle}>
      <img
        src={currentImage}
        alt="Rotating on hover"
        style={{
          ...imageStyle,
          opacity: isFading ? 0 : 1,
          transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickEvent}
      />
    </div>
  );
};

export default RotatingImage;
