import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronsRight, 
  Dna, 
  Microscope, 
  Activity
} from 'lucide-react';
import heroBioreactorImg from '../assets/images/bioreactor_cleanroom_1789903109094.jpg';
import heroScientistImg from '../assets/images/scientist_lab_pipette_1789903123201.jpg';

interface HeroProps {
  onOpenQuickApply: () => void;
  onOpenContact: (profileType?: 'entreprise' | 'candidat', subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickApply, onOpenContact }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#071C3C] text-white"
    >
      {/* Halo lumineux & graphismes d'arrière-plan haute technologie légers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 right-10 w-[550px] h-[550px] rounded-full bg-[#55AAA5]/15 blur-[120px]" />
        <div className="absolute -bottom-24 -left-20 w-[450px] h-[450px] rounded-full bg-[#0B2F63]/60 blur-[110px]" />
        
        {/* Motifs filaires discrets */}
        <div className="absolute right-12 top-28 opacity-10 hidden xl:block">
          <Dna className="w-24 h-24 text-[#55AAA5]" />
        </div>
        <div className="absolute right-[42%] bottom-16 opacity-10 hidden xl:block">
          <Activity className="w-16 h-16 text-[#55AAA5]" />
        </div>
        <div className="absolute right-8 bottom-32 opacity-10 hidden xl:block">
          <Microscope className="w-20 h-20 text-[#55AAA5]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Grille principale : Titre & CTA à gauche, Composition visuelle dynamique à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Colonne gauche : Accroche percutante & double appel à l'action */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Titre percutant avec typographie amplifiée et contrastée */}
            <motion.h1
              id="hero-main-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.65rem] xl:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Votre cabinet de recrutement <br className="hidden sm:inline" />
              expert en{' '}
              <span className="text-[#55AAA5] inline-block">
                Life Science & Ingénierie
              </span>
            </motion.h1>

            {/* Sous-titre clair et institutionnel */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl"
            >
              Cabinet de conseil en recrutement spécialisé dans les sciences de la vie et l'ingénierie : pharmacie, biotechnologies, technologies médicales et diagnostic.
            </motion.p>

            {/* Boutons d'action rapides format pilule avec empilement vertical optimisé mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                id="hero-btn-entreprise"
                onClick={() => {
                  const el = document.getElementById('entreprises');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group w-full sm:w-auto justify-center min-h-[52px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#55AAA5] to-[#3F8F8A] hover:from-[#62BBB6] hover:to-[#49A39D] text-[#071C3C] font-bold text-base flex items-center gap-2.5 shadow-lg shadow-[#55AAA5]/25 hover:shadow-xl hover:shadow-[#55AAA5]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Je suis une entreprise</span>
                <ChevronsRight className="w-4 h-4 text-[#071C3C] group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                id="hero-btn-candidat"
                onClick={() => {
                  const el = document.getElementById('candidats');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group w-full sm:w-auto justify-center min-h-[52px] px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/20 hover:border-[#55AAA5]/60 flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Je suis un candidat</span>
                <ChevronsRight className="w-4 h-4 text-slate-300 group-hover:text-[#55AAA5] group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </motion.div>

          </div>

          {/* Colonne droite : Composition visuelle épurée 100% Life Sciences animée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Photo 1 (En haut, dominante) : Ingénieur en salle blanche et bioréacteur industriel */}
              <div className="relative z-20 ml-auto w-[86%] sm:w-[82%] rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/50 bg-[#0B2F63] group">
                <div className="aspect-[4/3] relative">
                  <img
                    src={heroBioreactorImg}
                    alt="Ingénieur procédés et bioproduction en salle blanche"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Photo 2 (Bas gauche, en superposition moderne) : Chercheuse en biotechnologies au laboratoire */}
              <div className="relative z-30 -mt-16 sm:-mt-20 w-[70%] sm:w-[64%] rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60 bg-[#071C3C] group">
                <div className="aspect-[4/3] relative">
                  <img
                    src={heroScientistImg}
                    alt="Ingénieur R&D et recherche en biotechnologies et santé"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
