import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles/animations';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioSection = styled.section`
  min-height: 100vh;
  background: #000000;
  position: relative;
  padding: 3rem 1.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -1px;

  .highlight {
    display: block;
    background: linear-gradient(135deg, #FF0000 0%, #FF6B00 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.9em;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 107, 0, 0.1) 100%);
  border: 1px solid rgba(255, 107, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  
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
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 107, 0, 0.1) 100%);
  border: 1px solid rgba(255, 107, 0, 0.2);
  border-radius: 20px;
  color: #FFFFFF;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #FF0000 0%, #FF6B00 100%);
    transform: translateY(-2px);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 107, 0, 0.1) 100%);
  border: 1px solid rgba(255, 107, 0, 0.2);
  border-radius: 10px;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
  
  &:hover {
    background: linear-gradient(135deg, #FF0000 0%, #FF6B00 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const PageIndicator = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
`;

const PageDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? 
    'linear-gradient(135deg, #FF0000 0%, #FF6B00 100%)' : 
    'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #FF0000 0%, #FF6B00 100%);
    transform: scale(1.2);
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
    title: 'E-Ticaret Platformu',
    description: 'Modern bir e-ticaret platformu. React ve Node.js kullanılarak geliştirildi. Ödeme entegrasyonu ve gerçek zamanlı stok takibi içerir.',
    image: '/images/ecommerce.jpg',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com/username/ecommerce',
    liveLink: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Yönetim Uygulaması',
    description: 'Drag-and-drop özellikli, gerçek zamanlı task yönetim uygulaması. Ekip işbirliği ve proje takibi için ideal.',
    image: '/images/task-manager.jpg',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    githubLink: 'https://github.com/username/task-manager',
    liveLink: 'https://task-manager-demo.com',
  },
  {
    title: 'Blog Platformu',
    description: 'SEO odaklı, performans optimize edilmiş blog platformu. Markdown desteği ve özel admin paneli içerir.',
    image: '/images/blog-platform.jpg',
    techStack: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/username/blog-platform',
    liveLink: 'https://blog-platform-demo.com',
  },
  {
    title: 'AI Asistan',
    description: 'Yapay zeka destekli kişisel asistan uygulaması. Doğal dil işleme ve makine öğrenmesi modelleri kullanır.',
    image: '/images/ai-assistant.jpg',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    githubLink: 'https://github.com/username/ai-assistant',
    liveLink: 'https://ai-assistant-demo.com',
  }
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const pageWidth = containerRef.current.clientWidth;
      const currentPage = Math.round(scrollPosition / pageWidth);
      setCurrentPage(currentPage);
    }
  };

  const scrollToPage = (pageIndex) => {
    if (containerRef.current) {
      const pageWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: pageWidth * pageIndex,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <PortfolioSection id="portfolio">
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
          Projelerim
          <span className="highlight">& Çalışmalarım</span>
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
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x500/2a2a2a/ffffff?text=Project+Image';
                  }}
                />
              </div>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.techStack.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                
                <Links>
                  <LinkButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </LinkButton>
                  <LinkButton href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
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
    </PortfolioSection>
  );
};

export default Portfolio;
