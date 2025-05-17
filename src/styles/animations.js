export const fadeIn = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.98,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration || 1.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const scaleIn = (delay) => {
  return {
    hidden: {
      scale: 0.98,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const letterAnimation = {
  hidden: { y: 400 },
  show: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
    },
  },
};

export const wordAnimation = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
};

export const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
}; 