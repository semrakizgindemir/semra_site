import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 3rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.textSecondary}20;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.secondary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.secondary};
    
    &::after {
      width: 100%;
    }
  }
`;

const Copyright = styled(motion.p)`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  text-align: center;
`;

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SocialLink
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            custom={0}
            variants={socialVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            custom={1}
            variants={socialVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://facebook.com/username"
            target="_blank"
            rel="noopener noreferrer"
            custom={2}
            variants={socialVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebook />
          </SocialLink>
        </SocialLinks>
        <Copyright
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          © {currentYear} Portfolio. Tüm hakları saklıdır.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 