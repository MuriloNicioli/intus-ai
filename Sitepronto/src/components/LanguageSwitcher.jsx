import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    switchLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(34,211,238,.12)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '8px 12px',
          color: 'var(--fg-100)',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(34,211,238,.18)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(34,211,238,.12)';
        }}
        aria-label="Language selector"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.code.toUpperCase()}</span>
        <span style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          fontSize: '12px'
        }}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '4px',
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,.35)',
          zIndex: 1000,
          minWidth: '140px'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                width: '100%',
                padding: '10px 16px',
                background: 'transparent',
                border: 'none',
                color: currentLanguage === lang.code ? 'var(--brand-500)' : 'var(--fg-100)',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: currentLanguage === lang.code ? '12px' : '0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (currentLanguage !== lang.code) {
                  e.target.style.background = 'rgba(34,211,238,.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentLanguage !== lang.code) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

