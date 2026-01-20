import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import LanguageToggle from './components/LanguageToggle';
import Services from './components/Services';
import Subsidiaries from './components/Subsidiaries';
import CEOProfile from './components/CEOProfile';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen ${lang === 'bn' ? 'font-bengali' : 'font-sans'} bg-ramillan-light text-ramillan-dark selection:bg-ramillan-gold selection:text-ramillan-dark`}>
      
      {/* Navigation */}
      <nav 
        className={`fixed py-4 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={isScrolled ? '/logo.svg' : '/logo2.svg'} alt="ramillan" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className={`${isScrolled ? 'text-ramillan-dark' : 'text-white'} hover:text-ramillan-gold transition-colors font-medium`}>{t.nav.home}</button>
            <button onClick={() => scrollToSection('services')} className={`${isScrolled ? 'text-ramillan-dark' : 'text-white'} hover:text-ramillan-gold transition-colors font-medium`}>{t.nav.services}</button>
            <button onClick={() => scrollToSection('subsidiaries')} className={`${isScrolled ? 'text-ramillan-dark' : 'text-white'} hover:text-ramillan-gold transition-colors font-medium`}>{t.nav.subsidiaries}</button>
            <button onClick={() => scrollToSection('ceo')} className={`${isScrolled ? 'text-ramillan-dark' : 'text-white'} hover:text-ramillan-gold transition-colors font-medium`}>{t.nav.ceo}</button>
            <button onClick={() => scrollToSection('contact')} className={`${isScrolled ? 'text-ramillan-dark' : 'text-white'} hover:text-ramillan-gold transition-colors font-medium`}>{t.nav.contact}</button>
            
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            
            <LanguageToggle currentLang={lang} onToggle={setLang} isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-ramillan-dark' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
           <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-gray-100 md:hidden">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-ramillan-gold font-medium">{t.nav.home}</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-ramillan-gold font-medium">{t.nav.services}</button>
              <button onClick={() => scrollToSection('subsidiaries')} className="text-left py-2 hover:text-ramillan-gold font-medium">{t.nav.subsidiaries}</button>
              <button onClick={() => scrollToSection('ceo')} className="text-left py-2 hover:text-ramillan-gold font-medium">{t.nav.ceo}</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-ramillan-gold font-medium">{t.nav.contact}</button>
              <div className="pt-4 border-t border-gray-100">
                 <LanguageToggle currentLang={lang} onToggle={setLang} isScrolled={true} />
              </div>
           </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-ramillan-dark text-ramillan-light">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-ramillan-light opacity-[0.03] transform skew-x-12 translate-x-1/4"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-ramillan-gold rounded-full blur-[120px] opacity-20"></div>

         <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <span className="inline-block px-3 py-1 mb-6 border border-ramillan-gold/30 text-ramillan-gold rounded-full text-xs tracking-widest uppercase">
               Est. 2024
            </span>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 max-w-6xl ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
              {t.hero.headline}
            </h1>
            <p className={`text-lg md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
              {t.hero.subheadline}
            </p>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-ramillan-gold text-ramillan-dark px-10 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-ramillan-gold/20"
            >
              {t.hero.cta}
            </button>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-ramillan-gold/50">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-ramillan-gold"></div>
         </div>
      </section>

      {/* Components */}
      <Services title={t.services.sectionTitle} items={t.services.items} lang={lang} />
      <Subsidiaries title={t.subsidiaries.sectionTitle} items={t.subsidiaries.items} lang={lang} />
      <CEOProfile data={t.ceo} lang={lang} />
      <Contact title={t.contact.sectionTitle} data={t.contact.info} lang={lang} />

      {/* Footer */}
      <footer className="bg-ramillan-dark text-white py-4 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-2">
            {/* Logo (left) */}
            <div className="w-full md:w-auto flex justify-center md:justify-start mb-1 md:mb-0">
              <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
                <img src="/logo2.svg" alt="ramillan" className="h-8" />
              </div>
            </div>

            {/* Copyright (center) */}
            <div className="w-full text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Ramillan Corporation. {t.footer.rights}
            </div>

            {/* Developer (right) - whole block clickable */}
            <div className="w-full md:w-auto flex justify-center md:justify-end mt-1 md:mt-0">
              <a href="https://kallol.me" target="_blank" rel="noopener noreferrer" title="Kallol.me" className="flex items-center gap-3 group">
                <img
                  src="/developer.avif"
                  alt="Developer"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/developer.webp'; }}
                  className="h-7 w-7 md:h-8 md:w-8 rounded-full object-cover border border-ramillan-gold/30 group-hover:scale-105 transition-transform"
                />
                <div className="text-sm text-gray-300">Developed by <span className="font-medium">Kamrul Hasan</span></div>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;