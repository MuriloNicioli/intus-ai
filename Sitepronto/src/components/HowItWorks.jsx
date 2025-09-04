import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('step1Title'),
      description: t('step1Desc')
    },
    {
      number: '2', 
      title: t('step2Title'),
      description: t('step2Desc')
    },
    {
      number: '3',
      title: t('step3Title'),
      description: t('step3Desc')
    },
    {
      number: '4',
      title: t('step4Title'),
      description: t('step4Desc')
    }
  ];

  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          {t('howItWorksTitle')}
        </h2>
        
        <div style={{
          display: 'grid',
          // Ajustado para 4 colunas em telas grandes
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          maxWidth: '1200px', // Aumentado para acomodar 4 itens
          margin: '0 auto'
        }}>
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`fade-in stagger-${index + 1}`}
              style={{
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Círculo do número do passo */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--brand-500)',
                color: '#001018',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: '800',
                margin: '0 auto 20px',
                boxShadow: '0 0 20px rgba(34,211,238,0.3)'
              }}>
                {step.number}
              </div>
              
              {/* Linha conectora (exceto para o último item) */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '30px',
                  left: '50%',
                  width: 'calc(100% - 60px)', // Ajusta a largura dinamicamente
                  height: '2px',
                  background: 'var(--border)',
                  transform: 'translateX(30px)',
                  display: window.innerWidth > 992 ? 'block' : 'none' // Mostra apenas em telas maiores
                }} />
              )}
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'var(--fg-100)',
                marginBottom: '12px'
              }}>
                Step {step.number} — {step.title}
              </h3>
              
              <p style={{
                lineHeight: '1.6',
                maxWidth: '280px',
                margin: '0 auto'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
