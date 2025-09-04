import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t('faq1Q'),
      answer: t('faq1A')
    },
    {
      question: t('faq2Q'),
      answer: t('faq2A')
    },
    {
      question: t('faq3Q'),
      answer: t('faq3A')
    },
    {
      question: t('faq4Q'),
      answer: t('faq4A')
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          {t('faqTitle')}
        </h2>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`fade-in stagger-${index + 1}`}
              style={{
                marginBottom: '16px'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(34,211,238,.08)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--card)';
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--fg-100)'
                }}>
                  {faq.question}
                </span>
                
                <span style={{
                  fontSize: '24px',
                  color: 'var(--brand-500)',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  +
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                  background: openIndex === index ? 'rgba(34,211,238,.04)' : 'transparent',
                  borderRadius: openIndex === index ? '0 0 12px 12px' : '0',
                  marginTop: openIndex === index ? '-1px' : '0'
                }}
              >
                <div style={{
                  padding: openIndex === index ? '20px' : '0 20px',
                  borderLeft: '1px solid var(--border)',
                  borderRight: '1px solid var(--border)',
                  borderBottom: openIndex === index ? '1px solid var(--border)' : 'none',
                  borderRadius: '0 0 12px 12px'
                }}>
                  <p style={{
                    color: 'var(--fg-300)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

