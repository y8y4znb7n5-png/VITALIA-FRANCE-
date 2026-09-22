import React from 'react';
import { Target, Shield, Network } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-5 h-5 text-[#55AAA5]" />,
      title: 'Approche directe sur-mesure',
      description:
        "Nous ciblons les meilleurs profils d'ingénieurs, experts techniques et dirigeants, qu'ils soient en poste ou à l'écoute discrète d'opportunités stratégiques.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#55AAA5]" />,
      title: 'Confidentialité & Déontologie',
      description:
        'La protection de votre image de marque et des parcours des candidats constitue la pierre angulaire de toutes nos démarches.',
    },
    {
      icon: <Network className="w-5 h-5 text-[#55AAA5]" />,
      title: 'Réseau étendu',
      description:
        "Grâce à notre présence dans les secteurs de la santé et de l'industrie, nous disposons d'un vivier d'ingénieurs et d'experts qualifiés.",
    },
  ];

  return (
    <FadeInSection id="cabinet" className="py-20 lg:py-28 bg-[#071C3C] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#55AAA5]">
            Qui sommes-nous ?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white tracking-tight">
            Une relation de confiance au service des innovations en santé.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Vitalia est née d'une conviction : dans les sciences de la vie, le succès d'une molécule, 
            d'une thérapie ou d'un dispositif médical repose avant tout sur les femmes et les hommes qui les portent. 
            Nous bâtissons des ponts solides et pérennes entre talents rares et décideurs visionnaires.
          </p>
        </div>

        {/* 3 piliers simples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#55AAA5]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#55AAA5]/15 flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </FadeInSection>
  );
};
