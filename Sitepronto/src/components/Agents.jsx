import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Agents = () => {
  const { t } = useLanguage();

  const agents = [
    {
      title: t('supportAgentTitle'),
      description: t('supportAgentDesc'),
      forText: t('supportAgentFor')
    },
    {
      title: t('sdrAgentTitle'),
      description: t('sdrAgentDesc'),
      forText: t('sdrAgentFor')
    },
    {
      title: t('receptionAgentTitle'),
      description: t('receptionAgentDesc'),
      forText: t('receptionAgentFor')
    }
  ];

  return (
    <section id="agentes" className="section">
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          {t('agentsTitle')}
        </h2>
        
        <div className="grid">
          {agents.map((agent, index) => (
            <div 
              key={agent.title}
              className={`card fade-in stagger-${index + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'var(--fg-100)',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  {agent.title}
                </h3>
                
                <p style={{
                  textAlign: 'center',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {agent.description}
                </p>
              </div>
              
              <div>
                <p style={{
                  textAlign: 'center',
                  lineHeight: '1.5',
                  color: 'var(--brand-300)',
                  fontWeight: '500',
                  fontSize: '15px'
                }}>
                  {agent.forText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;