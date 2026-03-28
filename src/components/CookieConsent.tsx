import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

interface CookieConsentProps {
  onShowPrivacy: () => void;
  onShowCookie: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onShowPrivacy, onShowCookie }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors duration-700" />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                <ShieldCheck size={20} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-sm font-medium uppercase tracking-widest mb-2 text-white">Consenso Cookie</h3>
                <p className="text-[11px] text-white/60 leading-relaxed mb-6 font-light">
                  Utilizziamo i cookie per migliorare la tua esperienza e analizzare il traffico. 
                  Puoi scegliere di accettarli o rifiutarli. Leggi la nostra{' '}
                  <button onClick={onShowCookie} className="text-orange-500 hover:underline">Cookie Policy</button> e{' '}
                  <button onClick={onShowPrivacy} className="text-orange-500 hover:underline">Privacy Policy</button>.
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 py-3 bg-orange-500 text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-lg hover:bg-orange-400 transition-colors"
                  >
                    Accetta
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 py-3 border border-white/10 text-white/60 text-[10px] uppercase tracking-[0.2em] font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all"
                  >
                    Rifiuta
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/20 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
