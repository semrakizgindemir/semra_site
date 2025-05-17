import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ isScrolled }) =>
    isScrolled
      ? 'rgba(0, 0, 0, 0.95)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)'};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: ${({ isScrolled }) =>
    isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const Logo = styled(motion.h1)`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgb(255, 60, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  white-space: nowrap;
  margin-left: 1rem;
  margin-right: 6rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }
`;

const MenuSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    gap: 0;
    position: fixed;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    transition: left 0.3s ease;
    backdrop-filter: blur(10px);
  }
`;

const HomeLink = styled(motion.button)`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(254, 242, 154);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  padding: 0.5rem 1rem;

  &:hover {
    color: rgb(255, 60, 0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 4px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    background: linear-gradient(90deg, rgba(255, 60, 0, 0.1), rgba(255, 60, 0, 0.1));
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: rgb(255, 60, 0);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }
`;

const NavItem = styled(motion.button)`
  font-size: 1rem;
  font-weight: 600;
  color: rgb(254, 242, 154);
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: rgb(255, 60, 0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ isActive }) =>
      isActive
        ? 'linear-gradient(90deg, rgba(254, 242, 154, 0.15), rgba(254, 242, 154, 0.15))'
        : 'transparent'};
    border-radius: 4px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    background: linear-gradient(90deg, rgba(255, 60, 0, 0.1), rgba(255, 60, 0, 0.1));
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background: rgb(255, 60, 0);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  margin-left: auto;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: rgb(255, 60, 0);
    transition: all 0.3s ease;
    transform-origin: left;
  }

  &.active {
    span:first-child {
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:last-child {
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 8px 0 8px 8px;
  }
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: rgb(255, 60, 0);
`;

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine scroll direction and visibility
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        if (currentScrollPos > 100) { // Only hide after scrolling down 100px
          setIsVisible(false);
        }
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (currentScrollPos / windowHeight) * 100;
      setScrollProgress(scrolled);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <NavContainer
      isScrolled={isScrolled}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <NavContent>
        <Logo>
          SEMRA KIZGINDEMİR
        </Logo>

        <MenuButton
          className={isMenuOpen ? 'active' : ''}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>

        <MenuSection isOpen={isMenuOpen}>
          <NavLinks isOpen={isMenuOpen}>
            <NavItem
              onClick={() => {
                scrollToSection('home');
                setIsMenuOpen(false);
              }}
              isActive={activeSection === 'home'}
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ANA SAYFA
            </NavItem>
            <NavItem
              onClick={() => scrollToSection('about')}
              isActive={activeSection === 'about'}
              variants={navItemVariants}
            >
              HAKKIMDA
            </NavItem>
            <NavItem
              onClick={() => scrollToSection('skills')}
              isActive={activeSection === 'skills'}
              variants={navItemVariants}
            >
              YETENEKLER  
            </NavItem>
            <NavItem
              onClick={() => scrollToSection('projects')}
              isActive={activeSection === 'projects'}
              variants={navItemVariants}
            >
              PROJELER
              
            </NavItem>
            <NavItem
              onClick={() => scrollToSection('contact')}
              isActive={activeSection === 'contact'}
              variants={navItemVariants}
            >
              İLETİŞİM
            </NavItem>
          </NavLinks>
        </MenuSection>

        <ProgressBar
          style={{ width: `${scrollProgress}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 