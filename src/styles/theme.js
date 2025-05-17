// Bej renk paleti
const beigeColors = {
  beige100: '#FFF5E9',
  beige200: '#F5E6D3',
  beige300: '#E6D5C3',
  beige400: '#D4C4B4',
  beige500: '#C2B3A3',
  beige600: '#A69787',
  accent: '#8B7355',
  dark: '#2C1810'
};

const theme = {
  colors: {
    primary: 'rgb(254, 242, 154)',
    secondary: 'rgb(255, 45, 0)',
    background: '#000000',
    text: 'rgb(254, 242, 154)',
    textSecondary: 'rgba(254, 242, 154, 0.8)',
    border: 'rgba(254, 242, 154, 0.1)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #FF0000 0%, #FF6B00 100%)',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
  }
};

export default theme;

export const lightTheme = {
  primary: '#0E0E0E',
  secondary: '#4353FF',
  accent: '#FE4A23',
  background: '#FFFFFF',
  backgroundSecondary: '#F8F9FA',
  text: '#0E0E0E',
  textSecondary: '#666666',
  navBackground: 'rgba(255, 255, 255, 0.98)',
  cardBackground: '#FFFFFF',
  cardShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
  gradient: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
  border: '#EEEEEE',
  selection: '#4353FF',
};

export const darkTheme = {
  primary: '#FFFFFF',
  secondary: '#4353FF',
  accent: '#FE4A23',
  background: '#0E0E0E',
  backgroundSecondary: '#161616',
  text: '#FFFFFF',
  textSecondary: '#999999',
  navBackground: 'rgba(14, 14, 14, 0.98)',
  cardBackground: '#161616',
  cardShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  gradient: 'linear-gradient(135deg, #161616 0%, #0E0E0E 100%)',
  border: '#222222',
  selection: '#4353FF',
}; 