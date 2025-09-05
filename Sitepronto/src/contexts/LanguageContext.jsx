/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    agents: 'Agents',
    howItWorks: 'How It Works',
    faq: 'FAQ',
    aboutUs: 'About Us',
    
    // Hero
    heroTitle: 'Have an AI that understands your business and responds to your customers every day, every time',
    heroSubtitle: 'We develop AI sales agents to increase your results',
    heroCTA: 'Talk to our AI',

    // About Us section
    aboutTitle: 'About Us',
    aboutText1: 'We are an artificial intelligence automation agency, specializing in conversational sales agents. As sales are the engine of any company, we focus on where we generate the most impact.',
    aboutText2: 'We understand our clients\' needs and design/implement custom sales agents, trained on your knowledge, to generate more opportunities, more interactions, and more revenue.',
    aboutText3: 'Your AI will be able to answer your clients on your website or on any of the social media below.',
    
    // Agents section
    agentsTitle: 'Agents',
    supportAgentTitle: 'Support Agent',
    supportAgentDesc: 'Agent specialized in customer service, capable of resolving technical questions, processing support requests and escalating complex problems to human specialists when necessary.',
    supportAgentFor: 'E-commerce, IT, wines & gourmet, industry and supplies, auctions, education, and SaaS.',
    sdrAgentTitle: 'SDR Agent',
    sdrAgentDesc: 'Sales development agent that qualifies leads, schedules meetings, sends personalized follow-ups and keeps the sales pipeline always updated with relevant information.',
    sdrAgentFor: 'B2B, schools/courses, machinery and equipment, etc.',
    receptionAgentTitle: 'Reception Agent',
    receptionAgentDesc: 'Virtual reception agent that manages appointments, directs visitors, provides basic company information and ensures that all initial interactions are professional and efficient.',
    receptionAgentFor: 'Aesthetic clinics, massage, physiotherapy, psychology, salons/barbershops, gyms/studios, etc.',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    step1Title: 'Getting Started',
    step1Desc: 'Chat with our AI to clear up any initial questions and complete the first step. You\'ll then be able to schedule a meeting with an expert. Just click the chat icon in the corner of your screen.',
    step2Title: 'Meeting',
    step2Desc: 'A meeting to understand and align on the exact scope of the project.',
    step3Title: 'Development Moment',
    step3Desc: 'The moment our team will begin developing your AI.',
    step4Title: 'Deploy',
    step4Desc: 'The moment your company will have a 24/7 AI to serve your team and your clients.',
    
    // FAQ
    faqTitle: 'FAQ',
    faq1Q: 'How long does it take to create my project?',
    faq1A: 'Around 1 week, but it will be defined in the meeting',
    faq2Q: 'How do you create the agents?',
    faq2A: 'We use automations integrated with Artificial Intelligence',
    faq3Q: 'Do I need technical knowledge to use it?',
    faq3A: 'No, the technical part is with us',
    faq4Q: 'If I want to cancel, am I stuck in a contract?',
    faq4A: 'No, you can cancel just by sending us a message',
    
    // Footer
    copyright: '© 2025 Intus AI. All rights reserved.',
    
    // Language switcher
    language: 'Language',
    
    // Chat
    chatTitle: 'Chat with our AI',
    chatSubtitle: 'Start a conversation with our AI assistant',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    startChat: 'Start Chat',
    cancel: 'Cancel',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    chatError: 'Failed to start chat. Please try again.',
    chatSuccess: 'Chat started successfully!'
  },
  pt: {
    // Header
    agents: 'Agentes',
    howItWorks: 'Como Funciona',
    faq: 'FAQ',
    aboutUs: 'Quem Somos',
    
    // Hero
    heroTitle: 'Tenha uma IA que entende do seu negócio e responde seus clientes todos os dias, toda hora',
    heroSubtitle: 'Nós desenvolvemos agentes de IA de vendas para aumentar seus resultados',
    heroCTA: 'Fale com nossa IA',
    
    // About Us section
    aboutTitle: 'Quem Somos',
    aboutText1: 'Somos uma agência de automação com inteligência artificial, especializada em agentes conversacionais de vendas. Como vendas é o motor de qualquer empresa, focamos onde geramos mais impacto.',
    aboutText2: 'Entendemos a necessidade dos nossos clientes e desenhamos/implantamos agentes de vendas sob medida, treinados no seu conhecimento, para gerar mais oportunidades, mais interações e mais receita.',
    aboutText3: 'Sua IA poderá responder seus clientes em seu site ou em qualquer uma das mídias sociais abaixo.',

    // Agents section
    agentsTitle: 'Agentes',
    supportAgentTitle: 'Agente de Suporte',
    supportAgentDesc: 'Agente especializado em atendimento ao cliente, capaz de resolver dúvidas técnicas, processar solicitações de suporte e escalar problemas complexos para especialistas humanos quando necessário.',
    supportAgentFor: 'E-commerce, informática, vinhos & gourmet, indústria e insumos, leilões, educação e SaaS.',
    sdrAgentTitle: 'Agente SDR',
    sdrAgentDesc: 'Agente de desenvolvimento de vendas que qualifica leads, agenda reuniões, envia follow-ups personalizados e mantém o pipeline de vendas sempre atualizado com informações relevantes.',
    sdrAgentFor: 'B2B, escolas/cursos, máquinas e equipamentos, etc.',
    receptionAgentTitle: 'Agente Recepcionista',
    receptionAgentDesc: 'Agente de recepção virtual que gerencia agendamentos, direciona visitantes, fornece informações básicas da empresa e garante que todas as interações iniciais sejam profissionais e eficientes.',
    receptionAgentFor: 'Clínicas de estética, de massagem, fisioterapia, psicologia, salões/barbearias, academias/estúdios, etc.',
    
    // How It Works
    howItWorksTitle: 'Como Funciona',
    step1Title: 'Primeiros Passos',
    step1Desc: 'Converse com nossa IA para tirar suas dúvidas iniciais e realizar o pré-atendimento. Em seguida, poderá agendar uma reunião com um especialista. Apenas clique no ícone de chat no canto da sua tela.',
    step2Title: 'Reunião',
    step2Desc: 'Uma reunião para entender e alinhar exatamente qual será o escopo do projeto.',
    step3Title: 'Momento do Desenvolvimento',
    step3Desc: 'O momento em que nossa equipe começará a desenvolver sua IA.',
    step4Title: 'Implementação',
    step4Desc: 'O momento em que sua empresa terá uma IA 24/7 para atender sua equipe e seus clientes.',
    
    // FAQ
    faqTitle: 'FAQ',
    faq1Q: 'Quanto tempo leva para criar meu projeto?',
    faq1A: 'Em torno de 1 semana, mas na reunião será definido',
    faq2Q: 'Como vocês criam os agentes?',
    faq2A: 'Utilizamos de automações integrado com Inteligencia Artificial',
    faq3Q: 'Preciso de conhecimentos técnicos para utilizar?',
    faq3A: 'Não, a parte técnica fica conosco',
    faq4Q: 'Caso queira cancelar, estou preso em contrato?',
    faq4A: 'Não, você consegue cancelar apenas enviando uma mensagem para nós',
    
    // Footer
    copyright: '© 2025 Intus AI. Todos os direitos reservados.',
    
    // Language switcher
    language: 'Idioma',
    
    // Chat
    chatTitle: 'Chat com nossa IA',
    chatSubtitle: 'Inicie uma conversa com nosso assistente de IA',
    emailLabel: 'Endereço de Email',
    emailPlaceholder: 'Digite seu endereço de email',
    startChat: 'Iniciar Chat',
    cancel: 'Cancelar',
    emailRequired: 'Email é obrigatório',
    emailInvalid: 'Por favor, digite um email válido',
    chatError: 'Falha ao iniciar o chat. Tente novamente.',
    chatSuccess: 'Chat iniciado com sucesso!'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Alterado de 'pt' para 'en'

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      switchLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};