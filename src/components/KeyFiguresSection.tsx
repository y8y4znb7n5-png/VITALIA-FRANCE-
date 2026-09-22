import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Users, Building2, Award, Clock } from 'lucide-react';

interface KeyStatItem {
  id: string;
  icon: React.ElementType;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

const STATS_DATA: KeyStatItem[] = [
  {
    id: 'stat-talents',
    icon: Users,
    value: 300,
    prefix: '+',
    label: 'Talents placés',
    sublabel: 'Profils experts, cadres & dirigeants en Life Sciences & Ingénierie',
  },
  {
    id: 'stat-entreprises',
    icon: Building2,
    value: 50,
    prefix: '+',
    label: 'Entreprises partenaires',
    sublabel: 'Startups biotech, medtech & grands laboratoires pharmaceutiques ou Startups, ETI & grands groupes',
  },
  {
    id: 'stat-satisfaction',
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Satisfaction Client',
    sublabel: 'Engagements tenus et garantie de recrutement',
  },
  {
    id: 'stat-delai',
    icon: Clock,
    value: 2,
    suffix: 'sem.',
    label: 'Délai de short-list',
    sublabel: 'Premiers profils qualifiés présentés',
  },
];

/**
 * Compteur numérique ultra-fluide et synchronisé propulsé par Motion :
 * - Animation directe du DOM textContent sans re-renders React intempestifs
 * - Police à espacement tabulaire (tabular-nums) pour éliminer tout tressautement
 * - Démarrage synchronisé avec l'apparition de chaque carte (delay synchronisé)
 * - Durée harmonisée (1.2s) avec courbe d'accélération naturelle ease-out
 */
const AnimatedNumber: React.FC<{
  value: number;
  duration?: number;
  delay?: number;
  minDigits?: number;
}> = ({ value, duration = 1.2, delay = 0, minDigits }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;
    const node = nodeRef.current;
    if (!node) return;

    let controls: { stop: () => void } | null = null;
    const timeoutId = setTimeout(() => {
      controls = animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart fluide
        onUpdate(latest) {
          node.textContent = Math.round(latest).toString();
        },
      });
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (controls) controls.stop();
    };
  }, [isInView, value, duration, delay]);

  return (
    <span
      ref={nodeRef}
      style={minDigits ? { minWidth: `${minDigits}ch` } : undefined}
      className="tabular-nums font-extrabold text-3xl sm:text-4xl text-white tracking-tight select-none inline-block text-left leading-none"
    >
      0
    </span>
  );
};

const StatCard: React.FC<{
  stat: KeyStatItem;
  delayIndex: number;
}> = ({ stat, delayIndex }) => {
  const IconComponent = stat.icon;
  const numDigits = stat.value.toString().length;

  return (
    <motion.div
      id={stat.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay: delayIndex * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#55AAA5]/40 transition-colors duration-300 flex flex-col h-full shadow-lg shadow-black/20"
    >
      {/* 1. Icône : position Y identique sur toutes les cartes */}
      <div className="mb-5">
        <div className="w-12 h-12 rounded-xl bg-[#55AAA5]/15 border border-[#55AAA5]/30 flex items-center justify-center text-[#55AAA5] group-hover:scale-105 group-hover:bg-[#55AAA5]/25 transition-transform duration-200">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* 2. Ligne du chiffre : hauteur fixe et baseline parfaitement alignée sur l'axe horizontal */}
      <div className="h-10 sm:h-12 flex items-baseline gap-1.5">
        {stat.prefix && (
          <span className="text-2xl sm:text-3xl font-bold text-[#55AAA5] select-none leading-none">
            {stat.prefix}
          </span>
        )}
        
        <AnimatedNumber
          value={stat.value}
          duration={1.2}
          delay={delayIndex * 0.08 + 0.1}
          minDigits={numDigits}
        />
        
        {stat.suffix && (
          <span className="text-2xl sm:text-3xl font-bold text-[#55AAA5] select-none leading-none">
            {stat.suffix}
          </span>
        )}
      </div>
      
      {/* 3. Titre : aligné à la même hauteur sur toutes les cartes */}
      <h3 className="text-base sm:text-lg font-semibold text-white mt-3 leading-snug">
        {stat.label}
      </h3>
      
      {/* 4. Sous-titre descriptif : s'étend naturellement vers le bas sans déplacer les chiffres */}
      <p className="text-sm text-slate-300 font-normal mt-1.5 leading-relaxed">
        {stat.sublabel}
      </p>
    </motion.div>
  );
};

export const KeyFiguresSection: React.FC = () => {
  return (
    <section
      id="chiffres-cles"
      className="relative py-14 sm:py-18 bg-[#06152D] text-white border-y border-white/10 overflow-hidden"
    >
      {/* Halo subtil en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-[#55AAA5]/5 blur-[90px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête sobre */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            La confiance de l'écosystème <span className="text-[#55AAA5]">Life Sciences</span>
          </h2>
        </motion.div>

        {/* Grille des 4 chiffres clés animés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS_DATA.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              delayIndex={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
