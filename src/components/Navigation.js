import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../styles/colors';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem;
  background: ${props => props.scrolled ? colors.background.dark : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  background: ${colors.primary.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${colors.text.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary.gradient};
  }

  &.active {
    background: ${colors.primary.gradient};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.background.dark};
  padding: 2rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding: 1rem;
`;

const LanguageToggle = styled(motion.button)`
  background: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  color: ${colors.text.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary.gradient};
    border-color: transparent;
  }
`;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', text: 'Ana Sayfa' },
    { id: 'about', text: 'Ben Kimim' },
    { id: 'skills', text: 'Neler Yapabilirim' },
    { id: 'projects', text: 'Neler Yaptım' },
    { id: 'contact', text: 'İletişim' }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <NavContainer>
          <Logo
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            KK
          </Logo>

          <NavLinks>
            {navItems.map(item => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.text}
              </NavLink>
            ))}
            <LanguageToggle
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EN
            </LanguageToggle>
          </NavLinks>

          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map(item => (
          <MobileNavLink
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.text}
          </MobileNavLink>
        ))}
        <LanguageToggle
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </LanguageToggle>
      </MobileMenu>
    </>
  );
};

export default Navigation; 