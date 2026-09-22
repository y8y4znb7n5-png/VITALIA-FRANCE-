import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Sparkles, UserCheck, Linkedin } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface CandidateSectionProps {
  onOpenQuickApply: (jobTitle?: string) => void;
  onOpenContact: (profileType?: 'entreprise' | 'candidat') => void;
}

export const CandidateSection: React.FC<CandidateSectionProps> = ({
  onOpenQuickApply,
  onOpenContact,
}) => {
  const commitments = [
    {
      icon: <Lock className="w-5 h-5 text-[#55AAA5]" />,
      title: 'Confidentialité totale & respect',
      description:
        'Votre identité et votre CV ne sont jamais transmis sans votre accord explicite préalable. Vous gardez la maîtrise totale de vos démarches.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#55AAA5]" />,
      title: 'Accès à des opportunités ciblées',
      description:
        "En plus de nos offres diffusées, nous vous positionnons directement sur des projets et des postes ouverts par nos entreprises partenaires en recherche active d'ingénieurs.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#55AAA5]" />,
      title: 'Des interlocuteurs experts & techniques',
      description:
        'Vous échangez avec des consultants qui maîtrisent vos environnements industriels, vos contraintes techniques et vos enjeux de production.',
    },
  ];

  return (
    <FadeInSection id="candidats" className="py-20 lg:py-28 bg-[#06152D] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#55AAA5]">
              Espace Candidats
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white tracking-tight">
              Rejoignez notre réseau d'ingénieurs et décideurs en santé & industrie.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Que vous soyez en écoute active ou simplement attentif aux opportunités marquantes du secteur, 
              nous accompagnons votre trajectoire professionnelle avec rigueur et discrétion.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenQuickApply('Candidature spontanée confidentielle')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#55AAA5]/50 active:scale-95 transition-all cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-[#55AAA5]" />
              <span>Transmettre mon profil</span>
            </button>
          </div>
        </div>

        {/* 3 Engagements clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((c, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#55AAA5]/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#55AAA5]/15 flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        {/* Bannière d'appel à l'échange */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-200 text-center sm:text-left">
            <ShieldCheck className="w-5 h-5 text-[#55AAA5] shrink-0 hidden sm:block" />
            <span>Vous souhaitez un avis confidentiel sur votre marché ou votre positionnement salarial ?</span>
          </div>
          <button
            onClick={() => onOpenContact('candidat', 'Échange confidentiel de carrière')}
            className="w-full sm:w-auto min-h-[44px] justify-center px-4 py-2.5 rounded-xl bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 text-xs sm:text-sm font-semibold text-[#55AAA5] hover:text-[#74C7C2] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <span>Prendre contact avec un consultant</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </FadeInSection>
  );
};
