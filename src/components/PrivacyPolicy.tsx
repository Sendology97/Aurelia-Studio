import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          Privacy <span className="text-orange-500 italic font-display">Policy</span>
        </motion.h1>

        <div className="space-y-12 text-white/70 font-light leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">1. Introduzione</h2>
            <p>
              Benvenuto su Aurelia Studio. La tua privacy è estremamente importante per noi. Questa Privacy Policy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando visiti il nostro sito web aureliastudio.it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">2. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento dei dati è Aurelia Studio, con sede in Italia. Per qualsiasi domanda riguardante la presente informativa, puoi contattarci all'indirizzo email: <a href="mailto:info@aureliastudio.it" className="text-orange-500 underline">info@aureliastudio.it</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">3. Dati Raccolti</h2>
            <p>
              Raccogliamo i dati che ci fornisci volontariamente tramite il modulo di contatto, tra cui:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e Cognome</li>
              <li>Indirizzo Email</li>
              <li>Contenuto del messaggio</li>
            </ul>
            <p>
              Raccogliamo inoltre dati tecnici in modo automatico tramite cookie (vedi Cookie Policy).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">4. Finalità del Trattamento</h2>
            <p>
              I tuoi dati vengono utilizzati per:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rispondere alle tue richieste di informazioni o preventivi.</li>
              <li>Migliorare l'esperienza utente sul nostro sito.</li>
              <li>Adempiere agli obblighi di legge.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">5. Base Giuridica</h2>
            <p>
              Il trattamento dei dati si basa sul tuo consenso (espresso tramite l'invio del modulo di contatto) e sull'esecuzione di misure precontrattuali o contrattuali.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">6. Conservazione dei Dati</h2>
            <p>
              Conserviamo i tuoi dati personali solo per il tempo necessario a soddisfare le finalità per cui sono stati raccolti, a meno che non sia richiesto un periodo di conservazione più lungo dalla legge.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">7. Diritti dell'Interessato</h2>
            <p>
              Ai sensi del GDPR (Regolamento UE 2016/679), hai il diritto di:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accedere ai tuoi dati personali.</li>
              <li>Chiedere la rettifica o la cancellazione dei dati.</li>
              <li>Opporsi al trattamento o chiederne la limitazione.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento.</li>
            </ul>
            <p>
              Per esercitare questi diritti, scrivi a <a href="mailto:info@aureliastudio.it" className="text-orange-500 underline">info@aureliastudio.it</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">8. Sicurezza</h2>
            <p>
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i tuoi dati da accessi non autorizzati, alterazioni o distruzioni.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-white uppercase tracking-widest font-normal">9. Modifiche</h2>
            <p>
              Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di ultimo aggiornamento.
            </p>
            <p className="text-xs opacity-50 pt-8">Ultimo aggiornamento: 23 Marzo 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
