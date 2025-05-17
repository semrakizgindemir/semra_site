import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  transform: translate(-50%, -50%);
`;

const CursorCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
  transform: translate(-50%, -50%) scale(${props => props.isHovered ? 1.5 : 1});
  opacity: ${props => props.isHovered ? 0.5 : 0.8};
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .clickable')) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], .clickable')) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <CursorDot style={{ left: position.x, top: position.y }} />
      <CursorCircle 
        style={{ left: position.x, top: position.y }}
        isHovered={isHovered}
      />
    </>
  );
};

export default CustomCursor; 