import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles/animations';
import { FaReact, FaEye, FaLaptopCode, FaJava, FaPython, FaDatabase } from 'react-icons/fa';

const SkillsSection = styled.section`
  min-height: 100vh;
  background: #000000;
  position: relative;
  padding: 3rem 1.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  color: rgb(254, 242, 154);
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -1px;
  
  .highlight {
    display: block;
    color: rgb(254, 242, 154);
    font-size: 0.9em;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(40, 40, 40, 0.2) 100%);
  border: 1px solid rgba(254, 242, 154, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, rgb(255, 45, 0) 0%, rgb(255, 45, 0) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(255, 45, 0, 0.1) 0%, rgba(255, 45, 0, 0.1) 100%);
    border-color: rgba(255, 45, 0, 0.3);
    
    &:before {
      transform: scaleX(1);
    }
    
    svg {
      color: rgb(255, 45, 0);
      transform: scale(1.1);
    }
  }
  
  svg {
    font-size: 3rem;
    color: rgb(254, 242, 154);
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(254, 242, 154);
    margin: 1rem 0;
  }
  
  p {
    font-size: 1rem;
    color: rgba(254, 242, 154, 0.8);
    line-height: 1.6;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(254, 242, 154);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  color: rgba(254, 242, 154, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(254, 242, 154, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
  .progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(135deg, rgb(255, 45, 0) 0%, rgb(255, 45, 0) 100%);
    border-radius: 10px;
    transition: width 1s ease;
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
  letter-spacing: -5px;
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${props => props.direction === 'left' ? 'slideLeft' : 'slideRight'} 180s linear infinite;
  background: #FF0000;
  -webkit-background-clip: text;
  background-clip: text;

  &.top {
    top: 5%;
  }

  &.bottom {
    bottom: 5%;
  }

  @media (max-width: 768px) {
    font-size: clamp(5.5rem, 18vw, 13rem);
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

const skillsData = [
  {
    title: 'Frontend Development',
    description: 'Modern JavaScript , React ve diğer frontend teknolojileri ile web uygulamaları geliştirme',
    icon: <FaReact />,
    progress: 55
  },
  {
    title: 'OPENCV & YOLOV8',
    description: 'OpenCV kullanarak görüntü işleme, YoloV8 ile veri seti eğitimi ',
    icon: <FaEye />,
    progress: 60
  },
  {
    title: 'C#',
    description: 'Algoritma kurma ve Masaüstü uygulamalar geliştirme',
    icon: <FaLaptopCode />,
    progress: 65
  },
  {
    title: 'JAVA',
    description: 'Nesne tabanlı programlama, kullanışlı arayüzler tasarlama',
    icon: <FaJava />,
    progress: 65
  },
  {
    title: 'PYQT5',
    description: 'Masaüstü uygulamaları ve projeler',
    icon: <FaLaptopCode />,
    progress: 60
  },
  {
    title: 'PYTHON',
    description: 'Numpy, matplotlib, pandas kütüphaneleri bilgisi',
    icon: <FaPython />,
    progress: 70
  }
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <AnimatedBackgroundText 
        className="top"
        direction="left"
      >
        SKILLS • PROJECTS • DEVELOPMENT • DESIGN • CODE •
      </AnimatedBackgroundText>

      <Container>
        <Title
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          YETENEKLERİM &
          <span className="highlight">UZMANLIK ALANLARIM</span>
        </Title>
        
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {skill.icon}
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
              <ProgressBar progress={skill.progress}>
                <div className="progress" />
              </ProgressBar>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>

      <AnimatedBackgroundText 
        className="bottom"
        direction="right"
      >
        OPENCV • YOLOV8 • DESIGN • CODİNG • WEB •
      </AnimatedBackgroundText>
    </SkillsSection>
  );
};

export default Skills; 