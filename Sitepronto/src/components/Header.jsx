import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import cuboLogo from '../assets/cubo.png';

const Header = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['agentes', 'como-funciona', 'quem-somos', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'agentes', label: t('agents') },
    { id: 'como-funciona', label: t('howItWorks') },
    { id: 'quem-somos', label: t('aboutUs') },
    { id: 'faq', label: t('faq') }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      height: '66px',
      background: 'linear-gradient(180deg, rgba(34,211,238,.18), rgba(8,20,37,.92))',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
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
              width: '40px',
              height: '40px'
            }}
          />
          <span style={{
            fontSize: '20px',
            fontWeight: '700',
            color: 'var(--fg-100)',
            letterSpacing: '0.5px'
          }}>
            INTUS AI
          </span>
        </div>

        {/* Navigation and Language Switcher */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Navigation */}
          <nav>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '8px',
              margin: 0,
              padding: 0
            }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: activeSection === item.id 
                        ? 'rgba(34,211,238,.12)' 
                        : 'transparent',
                      border: '1px solid var(--border)',
                      borderRadius: '20px',
                      padding: '8px 16px',
                      color: 'var(--fg-100)',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.background = 'rgba(34,211,238,.12)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.background = 'transparent';
                      }
                    }}
                    aria-label={`Maps to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;