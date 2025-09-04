import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import cuboLogo from '../assets/cubo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
      background: 'transparent' // Transparent to show global background
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <img 
              src={cuboLogo} 
              alt="Intus AI Logo" 
              style={{
                width: '32px',
                height: '32px'
              }}
            />
            <span style={{
              fontSize: '18px',
              fontWeight: '700',
              color: 'var(--fg-100)',
              letterSpacing: '0.5px'
            }}>
              INTUS AI
            </span>
          </div>
          
          {/* Copyright */}
          <p style={{
            fontSize: '14px',
            color: 'var(--fg-300)',
            textAlign: 'center',
            margin: 0
          }}>
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

