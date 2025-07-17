
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Expertise from './components/Expertise';
import Strategy from './components/Strategy';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Values />
        <Expertise />
        <Strategy />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
