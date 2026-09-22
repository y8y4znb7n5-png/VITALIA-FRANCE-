import React from 'react';
import { motion } from 'motion/react';
import {
  Dna,
  Pill,
  Activity,
  Cpu,
  ArrowUpRight,
  FlaskConical,
  Microscope,
  Stethoscope,
  Network,
} from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface ExpertiseSectorsProps {
  onSelectSectorForContact: (sectorTitle: string) => void;
  onOpenQuickApply: (sectorTitle?: string) => void;
}

export const ExpertiseSectors: React.FC<ExpertiseSectorsProps> = ({
  onSelectSectorForContact,
}) => {
  return (
    <FadeInSection
      id="expertises"
      className="py-20 lg:py-28 bg-[#06152D] text-white border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête épuré et centré */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#55AAA5]">
            Nos Pôles d'Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white tracking-tight">
            Une expertise sectorielle dédiée aux métiers de la santé et de l'industrie.
          </h2>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
            Dans un écosystème en constante innovation (pharmaceutique, biotechnologies, dispositifs médicaux, ingénierie et procédés industriels), nous accompagnons nos clients startups, PME et grands groupes dans l'identification, l'évaluation et l'attraction des meilleurs talents.
          </p>
        </div>

        {/* Liste des 4 pôles en disposition alternée (Zig-Zag) sobre & épurée */}
        <div className="space-y-20 lg:space-y-32">
          
          {/* ========================================================================= */}
          {/* PÔLE 1 : Biotechnologies & Thérapies Avancées (Texte Gauche / Visuel Droite) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Texte & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-13 h-13 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#55AAA5] shadow-lg shadow-black/20">
                <Dna className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Biotechnologies & Thérapies Avancées
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Thérapies géniques et cellulaires (ATMP), ARN messager, oncologie de précision et développement de biomédicaments à haute complexité biologique. Nous identifions les ingénieurs procédés, validation et industrialisation capables de transposer ces innovations à l'échelle de la production.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectSectorForContact('Biotechnologies & Thérapies Avancées')}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 hover:border-[#55AAA5] bg-white/5 hover:bg-[#55AAA5] text-white hover:text-[#06152D] text-sm font-medium transition-all duration-200 cursor-pointer shadow-md"
                >
                  <span>en savoir plus</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Composition Visuelle Épurée : Carte blanche principale + Bulle animée */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md pb-6 sm:pb-8">
                
                {/* Carte blanche principale avec padding bas dégagé */}
                <div className="w-full bg-white rounded-3xl p-6 sm:p-8 pb-16 sm:pb-20 shadow-2xl shadow-black/35 text-slate-900 border border-white/90">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Spécialités
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#55AAA5]/15 text-[#1e615d] text-[11px] font-bold tracking-wide">
                      BIOTECH & R&D
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                    Domaines d'intervention
                  </h4>

                  <div className="space-y-2.5">
                    {[
                      'Industrialisation & Procédés ATMP',
                      'Production & Scale-up (ARNm & Vecteurs)',
                      'Bioproduction & Amont/Aval (USP/DSP)',
                      'Validation, Qualité & Conformité (GMP)',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#55AAA5] shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bulle animée flottante sans masquer le texte */}
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="absolute bottom-0 right-1 sm:-right-3 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl shadow-black/25 text-slate-900 border border-slate-100 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#55AAA5]/15 text-[#1e615d] flex items-center justify-center shrink-0">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block whitespace-nowrap">
                        Cœur d'expertise
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block whitespace-nowrap">
                        Ingénieurs & Experts procédés
                      </span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* PÔLE 2 : Industrie Pharmaceutique (Visuel Gauche / Texte Droite) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Composition Visuelle Épurée : Carte blanche + Bulle animée */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-md pb-6 sm:pb-8">
                
                {/* Carte blanche principale avec padding bas dégagé */}
                <div className="w-full bg-white rounded-3xl p-6 sm:p-8 pb-16 sm:pb-20 shadow-2xl shadow-black/35 text-slate-900 border border-white/90">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Cycle du Médicament
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#55AAA5]/15 text-[#1e615d] text-[11px] font-bold tracking-wide">
                      PHARMA
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                    Phases & Fonctions Clés
                  </h4>

                  <div className="space-y-2.5">
                    {[
                      'Industrialisation & Transfert Industriel',
                      'Procédés de Fabrication & Scale-up',
                      'Validation, Qualification & Conformité',
                      'Amélioration Continue & Maintenance Industrielle',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#55AAA5] shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bulle animée flottante sans masquer le texte */}
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="absolute bottom-0 right-1 sm:-right-3 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl shadow-black/25 text-slate-900 border border-slate-100 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#55AAA5]/15 text-[#1e615d] flex items-center justify-center shrink-0">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block whitespace-nowrap">
                        Direction Médicale
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block whitespace-nowrap">
                        Ingénieurs Procédés & Validation
                      </span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Texte & CTA */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="w-13 h-13 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#55AAA5] shadow-lg shadow-black/20">
                <Pill className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Industrie Pharmaceutique & Production Industrielle
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                De la phase pilote jusqu'à la production industrielle à grande échelle, nous recrutons les ingénieurs procédés, validation, industrialisation et qualité au cœur des sites de production pharmaceutique.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectSectorForContact('Industrie Pharmaceutique & Production Industrielle')}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 hover:border-[#55AAA5] bg-white/5 hover:bg-[#55AAA5] text-white hover:text-[#06152D] text-sm font-medium transition-all duration-200 cursor-pointer shadow-md"
                >
                  <span>en savoir plus</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* PÔLE 3 : Dispositifs Médicaux & MedTech (Texte Gauche / Visuel Droite) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Texte & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-13 h-13 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#55AAA5] shadow-lg shadow-black/20">
                <Activity className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Dispositifs Médicaux & MedTech
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Implants chirurgicaux, instrumentation interventionnelle, robotique médicale et technologies de santé soumises aux exigences strictes du RDM 2017/745. Nous chassons les profils experts en assurance qualité ISO 13485 et affaires réglementaires critiques.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectSectorForContact('Dispositifs Médicaux & MedTech')}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 hover:border-[#55AAA5] bg-white/5 hover:bg-[#55AAA5] text-white hover:text-[#06152D] text-sm font-medium transition-all duration-200 cursor-pointer shadow-md"
                >
                  <span>en savoir plus</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Composition Visuelle Épurée : Carte blanche + Bulle animée */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md pb-6 sm:pb-8">
                
                {/* Carte blanche principale avec padding bas dégagé */}
                <div className="w-full bg-white rounded-3xl p-6 sm:p-8 pb-16 sm:pb-20 shadow-2xl shadow-black/35 text-slate-900 border border-white/90">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Qualité & Affaires Réglementaires
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#55AAA5]/15 text-[#1e615d] text-[11px] font-bold tracking-wide">
                      MEDTECH & DM
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                    Normes & Spécialités
                  </h4>

                  <div className="space-y-2.5">
                    {[
                      'Conformité RDM 2017/745 & Marquage CE',
                      "Maîtrise de l'Assurance Qualité ISO 13485",
                      'Audits, Validation & Gestion des Risques (ISO 14971)',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#55AAA5] shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bulle animée flottante sans masquer le texte */}
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="absolute bottom-0 right-1 sm:-right-3 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl shadow-black/25 text-slate-900 border border-slate-100 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#55AAA5]/15 text-[#1e615d] flex items-center justify-center shrink-0">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block whitespace-nowrap">
                        Conformité
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block whitespace-nowrap">
                        RDM 2017/745 & FDA
                      </span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* PÔLE 4 : Diagnostic In Vitro & e-Santé (Visuel Gauche / Texte Droite) */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Composition Visuelle Épurée : Carte blanche + Bulle animée */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-md pb-6 sm:pb-8">
                
                {/* Carte blanche principale avec padding bas dégagé */}
                <div className="w-full bg-white rounded-3xl p-6 sm:p-8 pb-16 sm:pb-20 shadow-2xl shadow-black/35 text-slate-900 border border-white/90">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Technologies Médicales
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#55AAA5]/15 text-[#1e615d] text-[11px] font-bold tracking-wide">
                      IVD & E-SANTÉ
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                    Périmètres Technologiques
                  </h4>

                  <div className="space-y-2.5">
                    {[
                      'Biologie Moléculaire, Automates & NGS',
                      'Conformité Réglementaire IVDR 2017/746',
                      'Logiciels Médicaux (SaMD) & Algorithmes IA',
                      'Données de Santé (HDS) & Cybersécurité',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#55AAA5] shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bulle animée flottante sans masquer le texte */}
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="absolute bottom-0 right-1 sm:-right-3 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl shadow-black/25 text-slate-900 border border-slate-100 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#55AAA5]/15 text-[#1e615d] flex items-center justify-center shrink-0">
                      <Network className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block whitespace-nowrap">
                        Double Compétence
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block whitespace-nowrap">
                        Clinique & Logiciel SaMD
                      </span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Texte & CTA */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="w-13 h-13 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#55AAA5] shadow-lg shadow-black/20">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Diagnostic In Vitro, Logiciels Médicaux & e-Santé
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Biologie moléculaire, automates de diagnostic, séquençage nouvelle génération (NGS) et solutions logicielles d'intelligence artificielle médicale (SaMD). Nous réunissons les profils rares à l'intersection de la rigueur clinique et de l'ingénierie logicielle.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectSectorForContact('Diagnostic In Vitro, Logiciels Médicaux & e-Santé')}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 hover:border-[#55AAA5] bg-white/5 hover:bg-[#55AAA5] text-white hover:text-[#06152D] text-sm font-medium transition-all duration-200 cursor-pointer shadow-md"
                >
                  <span>en savoir plus</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </FadeInSection>
  );
};
