/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail, Star, Menu, X, MessageCircle, Phone, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import ReviewsPage from './components/ReviewsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import CookieConsent from './components/CookieConsent';
import ServicesDetailPage from './components/ServicesDetailPage';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [showServicesDetail, setShowServicesDetail] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@aureliastudio.it', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Nuovo messaggio dal sito Aurelia Studio",
          _captcha: "false",            _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  const { scrollY } = useScroll();
  const yMountains = useTransform(scrollY, [0, 1000], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll position is more than 50px, we consider we left the hero top area
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToContact = () => {
    setShowReviews(false);
    setShowServicesDetail(false);
    setShowPrivacy(false);
    setShowCookie(false);
    setTimeout(() => {
      const element = document.getElementById('contatti');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (showReviews) {
    return (
      <ReviewsPage 
        onBack={() => { setShowReviews(false); window.scrollTo(0, 0); }} 
        onContact={navigateToContact}
      />
    );
  }

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => { setShowPrivacy(false); window.scrollTo(0, 0); }} />;
  }

  if (showCookie) {
    return <CookiePolicy onBack={() => { setShowCookie(false); window.scrollTo(0, 0); }} />;
  }

  if (showServicesDetail) {
    return (
      <ServicesDetailPage 
        onBack={() => setShowServicesDetail(false)} 
        onContact={navigateToContact}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden scroll-smooth">
      {/* Navigation */}
      <AnimatePresence>
        {isAtTop && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-5"
            >
              {/* Abstract 'Aurelia' Sun-A Logo */}
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  {/* The 'A' Frame - Bold and Modern */}
                  <path 
                    d="M20 80 L50 20 L80 80" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="14" 
                    strokeLinecap="square" 
                  />
                  {/* The 'Aurelia' Sun - Representing 'Gold/Dawn' */}
                  <motion.circle 
                    cx="50" cy="55" r="12" 
                    fill="#f97316"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-light tracking-[0.6em] text-xl uppercase leading-none text-white">Aurelia</span>
                <span className="text-[9px] uppercase tracking-[0.8em] text-white/60 mt-2 font-light">Studio</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-8 text-[10px] font-extralight uppercase tracking-[0.4em]"
            >
              <div className="hidden md:flex gap-10">
                <a href="#servizi" className="hover:text-orange-500 transition-all duration-500">Servizi</a>
                <a href="#chi-siamo" className="hover:text-orange-500 transition-all duration-500">Chi siamo</a>
                <a href="#contatti" className="hover:text-orange-500 transition-all duration-500">Contatti</a>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-white/60 hover:text-orange-500 transition-colors"
              >
                <Menu size={24} strokeWidth={1} />
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#141414] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-24">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border border-orange-500/30 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.6em] font-light">Menu</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/60 hover:text-orange-500 transition-colors"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            <nav className="flex flex-col gap-12">
              {[
                { label: 'Servizi', href: '#servizi' },
                { label: 'Chi siamo', href: '#chi-siamo' },
                { label: 'Contatti', href: '#contatti' }
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-extralight uppercase tracking-[0.2em] text-white/40 hover:text-orange-500 transition-all duration-500"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-white/5 flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 font-mono">Contatti</span>
                <p className="text-xs font-light tracking-widest text-white/60">info@aureliastudio.it</p>
              </div>
              <div className="flex gap-6">
                <Instagram size={18} className="text-white/20 hover:text-orange-500 transition-colors" />
                <Linkedin size={18} className="text-white/20 hover:text-orange-500 transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (Hero) */}
      <main className="relative h-screen flex flex-col md:flex-row">
        {/* Left Panel - Orange */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex-1 bg-orange-500 origin-left relative overflow-hidden"
        >
        </motion.div>

        {/* Right Panel - Dark */}
        <div className="flex-1 bg-[#141414] relative overflow-hidden">
        </div>

        <ParticleBackground />

        {/* Central Visual Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-full max-w-4xl px-4 flex items-center justify-center"
          >
            {/* Minimal Mountains Visual */}
            <div className="relative w-full aspect-square md:aspect-[16/10] flex items-center justify-center">
              <motion.div
                style={{ y: yMountains }}
                className="w-full h-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl">
                    {/* Back Peak */}
                    <path 
                      d="M200 500 L500 150 L800 500 Z" 
                      fill="white" 
                      fillOpacity="0.05" 
                    />
                    {/* Middle Peak */}
                    <path 
                      d="M100 500 L400 200 L700 500 Z" 
                      fill="white" 
                      fillOpacity="0.1" 
                    />
                    {/* Front Peak */}
                    <path 
                      d="M300 500 L600 100 L900 500 Z" 
                      fill="white" 
                      fillOpacity="0.15" 
                    />
                    {/* Line Art Detail */}
                    <path 
                      d="M100 500 L400 200 L500 300 L600 100 L900 500" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="1" 
                      strokeOpacity="0.3" 
                    />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Hero Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <motion.h1 
                  initial={{ letterSpacing: "2em", opacity: 0 }}
                  animate={{ letterSpacing: "1.2em", opacity: 1 }}
                  transition={{ delay: 0.5, duration: 2 }}
                  className="text-3xl md:text-6xl lg:text-8xl font-display font-extralight uppercase tracking-[1.2em] text-white/90 mix-blend-difference"
                >
                  AURELIA
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 1.8, duration: 1 }}
                  className="mt-2 flex flex-col items-center"
                >
                  <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-display font-light">
                    Per le attività che contano
                  </span>
                  <div className="w-8 h-[1px] bg-white/40 mt-4" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Slogan */}
        <div className="absolute bottom-16 left-0 w-full flex justify-center items-center z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-16 h-[1px] bg-white/40" />
            <p className="text-xs md:text-sm uppercase tracking-[0.6em] font-light text-white text-center px-8 leading-relaxed max-w-2xl">
              Il design che trasforma i visitatori in clienti.
            </p>
          </motion.div>
        </div>
      </main>

      {/* Transition Section with Vertical Marquee */}
      <section className="h-[60vh] bg-[#141414] flex items-center overflow-hidden border-y border-white/5 relative">
        <div className="container mx-auto px-8 md:px-24 flex items-center gap-12 md:gap-24">
          {/* Vertical Marquee Rail */}
          <div className="h-[60vh] w-16 md:w-24 overflow-hidden relative border-r border-white/5 flex items-center justify-center">
            <div className="flex flex-col whitespace-nowrap animate-marquee-vertical">
              {[1, 2].map((i) => (
                <span key={i} className="text-3xl md:text-4xl font-display font-thin uppercase tracking-[1em] text-white/10 py-12 [writing-mode:vertical-rl] rotate-180">
                  AURELIA STUDIO · AURELIA STUDIO · AURELIA STUDIO ·&nbsp;
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-1 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 block mb-6 font-light">Il problema</span>
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight uppercase mb-8 leading-[1.2]">
                Se non ti trovano, <br />
                <span className="text-orange-500">trovano qualcun altro.</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Subtle Horizontal Background Text */}
        <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none">
          <span className="text-[30vh] font-display font-black uppercase tracking-tighter leading-none">
            AURELIA
          </span>
        </div>
      </section>

      {/* Services Section - Redesigned as Packages */}
      <section id="servizi" className="min-h-screen bg-[#141414] relative py-32 px-8 md:px-24 flex flex-col justify-center overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <span className="text-orange-500 font-mono text-[10px] tracking-[0.6em] uppercase block mb-6">01 / Servizi</span>
            <h2 className="text-5xl md:text-8xl font-extralight tracking-tight uppercase leading-none">
              Cosa <span className="opacity-20 font-display italic">offriamo</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { 
                id: "01", 
                name: "Starter", 
                tagline: "Presenza Essenziale",
                features: ["Architettura Web (3-4 Pagine)", "UI/UX Design & Mobile First", "Setup Dominio & Deployment", "Manutenzione Mensile*"],
                focus: "Ideale per attività e professionisti che non hanno presenza online.",
                price: "399€",
                originalPrice: "499€"
              },
              { 
                id: "02", 
                name: "Business", 
                tagline: "Crescita Accelerata",
                features: ["Ecosystem Web Completo", "UI/UX Design & Conversion Focus", "SEO & Local Optimization", "Google Maps & GMB Integration", "Sistemi di Lead Generation", "Manutenzione & Performance Report"],
                focus: "Per aziende che vogliono dominare il proprio mercato.",
                price: "599€",
                originalPrice: "749€"
              },
              { 
                id: "03", 
                name: "Premium", 
                tagline: "Dominio Digitale",
                features: ["Per chi è pronto a portare il proprio business al livello successivo."],
                focus: "Soluzioni su misura per chi vuole essere leader in mercati EU US.",
                cta: "Raccontaci il tuo progetto"
              }
            ].map((pkg, idx) => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.2,
                  scale: { duration: 0.4, ease: "easeOut" },
                  y: { duration: 0.4, ease: "easeOut" }
                }}
                className="bg-[#141414] p-12 md:p-16 flex flex-col group hover:bg-white/[0.02] transition-all duration-500 border-r border-white/5 last:border-r-0 relative z-10 hover:z-20 shadow-2xl hover:shadow-orange-500/5"
              >
                <div className="flex justify-center items-center mb-16 relative">
                  <span className="font-mono text-xs text-orange-500 tracking-widest absolute left-0">{pkg.id}</span>
                  <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-orange-500 transition-colors duration-500" />
                </div>

                <h3 className="text-4xl md:text-5xl font-extralight uppercase tracking-tighter mb-4 group-hover:text-orange-500 transition-colors duration-500 text-center">
                  {pkg.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-12 font-light italic text-center">
                  {pkg.tagline}
                </p>

                <div className="flex-1 space-y-4 mb-16">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 border-b border-white/5 pb-4">
                      <div className="w-1 h-1 bg-orange-500/30 flex-shrink-0" />
                      <span className="text-sm font-light text-white/60 tracking-wide text-center w-full pr-5">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <p className="text-xs font-light text-white/30 leading-relaxed mb-10 italic">
                    {pkg.focus}
                  </p>
                  {pkg.price ? (
                    <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-2 text-center">
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-extralight text-white tracking-tighter">{pkg.price}</span>
                        <span className="text-xl font-light text-white/20 line-through tracking-tighter">{pkg.originalPrice}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-medium">Sconto 20% Applicato</span>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-8 border-t border-white/10">
                      <button 
                        onClick={navigateToContact}
                        className="relative w-full py-5 border border-white/10 text-[10px] uppercase tracking-[0.5em] font-bold hover:text-black transition-colors duration-500 flex items-center justify-center group/btn overflow-hidden"
                      >
                        {/* Liquid Wave Effect */}
                        <div className="absolute inset-0 bg-orange-500 translate-y-[102%] group-hover/btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                        
                        <span className="relative z-10">
                          {pkg.cta || "Configura Progetto"}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reviews Management Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
            className="mt-24 flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-orange-500/30" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-orange-500 font-bold">Premium Add-on</span>
              <div className="h-[1px] w-8 bg-orange-500/30" />
            </div>
            
            <button 
              onClick={() => setShowReviews(true)}
              className="group relative px-16 py-6 border border-orange-500/40 text-orange-500 uppercase tracking-[0.6em] text-[11px] font-mono overflow-hidden transition-all duration-700 hover:border-orange-500 hover:shadow-[0_0_40px_rgba(255,159,28,0.2)]"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1)" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>

              <span className="relative z-10 group-hover:text-black transition-colors duration-500 flex items-center gap-4">
                Gestione Recensioni
                <div className="flex items-center gap-2 border-l border-orange-500/20 pl-4 group-hover:border-black/20 transition-colors">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-current text-orange-500 group-hover:text-black transition-colors" />
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-orange-500 group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </span>
            </button>
            
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-light">Potenzia il tuo business con la voce dei tuoi clienti</p>
          </motion.div>
        </div>
      </section>

      {/* About Section - Chi Siamo */}
      <section id="chi-siamo" className="min-h-screen bg-[#141414] border-t border-white/5 py-32 px-8 md:px-24 relative overflow-hidden">
        {/* Background Large Letter */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none hidden lg:block">
          <span className="text-[80vh] font-display font-black leading-none">A</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <span className="text-orange-500 font-mono text-[10px] tracking-[0.6em] uppercase block mb-6">02 / Chi siamo</span>
            <h2 className="text-5xl md:text-8xl font-extralight tracking-tight uppercase leading-none">
              Oltre il <span className="opacity-20 font-display italic">codice</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <p className="text-xl md:text-3xl font-extralight leading-tight text-white/90">
                Aurelia Studio non è solo un'agenzia. È un laboratorio di <span className="text-orange-500">design strategico</span> dove l'estetica incontra la conversione.
              </p>
              
              <div className="relative pl-8 md:pl-12 border-l border-white/5 space-y-12">
                {/* Mission Section */}
                <div className="space-y-4">
                  <span className="text-orange-500 font-mono text-[9px] uppercase tracking-[0.4em] block mb-2 opacity-70">Mission</span>
                  <p className="text-white/60 font-light leading-relaxed max-w-xl text-sm md:text-base">
                    Aurelia Studio nasce con una missione chiara: trasformare ogni attività in un'autorità digitale capace di generare <span className="text-white font-normal">risultati tangibili</span>. Che si tratti di una realtà locale o di un'azienda con ambizioni globali, il nostro obiettivo è scolpire la tua presenza online per farti <span className="italic">trovare, scegliere e ricordare</span>.
                  </p>
                </div>

                {/* Vision Section */}
                <div className="space-y-4 relative">
                  <span className="text-orange-500 font-mono text-[9px] uppercase tracking-[0.4em] block mb-2 opacity-70">Vision</span>
                  <p className="text-white/60 font-light leading-relaxed max-w-xl text-sm md:text-base italic font-serif">
                    "Ogni pixel che posizioniamo, ogni riga di codice che scriviamo e ogni strategia che pianifichiamo convergono verso un unico traguardo: elevare la tua visione a <span className="text-white not-italic font-sans font-normal">standard di riferimento</span> nel tuo mercato."
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute -left-12 top-0 w-8 h-px bg-orange-500/30" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-white/[0.02] border border-white/5 overflow-hidden group"
            >
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>

              {/* Central Graphic Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-64 h-64 border border-orange-500/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-48 h-48 border border-orange-500/40 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 border border-orange-500/60 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(255,159,28,0.5)]" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Aurelia Est. 2025</span>
                  <div className="w-12 h-[1px] bg-white/10" />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-display font-thin uppercase tracking-widest leading-none">
                    Il nostro <br /> <span className="text-orange-500">processo</span>
                  </h3>
                  <div className="w-full h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
                  <p className="text-xs font-light text-white/40 leading-relaxed max-w-xs uppercase tracking-widest">
                    Analisi · Design · Sviluppo · Evoluzione
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-32 text-center space-y-24"
          >
            <div className="space-y-12">
              <button 
                onClick={() => setShowServicesDetail(true)}
                className="group relative px-12 py-5 border border-orange-500/40 text-orange-500 uppercase tracking-[0.5em] text-[10px] font-mono overflow-hidden transition-all duration-700 hover:border-orange-500 hover:shadow-[0_0_40px_rgba(255,159,28,0.2)] rounded-full mx-auto flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1)" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Scopri nel dettaglio cosa facciamo</span>
              </button>
            </div>

            <div className="space-y-12">
              <span className="block text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em]">I nostri valori</span>
              <div className="flex flex-col md:flex-row border-y border-white/5 max-w-3xl mx-auto">
                {["Velocità", "Eleganza", "Affidabilità"].map((valore, vIdx) => (
                  <motion.div 
                    key={vIdx}
                    className={`flex-1 py-8 px-6 flex flex-col items-center justify-center gap-3 group relative cursor-default ${vIdx < 2 ? 'md:border-r border-white/5' : ''} ${vIdx > 0 ? 'border-t md:border-t-0 border-white/5' : ''}`}
                  >
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/[0.02] transition-colors duration-700" />
                    
                    {/* Top Accent Line */}
                    <motion.div 
                      className="absolute top-0 left-0 h-px bg-orange-500 w-0 group-hover:w-full transition-all duration-700 ease-out"
                    />

                    <span className="text-[9px] font-mono text-white/20 tracking-[0.5em] uppercase mb-1">0{vIdx + 1}</span>
                    <h4 className="text-sm md:text-base font-light tracking-[0.4em] uppercase group-hover:text-orange-500 transition-all duration-500">
                      {valore}
                    </h4>
                    
                    {/* Bottom Indicator */}
                    <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-orange-500 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contatti" className="relative py-32 px-8 md:px-24 bg-[#141414] border-t border-white/5 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            <span className="text-[20vw] font-display font-black text-white/[0.01] uppercase tracking-[0.2em]">
              Contact
            </span>
          </div>
          
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          {/* Animated Glows */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.03, 0.07, 0.03],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" 
          />

          {/* Tech Lines */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white/10 via-transparent to-white/10 opacity-20" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24 relative"
          >
            <span className="text-orange-500 font-mono text-[10px] tracking-[0.6em] uppercase block mb-6">03 / Contatti</span>
            <h2 className="text-5xl md:text-8xl font-extralight tracking-tight uppercase leading-none">
              Inizia la tua <br /> <span className="opacity-20 font-display italic text-orange-500">evoluzione</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Column: Info & Quick Links */}
            <div className="lg:col-span-7 space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-12"
              >
                <div className="space-y-8 relative">
                  <p className="text-xl md:text-3xl font-extralight text-white/70 leading-relaxed max-w-md">
                    Hai un progetto in mente? Parliamone. Siamo pronti a dare forma alla tua visione.
                  </p>
                  <div className="w-12 h-px bg-orange-500/50" />
                </div>

                <div className="space-y-10">
                  <div className="group cursor-pointer relative">
                    <span className="text-orange-500 font-mono text-[9px] uppercase tracking-[0.4em] block mb-4 opacity-70">Email</span>
                    <a href="mailto:info@aureliastudio.it" className="text-2xl md:text-4xl font-light hover:text-orange-500 transition-all duration-500 block group-hover:translate-x-2">
                      info@aureliastudio.it
                    </a>
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  <div className="group cursor-pointer relative">
                    <span className="text-orange-500 font-mono text-[9px] uppercase tracking-[0.4em] block mb-4 opacity-70">Telefono</span>
                    <a href="tel:+393662188086" className="text-2xl md:text-4xl font-light hover:text-orange-500 transition-all duration-500 block group-hover:translate-x-2">
                      +39 366 218 8086
                    </a>
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  <div className="flex gap-8 pt-4">
                    {[
                      { icon: ShieldCheck, label: "Sicuro", href: "#" },
                      { icon: Award, label: "Premium", href: "#" },
                      { icon: CheckCircle, label: "Garantito", href: "#" }
                    ].map((badge, bIdx) => (
                      <div 
                        key={bIdx}
                        className="group flex flex-col items-center gap-2 text-white/30 hover:text-orange-500 transition-all duration-500"
                      >
                        <badge.icon size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">{badge.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Cards - More Compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { 
                    icon: MessageCircle, 
                    label: "WhatsApp", 
                    value: "Chatta con noi", 
                    href: "https://wa.me/393662188086",
                    color: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
                    iconColor: "text-emerald-500"
                  },
                  { 
                    icon: Instagram, 
                    label: "Instagram", 
                    value: "@aureliastudio.it", 
                    href: "https://instagram.com/aureliastudio.it",
                    color: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]",
                    iconColor: "text-pink-500"
                  },
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "info@aureliastudio.it", 
                    href: "mailto:info@aureliastudio.it",
                    color: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
                    iconColor: "text-orange-500"
                  },
                  { 
                    icon: Phone, 
                    label: "Chiamata", 
                    value: "+39 366 218 8086", 
                    href: "tel:+393662188086",
                    color: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
                    iconColor: "text-blue-500"
                  }
                ].map((contact, idx) => (
                  <motion.a
                    key={idx}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className={`group p-6 bg-white/[0.02] border border-white/5 rounded-2xl transition-all duration-500 flex flex-col gap-4 ${contact.color}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className={`p-2.5 rounded-xl bg-white/[0.03] ${contact.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                        <contact.icon size={20} strokeWidth={1.5} />
                      </div>
                      <ArrowRight size={12} className="text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/20 block mb-0.5">{contact.label}</span>
                      <p className="text-base font-light tracking-wide group-hover:text-white transition-colors">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Column: Compact Form Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[32px] relative overflow-hidden"
              >
                {/* Decorative background for the form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-extralight uppercase tracking-tight mb-2">Inviaci un <span className="text-orange-500 italic font-display">messaggio</span></h3>
                    <p className="text-white/40 font-light tracking-widest text-[9px] uppercase">Rispondiamo solitamente entro 24 ore</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono ml-1">Nome</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Il tuo nome"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-all duration-500 font-light text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono ml-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="la-tua@email.it"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-all duration-500 font-light text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono ml-1">Messaggio</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Come possiamo aiutarti?"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-all duration-500 font-light resize-none text-sm"
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className={`w-full group relative py-5 rounded-xl text-[10px] uppercase tracking-[0.5em] font-bold overflow-hidden transition-all duration-700 ${
                          formStatus === 'success' ? 'bg-emerald-500 text-white' : 
                          formStatus === 'error' ? 'bg-red-500 text-white' : 
                          'bg-orange-500 text-black hover:bg-white hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]'
                        }`}
                      >
                        <span className="relative z-10">
                          {formStatus === 'idle' && 'Invia Richiesta'}
                          {formStatus === 'sending' && 'Invio in corso...'}
                          {formStatus === 'success' && 'Messaggio Inviato'}
                          {formStatus === 'error' && 'Errore. Riprova.'}
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1)" />
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            © 2026 Aurelia Studio · Tutti i diritti riservati
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => { setShowPrivacy(true); window.scrollTo(0, 0); }}
              className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              Privacy
            </button>
            <button 
              onClick={() => { setShowCookie(true); window.scrollTo(0, 0); }}
              className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              Cookie
            </button>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Popup */}
      <CookieConsent 
        onShowPrivacy={() => { setShowPrivacy(true); window.scrollTo(0, 0); }}
        onShowCookie={() => { setShowCookie(true); window.scrollTo(0, 0); }}
      />
    </div>
  );
}
