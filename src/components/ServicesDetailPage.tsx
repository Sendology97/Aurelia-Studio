import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, Star, Shield, Zap, Target, TrendingUp, Users } from 'lucide-react';

interface ServicesDetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

const ServicesDetailPage: React.FC<ServicesDetailPageProps> = ({ onBack, onContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500/30">
      {/* Navigation */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-10 flex justify-between items-start pointer-events-none"
          >
            <button 
              onClick={onBack}
              className="pointer-events-auto group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-light text-white/40 hover:text-orange-500 transition-colors duration-500"
            >
              <div className="relative overflow-hidden">
                <ArrowLeft size={12} className="group-hover:-translate-x-full transition-transform duration-500" />
                <ArrowLeft size={12} className="absolute top-0 left-full group-hover:left-0 transition-all duration-500" />
              </div>
              <span>Home</span>
            </button>

            <div className="flex flex-col items-end text-right">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.6em] text-white/90 font-extralight">Dettagli Servizi</span>
                <div className="w-1 h-1 bg-orange-500" />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="pt-40 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <span className="text-orange-500 font-mono text-[10px] tracking-[0.6em] uppercase block mb-6">Analisi Dettagliata</span>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter uppercase leading-none mb-12">
            Cosa <span className="opacity-20 font-display italic">facciamo</span> <br />
            per il tuo <span className="text-orange-500">successo</span>
          </h1>
          <p className="text-xl md:text-2xl font-extralight text-white/60 max-w-3xl leading-relaxed">
            Non costruiamo solo siti web. Progettiamo ecosistemi digitali orientati alla conversione, alla visibilità e alla crescita costante del tuo business.
          </p>
        </motion.div>

        {/* The Three Plans Section */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl md:text-4xl font-extralight uppercase tracking-tight">I Nostri <span className="text-orange-500">Piani</span> Strategici</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Plan 1: Starter */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] transition-all duration-500 shadow-2xl hover:shadow-orange-500/5"
            >
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-display font-thin text-orange-500/40">01</span>
                  <h3 className="text-3xl font-extralight uppercase tracking-widest">Starter</h3>
                </div>
                <p className="text-sm font-light text-white/40 leading-relaxed">
                  La base solida per chi vuole iniziare a esistere digitalmente con un'immagine professionale e curata.
                </p>
                <div className="pt-6">
                  <span className="text-4xl font-extralight tracking-tighter">399€</span>
                  <span className="text-xs text-white/20 uppercase tracking-widest ml-4">Una tantum</span>
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Architettura Web", desc: "Sito di 3-4 pagine ottimizzato per la velocità.", icon: <Zap size={16} /> },
                  { title: "UI/UX Design", desc: "Interfaccia moderna studiata per l'esperienza utente.", icon: <Target size={16} /> },
                  { title: "Mobile First", desc: "Perfetta visualizzazione su ogni smartphone.", icon: <Users size={16} /> },
                  { title: "Deployment", desc: "Messa online professionale e sicura.", icon: <Shield size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                    <div className="text-orange-500">{item.icon}</div>
                    <h4 className="text-sm font-medium uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xs font-light text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Plan 2: Business */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 bg-orange-500/[0.02] border border-orange-500/20 rounded-[40px] hover:bg-orange-500/[0.04] transition-all duration-500 relative overflow-hidden shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.4em] px-4 py-2 border border-orange-500/30 rounded-full bg-orange-500/5">Most Popular</span>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-display font-thin text-orange-500/40">02</span>
                  <h3 className="text-3xl font-extralight uppercase tracking-widest">Business</h3>
                </div>
                <p className="text-sm font-light text-white/40 leading-relaxed">
                  L'ecosistema completo per chi vuole scalare e dominare la ricerca locale e nazionale.
                </p>
                <div className="pt-6">
                  <span className="text-4xl font-extralight tracking-tighter">599€</span>
                  <span className="text-xs text-white/20 uppercase tracking-widest ml-4">Una tantum</span>
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "SEO Avanzata", desc: "Posizionamento strategico sui motori di ricerca.", icon: <TrendingUp size={16} /> },
                  { title: "Local SEO", desc: "Ottimizzazione Google Maps e GMB.", icon: <Target size={16} /> },
                  { title: "Lead Generation", desc: "Sistemi integrati per acquisire nuovi contatti.", icon: <Users size={16} /> },
                  { title: "Performance", desc: "Report mensili e ottimizzazione continua.", icon: <Zap size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                    <div className="text-orange-500">{item.icon}</div>
                    <h4 className="text-sm font-medium uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xs font-light text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Plan 3: Premium */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] transition-all duration-500 shadow-2xl hover:shadow-orange-500/5"
            >
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-display font-thin text-orange-500/40">03</span>
                  <h3 className="text-3xl font-extralight uppercase tracking-widest">Premium</h3>
                </div>
                <p className="text-sm font-light text-white/40 leading-relaxed">
                  Soluzioni bespoke per leader di mercato. Progetti complessi e ambizioni globali.
                </p>
                <div className="pt-6">
                  <span className="text-2xl font-extralight tracking-widest uppercase opacity-40">Su Misura</span>
                </div>
              </div>
              <div className="lg:col-span-8 flex items-center justify-center p-12 border border-dashed border-white/10 rounded-3xl">
                <div className="text-center space-y-6">
                  <p className="text-lg font-light text-white/60">Progetti Enterprise, E-commerce complessi e Web App scalabili.</p>
                  <button 
                    onClick={onContact}
                    className="px-12 py-5 bg-orange-500 text-black text-[10px] font-bold uppercase tracking-[0.5em] rounded-full hover:bg-white transition-colors duration-500"
                  >
                    Contattaci per un preventivo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Review Management Section */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl md:text-4xl font-extralight uppercase tracking-tight">Gestione <span className="text-orange-500">Recensioni</span></h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-extralight uppercase tracking-tight leading-tight">
                  La tua reputazione è il tuo <br />
                  <span className="text-orange-500">asset più prezioso</span>
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  In un mondo dove il 93% dei consumatori legge le recensioni prima di acquistare, non puoi permetterti di lasciare la tua immagine al caso. Il nostro servizio add-on si occupa di tutto.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Risposte Professionali", desc: "Rispondiamo a ogni recensione con tono di voce coerente e strategico." },
                  { title: "Gestione Crisi", desc: "Affrontiamo i feedback negativi per trasformarli in opportunità di miglioramento." },
                  { title: "Strategia di Crescita", desc: "Implementiamo sistemi per incentivare i clienti soddisfatti a lasciare recensioni." },
                  { title: "Monitoraggio GMB", desc: "Teniamo sotto controllo la tua scheda Google Business Profile costantemente." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="mt-1 w-5 h-5 rounded-full border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={10} className="text-orange-500" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium uppercase tracking-widest">{feature.title}</h4>
                      <p className="text-xs font-light text-white/40 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full" />
              <div className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-orange-500 text-orange-500" />)}
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Live Reputation</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-orange-500"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40">
                    <span>Sentiment Positivo</span>
                    <span>98%</span>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-sm font-light italic text-white/60 leading-relaxed">
                    "Il servizio di gestione recensioni ha cambiato il modo in cui i clienti ci percepiscono. Il volume di chiamate è aumentato del 30% in soli due mesi."
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-widest text-orange-500">— Cliente Business</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            © 2026 Aurelia Studio · Tutti i diritti riservati
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]">Privacy</a>
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]">Cookie</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesDetailPage;
