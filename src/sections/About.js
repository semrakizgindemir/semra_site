import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles/animations';
import { FiDownload } from 'react-icons/fi';
import { FaUsers, FaCode, FaPuzzlePiece } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  background: #000000;
  position: relative;
  padding: 2rem 1.5rem 3rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 5rem;
  align-items: center;
  padding: 0 2rem;
  margin-top: 0rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 1rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  max-width: 400px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #FF0000 0%, #FF6B00 100%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Content = styled(motion.div)`
  h2 {
    font-size: clamp(1.9rem, 5.5vw, 2.8rem);
    font-weight: 900;
    color: rgb(254, 242, 154);
    margin-bottom: 1.4rem;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: -1px;
    
    .highlight {
      display: block;
      color: rgb(254, 242, 154);
      font-size: 0.9em;
    }
  }

  p {
    font-size: 1.15rem;
    color: rgba(254, 242, 154, 0.8);
    line-height: 1.55;
    margin-bottom: 1.2rem;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: none;
    -webkit-hyphens: none;
    -ms-hyphens: none;

    @media (max-width: 768px) {
      font-size: 1.05rem;
    }
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin: 1.8rem 0;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.6rem 0.9rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(254, 242, 154, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 45, 0, 0.1);
    border-color: rgba(255, 45, 0, 0.3);
  }
  
  .label {
    font-size: 0.9rem;
    color: rgb(254, 242, 154);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 1.2;
  }
`;

const StatIcon = styled.div`
  font-size: 2.6rem;
  color: rgb(254, 242, 154);
  margin-bottom: 0.8rem;
  opacity: 0.8;
  transition: all 0.3s ease;

  ${StatItem}:hover & {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: transparent;
  border: 2px solid rgb(254, 242, 154);
  color: rgb(254, 242, 154);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-transform: uppercase;
  transform: skew(-5deg);
  text-decoration: none;
  margin-top: 1.2rem;

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
`;

const AnimatedBackgroundText = styled.div`
  position: absolute;
  font-size: clamp(9rem, 22vw, 18rem);
  font-weight: 900;
  color: transparent;
  white-space: nowrap;
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  opacity: 0.3;
  letter-spacing: 2px;
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${props => props.direction === 'left' ? 'slideLeft' : 'slideRight'} 180s linear infinite;
  background: #FF0000;
  -webkit-background-clip: text;
  background-clip: text;

  &.top {
    top: -5%;
  }

  &.bottom {
    bottom: -5%;
  }

  @media (max-width: 1200px) {
    font-size: clamp(7rem, 20vw, 15rem);
    letter-spacing: 1px;

    &.top {
      top: -3%;
    }

    &.bottom {
      bottom: -3%;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(4rem, 16vw, 10rem);
    letter-spacing: 0px;
    opacity: 0.2;
    animation: ${props => props.direction === 'left' ? 'slideLeft' : 'slideRight'} 120s linear infinite;

    &.top {
      top: 0;
    }

    &.bottom {
      bottom: 0;
    }
  }

  @media (max-width: 480px) {
    font-size: clamp(2.5rem, 12vw, 8rem);
    opacity: 0.15;
    animation: ${props => props.direction === 'left' ? 'slideLeft' : 'slideRight'} 100s linear infinite;

    &.top {
      top: 1%;
    }

    &.bottom {
      bottom: 1%;
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
  white-space: pre-wrap;
  margin-right: ${props => props.letter === ' ' ? '0.25em' : '0'};
`;

const WordSpan = styled.span`
  display: inline-block;
  white-space: normal;
  margin-right: 0.25em;
`;

const About = () => {
  const wrapLetters = (text) => {
    return text.split(' ').map((word, index) => (
      <WordSpan key={index}>
        {word.split('').map((letter, letterIndex) => (
          <LetterSpan key={`${index}-${letterIndex}`} letter={letter}>
            {letter}
          </LetterSpan>
        ))}
      </WordSpan>
    ));
  };

  return (
    <AboutSection id="about">
      <AnimatedBackgroundText 
        className="top"
        direction="left"
      >
        ABOUT • STORY •
      </AnimatedBackgroundText>

      <Container>
        <ImageContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img src="/images/profil.jpg" alt="Profile" />
        </ImageContainer>

        <Content
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2>
            {wrapLetters("BEN KİMİM &")}
            <span className="highlight">
              {wrapLetters("NELER YAPIYORUM")}
            </span>
          </h2>
          
          <p>
            {wrapLetters("Her zaman ve her alanda yeni bilgiler öğrenmeye hevesli, araştırma yapmayı seven " +
                "Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Şu an üniversitemde Teknofest yarışması için çalışan " +
                "bir takımda Görüntü İşleme alanında görev alıyorum. Özellikle yapay zeka, görüntü işleme, makine öğrenmesi, " +
                "veri bilimi konularına ilgi duyuyorum ve kendimi geliştirmeye çalışıyorum. OpenCV ve YOLOv8 kullanarak nesne tanıma algoritmaları yapıyorum. " +
                "Python ve PyQt5 ile çeşitli " +
                "çalışmalar yaptım. Bunun yanı sıra C#, Java, HTML, CSS ve React gibi teknolojiler hakkında bilgi sahibiyim.")}
          </p>
          
          <p>
            {wrapLetters("")}
          </p>

          <Stats>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <StatIcon>
                <FaUsers />
              </StatIcon>
              <div className="label">{wrapLetters("EKİP ÇALIŞMASI")}</div>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <StatIcon>
                <FaCode />
              </StatIcon>
              <div className="label">{wrapLetters("KODLAMA")}</div>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <StatIcon>
                <FaPuzzlePiece />
              </StatIcon>
              <div className="label">{wrapLetters("PROBLEM ÇÖZME")}</div>
            </StatItem>
          </Stats>

          <DownloadButton 
            href="/images/semra_kizgindemir_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {wrapLetters("CV'Mİ İNDİR")} <FiDownload />
          </DownloadButton>
        </Content>
      </Container>

      <AnimatedBackgroundText 
        className="bottom"
        direction="right"
      >
        CREATE • CODE •
      </AnimatedBackgroundText>
    </AboutSection>
  );
};

export default About; 