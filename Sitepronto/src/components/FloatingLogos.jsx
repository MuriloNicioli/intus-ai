import React from 'react';
import whatsappLogo from '../assets/whatsapp.png';
import instagramLogo from '../assets/instagram.png';
import messengerLogo from '../assets/messenger.png'; // Revertido para messenger.png
import telegramLogo from '../assets/telegram.png';

const logos = [
  { src: whatsappLogo, alt: 'WhatsApp' },
  { src: instagramLogo, alt: 'Instagram' },
  { src: messengerLogo, alt: 'Messenger' }, // Revertido para Messenger
  { src: telegramLogo, alt: 'Telegram' },
];

const FloatingLogos = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between', // Alinha o primeiro e o último item às bordas
      alignItems: 'center',
      marginTop: '60px',
      width: '100%', // Ocupa a largura total do bloco de texto pai
    }}>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
      {logos.map((logo, index) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className="fade-in"
          style={{
            width: '45px',
            height: '45px',
            objectFit: 'contain',
            opacity: 0.9,
            animation: `float 4s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;