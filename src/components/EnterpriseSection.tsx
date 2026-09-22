import React from 'react';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Users } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface EnterpriseSectionProps {
  onOpenContact: (profileType?: 'entreprise' | 'candidat', subject?: string) => void;
}

export const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      number: '01',
      title: 'Cadrage technique & culturel',
      description:
        'Nous analysons vos objectifs de développement, vos contraintes de production ou de procédés, et le profil technique exact recherché.',
    },
    {
      number: '02',
      title: 'Approche directe confidentielle',
      description:
        'Chasse ciblée au sein de notre réseau et cartographie exhaustive des experts en poste, menée avec une discrétion absolue.',
    },
    {
      number: '03',
      title: 'Sélection & Garantie d’intégration',
      description:
        'Présentation d’une short-list qualifiée sous 14 jours et engagement contractuel de remplacement en cas de départ prématuré.',
    },
  ];

  const roles = [
    'Ingénieur Validation',
    'Ingénieur Procédés',
    'Ingénieur R&D',
    'Responsable Production',
    'Ingénieur Qualité / Amélioration Continue',
    'Ingénieur Industrialisation',
  ];

  return (
    <FadeInSection id="entreprises" className="py-20 lg:py-28 bg-[#071C3C] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section épuré */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#55AAA5]">
              Espace Entreprises
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white tracking-tight">
              Recruter les ingénieurs et experts techniques qui propulsent vos projets.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Chaque recrutement en Life Sciences est critique. Nous vous apportons la méthode, 
              le réseau et la rigueur indispensables pour attirer des profils rares et engagés.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('entreprise', 'Confier un nouveau recrutement')}
            className="w-full sm:w-auto min-h-[48px] justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#071C3C] bg-gradient-to-r from-[#55AAA5] to-[#74C7C2] hover:brightness-105 active:scale-95 transition-all shadow-md shadow-[#55AAA5]/20 cursor-pointer shrink-0"
          >
            <span>Confier un recrutement</span>
            <ArrowRight className="w-4 h-4 text-[#071C3C]" />
          </button>
        </div>

        {/* 3 étapes claires de la méthode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 relative"
            >
              <span className="text-2xl font-black text-[#55AAA5]/60 mb-2 block font-mono">
                {step.number}
              </span>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bloc récapitulatif des profils recherchés & engagements */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-base font-bold text-white">Exemples de profils chassés</h4>
              <p className="text-xs text-slate-300">
                Nous intervenons sur les fonctions d'ingénierie, de production, de procédés et d'encadrement technique.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#55AAA5]" />
                  <span>Short-list qualifiée en 2 semaines</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#55AAA5]" />
                  <span>Garantie de remplacement contractuelle</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {roles.map((role, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#55AAA5] shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </FadeInSection>
  );
};
