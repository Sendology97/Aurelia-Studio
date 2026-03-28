import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star } from 'lucide-react';

interface ReviewsPageProps {
  onBack: () => void;
  onContact: () => void;
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ onBack, onContact }) => {
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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Header */}
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
                <span className="text-[10px] uppercase tracking-[0.6em] text-white/90 font-extralight">Gestione recensioni</span>
                <div className="w-1 h-1 bg-orange-500" />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-6xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left Column: Hero & Stats */}
          <div className="lg:col-span-7 space-y-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.3em] text-orange-500 font-bold">Social Proof Engine</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-[0.9] uppercase">
                Le recensioni <br />
                sono il tuo <br />
                <span className="text-orange-500 italic font-display">miglior</span> <br />
                venditore
              </h2>

              <p className="text-xl font-light text-white/40 max-w-xl leading-relaxed">
                Il <span className="text-white">93%</span> dei consumatori legge le recensioni online prima di scegliere. 
                Una stella in più su Google può aumentare il fatturato fino al <span className="text-orange-500 font-medium">9%</span>.
              </p>
            </motion.div>

            {/* Examples with "Card" design */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group p-8 bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-orange-500 fill-orange-500" />)}
                  </div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Success Case</span>
                </div>
                <p className="text-lg font-light italic text-white/80 leading-snug">
                  "Ristorante con 4.8 stelle → sempre pieno il weekend"
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group p-8 bg-white/[0.01] backdrop-blur-sm border border-white/5 rounded-3xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(2)].map((_, i) => <Star key={i} size={14} className="text-orange-500 fill-orange-500" />)}
                    {[...Array(3)].map((_, i) => <Star key={i} size={14} className="text-white/10" />)}
                  </div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Risk Factor</span>
                </div>
                <p className="text-lg font-light italic text-white/60 leading-snug">
                  "Idraulico con 2.1 stelle → telefono che non squilla"
                </p>
              </motion.div>

              {/* Strategic Explanation Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-20 pt-16 border-t border-white/5 space-y-12"
              >
                <div className="space-y-4">
                  <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] block">Analisi Strategica</span>
                  <h3 className="text-3xl md:text-4xl font-extralight tracking-tight uppercase leading-tight">
                    L'invisibilità è il <br />
                    <span className="text-white/20">costo più alto</span> <br />
                    che puoi pagare
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Oggi, non avere un sito web professionale non è una scelta di "minimalismo", è una dichiarazione di <span className="text-white">assenza</span>. Se un cliente non ti trova online, per lui semplicemente non esisti. Ma la presenza è solo metà della battaglia.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Ignorare le recensioni o non rispondere ai feedback è come lasciare un cliente a parlare da solo nel tuo ufficio. La <span className="text-orange-500">reputazione su Google</span> è il tuo biglietto da visita dinamico: ogni risposta mancata è un segnale di trascuratezza che spinge i potenziali clienti verso la concorrenza.
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-orange-500/5 border border-orange-500/10 rounded-2xl">
                  <p className="text-xs font-light text-orange-500/80 leading-relaxed uppercase tracking-widest text-center">
                    Un business senza voce è un business destinato a restare nell'ombra.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Features & Pricing */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32 p-12 bg-[#111] border border-white/5 rounded-[40px] overflow-hidden group"
            >
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-colors duration-1000" />
              
              <div className="relative z-10 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-orange-500">Service Blueprint</h3>
                  <p className="text-2xl font-extralight tracking-tight">Cosa include la gestione professionale</p>
                </div>

                <div className="space-y-6">
                  {[
                    "Risposta professionale a tutte le recensioni",
                    "Strategia per ottenere più recensioni positive",
                    "Monitoraggio mensile",
                    "Report delle recensioni"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-2 w-1.5 h-1.5 bg-orange-500 rounded-full group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm font-light text-white/50 group-hover/item:text-white transition-colors tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-12 border-t border-white/10 space-y-8">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Investimento</p>
                      <div className="text-5xl font-extralight tracking-tighter">
                        +29€<span className="text-lg text-white/20">/mese</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-widest text-orange-500 font-bold">Add-on</p>
                      <p className="text-[9px] uppercase tracking-widest text-white/20">Al tuo canone</p>
                    </div>
                  </div>

                  <button 
                    onClick={onContact}
                    className="w-full py-6 bg-orange-500 text-black text-[10px] font-bold uppercase tracking-[0.5em] rounded-2xl hover:bg-white transition-all duration-500 hover:scale-[1.02] active:scale-95"
                  >
                    Attiva Servizio
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Minimal Market Insight */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-10 border-l border-white/5 space-y-8"
            >
              <div className="space-y-2">
                <span className="text-orange-500 font-mono text-[9px] uppercase tracking-[0.4em] block">Market Insight</span>
                <p className="text-lg font-extralight text-white/40 leading-tight italic">
                  "Il silenzio online <br />
                  parla più forte <br />
                  delle tue parole."
                </p>
              </div>
              
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex justify-between items-end">
                  <span className="text-[9px] uppercase tracking-widest text-white/20">Fiducia Percepita</span>
                  <span className="text-[10px] font-mono text-orange-500">85%</span>
                </div>
                <div className="h-[1px] w-full bg-white/5 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute top-0 left-0 h-full bg-orange-500"
                  />
                </div>
                <p className="text-[8px] uppercase tracking-widest text-white/10 leading-relaxed">
                  Media delle attività con gestione professionale vs amatoriale
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-24 border-t border-white/5 mt-20">
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

export default ReviewsPage;
