import React from 'react';

const CustomChatButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button} aria-label="Open chat">
      <svg style={styles.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
      </svg>
    </button>
  );
};

// Estilos para imitar o widget do N8N
const styles = {
  button: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: 'var(--chat--toggle--size, 64px)',
    height: 'var(--chat--toggle--size, 64px)',
    borderRadius: '50%',
    background: 'var(--chat--toggle--background, #22D3EE)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease',
    zIndex: 1000,
  },
  svg: {
    width: '50%',
    height: '50%',
    color: 'var(--chat--toggle--color, #001018)',
  }
};

export default CustomChatButton;