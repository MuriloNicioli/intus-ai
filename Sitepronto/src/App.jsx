import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Agents from './components/Agents';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Agents />
          <HowItWorks />
          <About />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;