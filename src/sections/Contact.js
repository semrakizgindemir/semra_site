import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles/animations';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiCheck } from 'react-icons/fi';

const ContactSection = styled.section`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  h2 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 900;
    color: rgb(254, 242, 154);
    text-transform: uppercase;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 2rem;
    
    span {
      display: block;
      color: rgb(254, 242, 154);
      font-size: 0.9em;
    }
  }

  p {
    font-size: 1.1rem;
    color: rgb(254, 242, 154);
    line-height: 1.6;
    margin-bottom: 3rem;
  }
`;

const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  
  &:hover {
    transform: translateX(10px);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
      font-size: 1.4rem;
      color: rgb(254, 242, 154);
    }
  }

  .content {
    h3 {
      color: rgb(254, 242, 154);
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    p {
      color: rgb(254, 242, 154);
      font-size: 1.1rem;
      margin: 0;
      font-weight: 400;
      letter-spacing: 0.2px;
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(40, 40, 40, 0.2) 100%);
  border: 1px solid rgba(50, 50, 50, 0.3);
  border-radius: 20px;
  padding: 2.5rem;
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
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: rgb(254, 242, 154);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: left;
  }

  input, textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(254, 242, 154, 0.3);
    border-radius: 10px;
    color: rgb(254, 242, 154);
    font-size: 0.9rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: rgba(254, 242, 154, 0.5);
      background: rgba(40, 40, 40, 0.3);
    }

    &::placeholder {
      color: rgba(254, 242, 154, 0.5);
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgb(254, 242, 154);
  background: transparent;
  border: 2px solid rgb(254, 242, 154);
  border-radius: 10px;
  cursor: pointer;
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

const SocialMediaContainer = styled(motion.div)`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: center;
`;

const SocialMediaLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: transparent;
  border: 2px solid rgb(254, 242, 154);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(254, 242, 154);
  font-size: 1.4rem;
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
    transform: translateY(-3px);
    color: #000000;
    border-color: rgb(255, 45, 0);

    &:before {
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

const SuccessMessage = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgb(254, 242, 154);
  padding: 1rem 2rem;
  border-radius: 10px;
  color: rgb(254, 242, 154);
  font-size: 1rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.2rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
    
    // Formu sıfırla
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Başarı mesajını göster
    setShowSuccess(true);
    
    // 3 saniye sonra mesajı kaldır
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <ContactSection id="contact">
      {showSuccess && (
        <SuccessMessage
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <FiCheck /> Mesajınız başarıyla iletildi!
        </SuccessMessage>
      )}

      <AnimatedBackgroundText 
        className="top"
        direction="left"
      >
        CONTACT • MESSAGE • CONNECT •
      </AnimatedBackgroundText>

      <Container>
        <ContactInfo
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2>
            HADİ İLETİŞİME 
            <span>GEÇELİM</span>
          </h2>
          <p>
            Projeleriniz veya işbirliği fırsatları hakkında konuşmak isterseniz, 
            aşağıdaki iletişim bilgilerinden bana ulaşabilir veya formu doldurabilirsiniz.
          </p>

          <InfoItems>
            <InfoItem variants={fadeIn}>
              <div className="icon">
                <FiMail />
              </div>
              <div className="content">
                <h3>Email</h3>
                <p>kizgindemirsemra@gmail.com</p>
              </div>
            </InfoItem>

            <InfoItem variants={fadeIn}>
              <div className="icon">
                <FiPhone />
              </div>
              <div className="content">
                <h3>Telefon</h3>
                <p>+90 539 XXX XX XX</p>
              </div>
            </InfoItem>

            <InfoItem variants={fadeIn}>
              <div className="icon">
                <FiMapPin />
              </div>
              <div className="content">
                <h3>Konum</h3>
                <p>Balıkesir, Türkiye</p>
              </div>
            </InfoItem>
          </InfoItems>

          <SocialMediaContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SocialMediaLink 
              href="https://github.com/semrakizgindemir" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
            </SocialMediaLink>
            <SocialMediaLink 
              href="https://www.linkedin.com/in/semra-k%C4%B1zg%C4%B1ndemir-/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin />
            </SocialMediaLink>
            <SocialMediaLink 
              href="https://www.instagram.com/semrakizgindemir/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiInstagram />
            </SocialMediaLink>
          </SocialMediaContainer>
        </ContactInfo>

        <ContactForm
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <label>İsim</label>
            <input
              type="text"
              name="name"
              placeholder="İsminizi giriniz"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email adresinizi giriniz"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Konu</label>
            <input
              type="text"
              name="subject"
              placeholder="Mesajınızın konusu"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Mesaj</label>
            <textarea
              name="message"
              placeholder="Mesajınızı yazın..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Mesaj Gönder <FiSend />
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact; 