import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { handleAnchorClick } from '@/utils/scrollUtils';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="section" style={{
      minHeight: 'calc(100vh - 66px)',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container">
        <div className="fade-in">
          <h1 style={{ 
            marginBottom: '32px', 
            fontSize: 'clamp(30px, 4.5vw, 48px)', // Fonte ainda menor
            fontWeight: '700',
            lineHeight: '1.3', // Ajustado para duas linhas
            color: 'white' // Tudo branco
          }}>
            {t('heroTitle')}
          </h1>
          
          <p style={{
            fontSize: '17px',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            {t('heroSubtitle')}
          </p>
          
          <a 
            href="#como-funciona"
            className="btn btn-primary fade-in stagger-1"
            onClick={handleAnchorClick}
            style={{
              fontSize: '18px',
              padding: '16px 32px'
            }}
          >
            {t('howItWorks')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

