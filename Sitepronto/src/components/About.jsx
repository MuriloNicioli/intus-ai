import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import cuboLogo from '../assets/cubo.png';
import FloatingLogos from './FloatingLogos';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="quem-somos" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Coluna de Texto */}
          <div>
            <h2 style={{ 
              marginBottom: '20px' 
            }}>
              {t('aboutTitle')}
            </h2>
            <p style={{
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              {t('aboutText1')}
            </p>
            <p style={{
              lineHeight: '1.6',
              marginBottom: '20px' // Adicionado espaçamento
            }}>
              {t('aboutText2')}
            </p>
            
            {/* Nova frase adicionada aqui */}
            <p style={{
              lineHeight: '1.6',
              fontWeight: '600', // Dando um leve destaque
              color: 'var(--fg-100)'
            }}>
              {t('aboutText3')}
            </p>

            {/* Logos posicionados após a nova frase */}
            <FloatingLogos />
          </div>

          {/* Coluna da Imagem */}
          <div style={{
            textAlign: 'center'
          }}>
            <img 
              src={cuboLogo} 
              alt="Intus AI Logo" 
              style={{
                width: '250px',
                height: '250px',
                margin: '0 auto'
              }}
            />
             <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--fg-100)',
                marginTop: '16px',
                textAlign: 'center'
              }}>
                INTUS AI
              </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;