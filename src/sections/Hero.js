import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiFacebook } from 'react-icons/fi';
import { containerAnimation, letterAnimation, wordAnimation, fadeIn } from '../styles/animations';

const GlobalStyle = createGlobalStyle`
  * {
    cursor: none !important;
  }
  
  html, body, #root, button, a {
    cursor: none !important;
  }

  ::selection {
    background: rgba(255, 0, 0, 0.3);
    color: #FFFFFF;
  }

  ::-moz-selection {
    background: rgba(255, 0, 0, 0.3);
    color: #FFFFFF;
  }
`;

const CursorDot = styled.div`
  width: 10px;
  height: 10px;
  background: rgb(255, 45, 0);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999999;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease;

  &.hovered {
    transform: translate(-50%, -50%) scale(2);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  @media (max-width: 480px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(motion.div)`
  max-width: 900px;
  z-index: 2;
  text-align: center;
  width: 100%;
`;

const TextSpan = styled.span`
  display: inline-block;
  color: rgb(254, 242, 154);
  white-space: pre;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -1px;
  
  span.block {
    display: block;
    font-size: 0.9em;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1.2rem, 1.5vw, 1.4rem);
  line-height: 1.8;
  margin-bottom: 3.5rem;
  max-width: 700px;
  font-weight: 400;
  letter-spacing: 0.2px;
  transform: skew(-5deg);
  margin: 0 auto 3.5rem;
  color: rgb(254, 242, 154);
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: none;
  -webkit-hyphens: none;
  -ms-hyphens: none;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.8rem;
  margin-top: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
`;

const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  background: transparent;
  border: 2px solid rgb(254, 242, 154);
  color: rgb(254, 242, 154);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-transform: uppercase;
  transform: skew(-5deg);
  min-width: 220px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgb(255, 45, 0);
    transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover {
    color: #000000;
    transform: skew(-5deg) translateY(-2px);
    border-color: rgb(255, 45, 0);

    &::before {
      width: 100%;
    }
  }

  &.outline {
    color: rgb(254, 242, 154);
    border: 2px solid rgb(254, 242, 154);
    
    &:hover {
      color: #000000;
      border-color: rgb(255, 45, 0);
      
      &::before {
        background: rgb(255, 45, 0);
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2.5rem;
    font-size: 1rem;
    min-width: 200px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%) skew(-5deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: rgb(254, 242, 154);

  .text {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 600;
    opacity: 0.8;
  }

  .line {
    width: 2px;
    height: 4rem;
    background: rgb(255, 45, 0);
    transform-origin: top;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    bottom: 2rem;
    
    .text {
      font-size: 0.8rem;
    }
    
    .line {
      height: 3rem;
    }
  }
`;

const AnimatedBackgroundText = styled(motion.div)`
  position: absolute;
  font-size: clamp(9rem, 22vw, 18rem);
  font-weight: 900;
  color: transparent;
  white-space: nowrap;
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  opacity: 0.3;
  letter-spacing: -5px;
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${props => props.direction === 'left' ? 'slideLeft' : 'slideRight'} 300s linear infinite;

  &.top {
    top: 10%;
    background: #FF0000;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &.bottom {
    bottom: 0.5%;
    background: #FF0000;
    -webkit-background-clip: text;
    background-clip: text;
  }

  .desktop-text {
    display: inline;
  }

  .mobile-text {
    display: none;
  }

  @media (max-width: 1200px) {
    font-size: clamp(7rem, 20vw, 15rem);
    letter-spacing: -3px;

    &.top {
      top: 10%;
    }

    &.bottom {
      bottom: 0.5%;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(4rem, 16vw, 10rem);
    letter-spacing: -2px;
    opacity: 0.2;
    animation: ${props => props.direction === 'left' ? 'slideLeft' : 'slideRight'} 120s linear infinite;

    &.top {
      top: 10%;
    }

    &.bottom {
      bottom: 0.5%;
    }

    .desktop-text {
      display: none;
    }

    .mobile-text {
      display: inline;
    }
  }

  @media (max-width: 480px) {
    font-size: clamp(2.5rem, 12vw, 8rem);
    letter-spacing: -1px;
    opacity: 0.15;
    animation: ${props => props.direction === 'left' ? 'slideLeft' : 'slideRight'} 100s linear infinite;

    &.top {
      top: 10%;
    }

    &.bottom {
      bottom: 0.5%;
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const LetterSpan = styled.span`
  display: inline-block;
  white-space: pre;
  margin-right: ${props => props.letter === ' ' ? '0.25em' : '0'};
`;

const HoverText = ({ text, className = '' }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <TextSpan key={index}>
          {char}
        </TextSpan>
      ))}
    </span>
  );
};

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);
    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <GlobalStyle />
      <CursorDot 
        className={isHovered ? 'hovered' : ''} 
        style={{ left: position.x, top: position.y }} 
      />
      <HeroSection id="home">
        <AnimatedBackgroundText 
          className="top"
          direction="left"
        >
          <span className="desktop-text">
            DEVELOPER • CREATOR • DESIGNER •
          </span>
          <span className="mobile-text">
            CODE • WEB • UI •
          </span>
        </AnimatedBackgroundText>
        
        <Container>
          <Content
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Title>
              <HoverText text="MERHABA, BEN" /> 
              <span className="block">
                <HoverText text="SEMRA KIZGINDEMİR" />
              </span>
            </Title>
            <Description>
            <HoverText text="Bigisayar Mühendisliği öğrencisiyim. Yeni teknolojileri öğrenmek ve  öğrendiklerimi projelere dönüştürmek en büyük motivasyonum." />
            </Description>
            
            <ButtonGroup>
              <Button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.05 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="outline"
              >
                  İLETİŞİME GEÇ
              </Button>

              <Button
                onClick={() => scrollToSection('projects')}
                className="outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.05 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                PROJELERİMİ GÖR
              </Button>
            </ButtonGroup>
          </Content>
        </Container>
        
        <ScrollIndicator
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text">KAYDIR</span>
          <motion.div 
            className="line"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </ScrollIndicator>
        
        <AnimatedBackgroundText 
          className="bottom"
          direction="right"
        >
          <span className="desktop-text">
            PORTFOLIO • PROJECTS • WORK •
          </span>
          <span className="mobile-text">
            DEV • UX • APP •
          </span>
        </AnimatedBackgroundText>
      </HeroSection>
    </>
  );
};

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export default Hero; 