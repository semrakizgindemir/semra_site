import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles/animations';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = styled.section`
  min-height: 100vh;
  background: #000000;
  position: relative;
  display: flex;
  flex-direction: column;
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
  font-size: clamp(2.5rem, 8vw, 4.5rem);
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
    -webkit-text-fill-color: rgb(254, 242, 154);
    font-size: 0.9em;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(40, 40, 40, 0.2) 100%);
  border: 1px solid rgba(50, 50, 50, 0.3);
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
    background: linear-gradient(135deg, #FF0000 0%, #FF6B00 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(255, 107, 0, 0.15) 100%);
    
    &:before {
      transform: scaleX(1);
    }
    
    .project-image img {
      transform: scale(1.05);
    }
  }

  .project-image {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    margin-bottom: 1.5rem;
    border-radius: 10px;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
`;

const ProjectContent = styled.div`
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(254, 242, 154);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: rgba(254, 242, 154, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid rgb(254, 242, 154);
  border-radius: 20px;
  color: rgb(254, 242, 154);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
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
    transform: translateY(-2px);
    border-color: rgb(255, 45, 0);

    &:before {
      width: 100%;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid rgb(254, 242, 154);
  border-radius: 10px;
  color: rgb(254, 242, 154);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
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
    transform: translateY(-2px);
    border-color: rgb(255, 45, 0);

    &:before {
      width: 100%;
    }
  }
  
  svg {
    font-size: 1.2rem;
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

const projectsData = [
  {
    title: 'KÜTÜPHANE YÖNETİM SİSTEMİ',
    description: 'Modern ve kullanıcı dostu bir kütüphane yönetim sitemi. Pyhton , PyQt5 ve SQLite kullanılarak geliştirildi.',
    image: '/images/kutup_yonetim.jpg',
    tags: ['Python', 'PyQt5', 'SQLite'],
    githubUrl: 'https://github.com/semrakizgindemir/kutuphaneYonetimSistemi'
  },
  {
    title: 'SORU BANKASI UYGULAMASI',
    description: 'Basit düzey bir soru bankası uygulaması. Pyhton , PyQt5 ve Pandas kullanılarak geliştirildi.',
    image: '/images/soru_bankasi.png',
    tags: ['Python', 'PyQt5', 'Pandas'],
    githubUrl: 'https://github.com/semrakizgindemir/soruBankasiUyg'
  },
  {
    title: 'KELİME İŞLEMCİ',
    description: 'Word benzeri ancak o kadar da kapsamlı olmayan bir kelime işlemcisi. Pyhton , PyQt5 ve Pandas kullanılarak geliştirildi.              ',
    image: '/images/kelime_islemci.png',
    tags: ['Python', 'PyQt5', 'Pandas'],
    githubUrl: 'https://github.com/semrakizgindemir/kelime-slemcisi'
  },
  {
    title: 'GÖRÜNTÜ İŞLEME ÇALIŞMALARIM',
    description: 'Görüntü işleme alanında kendimi geliştirirken ve öğrenirken yaptıklarımı buradan inceleyebilirisiniz.',
    image: '/images/goruntu_isleme.jpeg',
    tags: ['OpenCV', 'YOLOv8', 'Numpy', 'Matplotlib'],
    githubUrl: 'https://github.com/semrakizgindemir/goruntuIslemeCalisma'
  },
  {
    title: 'VERİ YAPILARI VE ALGORİTMALAR ÇALIŞMALARIM',
    description: 'Veri yapıları ve algoritmalar alanında kendimi geliştirirken ve öğrenirken yaptıklarımı buradan inceleyebilirisiniz.',
    image: '/images/veri_yapilari.png',
    tags: ['Java', 'LinkedList', 'BST', 'Queue', 'Stack'],
    githubUrl: 'https://github.com/semrakizgindemir/java_veriYapilari'
  },
  {
    title: 'PORTFOLIO WEBSİTESİ',
    description: 'Kişisel portfolio websitesi. React ve styled-components kullanılarak geliştirildi.',
    image: '/images/portfolio.png',
    tags: ['React', 'Styled Components', 'Framer Motion'],
    githubUrl: 'https://github.com/semrakizgindemir/semraportfolyo' ,
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <AnimatedBackgroundText 
        className="top"
        direction="left"
      >
        PROJECTS • PORTFOLIO • SHOWCASE • WORK •
      </AnimatedBackgroundText>

      <Container>
        <Title
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          PROJELERİM
          <span className="highlight">& ÇALIŞMALARIM</span>
        </Title>

        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.tags.map((tag, tagIndex) => (
                    <TechTag key={tagIndex}>{tag}</TechTag>
                  ))}
                </TechStack>
                
                <Links>
                  <LinkButton 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ width: '100%' }}
                  >
                    <FiGithub /> GitHub
                  </LinkButton>
                </Links>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>

      <AnimatedBackgroundText 
        className="bottom"
        direction="right"
      >
        CREATIVE • INNOVATIVE • MODERN • RESPONSIVE •
      </AnimatedBackgroundText>
    </ProjectsSection>
  );
};

export default Projects; 