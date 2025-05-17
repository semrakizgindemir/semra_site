import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: 48px;
  height: 48px;
  background: transparent;
  border: 2px solid #FF0000;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: width 0.3s ease-out,
              height 0.3s ease-out,
              border 0.3s ease-out,
              transform 0.1s ease-out,
              background 0.3s ease-out;
  transform: translate(-50%, -50%);
  will-change: transform;
  
  &.hovered {
    width: 80px;
    height: 80px;
    border: 2px solid rgba(255, 0, 0, 0.8);
    background: rgba(255, 0, 0, 0.1);
    transition: all 0.4s ease-in-out;
  }

  &::after {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background: #FF0000;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.classList.contains('clickable')) {
        setIsHovered(true);
      }
    };

    const onMouseOut = () => {
      setIsHovered(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const updatePosition = () => {
      posX += (mouseX - posX) * 0.2;
      posY += (mouseY - posY) * 0.2;
      setPosition({ x: posX, y: posY });
      requestAnimationFrame(updatePosition);
    };
    updatePosition();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  return (
    <CursorDot 
      className={isHovered ? 'hovered' : ''}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};

export default Cursor; 