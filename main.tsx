import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add scroll reveal functionality
function RevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const checkReveal = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkReveal);
    
    // Initial check
    checkReveal();

    return () => window.removeEventListener('scroll', checkReveal);
  }, []);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RevealOnScroll />
  </StrictMode>
);