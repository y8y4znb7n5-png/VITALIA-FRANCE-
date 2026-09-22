import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote, Star } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'entreprise' | 'candidat'>('all');

  const filtered =
    filter === 'all'
      ? TESTIMONIALS.slice(0, 3)
      : TESTIMONIALS.filter((t) => t.type === filter).slice(0, 3);

  return (
    <FadeInSection id="temoignages" className="py-20 lg:py-28 bg-[#06152D] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#55AAA5]">
              Témoignages & Références
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white tracking-tight">
              La confiance de nos partenaires et talents.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Retours d'expérience de nos clients industriels et d'ingénieurs accompagnés par notre cabinet.
            </p>
          </div>

          {/* Filtres simples tactiles (min 44px) */}
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#55AAA5] text-[#071C3C] font-bold shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('entreprise')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'entreprise' ? 'bg-[#55AAA5] text-[#071C3C] font-bold shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Entreprises
            </button>
            <button
              onClick={() => setFilter('candidat')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'candidat' ? 'bg-[#55AAA5] text-[#071C3C] font-bold shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Candidats
            </button>
          </div>
        </div>

        {/* 3 Cartes de témoignages épurées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#55AAA5]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-slate-300">
                    {item.type === 'entreprise' ? 'Entreprise' : 'Candidat'}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#55AAA5]/40 mb-3" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-sm font-bold text-white">{item.author}</p>
                <p className="text-xs text-[#55AAA5] font-medium">{item.role}</p>
                <p className="text-xs text-slate-400">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </FadeInSection>
  );
};
