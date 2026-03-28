import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-orange-500 selection:text-white p-8 md:p-24">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-4 text-orange-500 uppercase tracking-[0.4em] text-[10px] font-mono mb-16 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
        Torna alla Home
      </motion.button>

      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extralight uppercase tracking-tighter mb-16"
        >
          Cookie <span className="text-orange-500 italic font-display">Policy</span>
        </motion.h1>

        <div className="space-y-12 text-white/70 font-light leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">1. Cosa sono i Cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. Servono a migliorare la tua esperienza di navigazione, ricordare le tue preferenze e raccogliere dati statistici.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">2. Tipi di Cookie Utilizzati</h2>
            <p>
              Aurelia Studio utilizza le seguenti categorie di cookie:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong className="text-white">Cookie Tecnici:</strong> Essenziali per il corretto funzionamento del sito. Senza di essi, alcune parti del sito potrebbero non essere accessibili.
              </li>
              <li>
                <strong className="text-white">Cookie Analitici:</strong> Utilizzati per raccogliere informazioni in forma aggregata e anonima sul numero di visitatori e su come questi navigano nel sito (es. Google Analytics).
              </li>
              <li>
                <strong className="text-white">Cookie di Terze Parti:</strong> Alcuni servizi esterni (come Google Maps o Instagram) possono installare i propri cookie per fornire funzionalità aggiuntive.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">3. Finalità dei Cookie</h2>
            <p>
              I cookie vengono utilizzati per:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assicurare che il sito funzioni correttamente.</li>
              <li>Migliorare la velocità e la sicurezza del sito.</li>
              <li>Analizzare l'uso del sito per migliorarne i contenuti e l'usabilità.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">4. Gestione dei Cookie</h2>
            <p>
              Puoi controllare e gestire i cookie tramite le impostazioni del tuo browser. La maggior parte dei browser consente di bloccare o eliminare i cookie. Tuttavia, se disabiliti i cookie tecnici, alcune funzionalità del sito potrebbero non funzionare correttamente.
            </p>
            <p>
              Ecco come gestire i cookie nei browser più comuni:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">5. Consenso</h2>
            <p>
              Continuando a navigare sul nostro sito, accetti l'uso dei cookie secondo quanto descritto in questa informativa. Se non desideri accettare i cookie, ti preghiamo di configurare il tuo browser di conseguenza o di non utilizzare il sito.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">6. Contatti</h2>
            <p>
              Per ulteriori informazioni sulla nostra Cookie Policy, puoi contattarci all'indirizzo email: <a href="mailto:info@aureliastudio.it" className="text-orange-500 underline">info@aureliastudio.it</a>.
            </p>
            <p className="text-xs opacity-50 pt-8">Ultimo aggiornamento: 23 Marzo 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
