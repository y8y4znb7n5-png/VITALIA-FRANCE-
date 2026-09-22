import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Link2, 
  Play, 
  Info, 
  Check, 
  X,
  MapPin
} from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { EUROPE_PATHS, EuropeCountryPath } from '../data/europeMapPaths';

export interface CountryData {
  id: string;
  name: string;
  labelEn: string;
  flag: string;
  image: string;
  city: string;
  description: string;
  details: string;
  stats: string;
}

const COUNTRIES: CountryData[] = [
  {
    id: 'france',
    name: 'France',
    labelEn: 'France',
    flag: '🇫🇷',
    city: 'Paris & Lyon',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80',
    description:
      'Siège historique et présence renforcée auprès des grands laboratoires pharmaceutiques, biotechs et fabricants de dispositifs médicaux. Nos équipes interviennent sur l’ensemble du territoire français, avec des ancrages stratégiques à Paris et Lyon Gerland.',
    details: 'Plus de 180 experts et cadres dirigeants placés en R&D, Affaires Réglementaires et Ingénierie industrielle.',
    stats: 'Bureaux à Paris (8e) & Lyon Biopôle',
  },
  {
    id: 'suisse',
    name: 'Suisse',
    labelEn: 'Switzerland',
    flag: '🇨🇭',
    city: 'Bâle & Genève',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
    description:
      'Au cœur du premier pôle pharmaceutique et biotechnologique mondial. Nous accompagnons les multinationales de Bâle et les biotechs innovantes de la Health Valley lémanique dans le recrutement de profils C-Level, PhD et directeurs scientifiques.',
    details: 'Spécialisation dans les thérapies innovantes, la réglementation Swissmedic et la mobilité transfrontalière.',
    stats: 'Présence Bâle (EuroAirport) & Arc lémanique',
  },
  {
    id: 'luxembourg',
    name: 'Luxembourg',
    labelEn: 'Luxembourg',
    flag: '🇱🇺',
    city: 'Luxembourg-Ville',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Luxembourg_BW_2016-09-15_12-44-12.jpg/1280px-Luxembourg_BW_2016-09-15_12-44-12.jpg',
    description:
      'Hub européen dynamique tourné vers la médecine translationnelle, la data de santé et le diagnostic de précision. Nous y connectons des experts hautement qualifiés et multilingues aux projets de recherche biomédicale les plus pointus.',
    details: 'Accompagnement de projets européens innovants et de structures de biotechnologies en forte expansion.',
    stats: 'Pôle HealthTech & Recherche translationnelle',
  },
  {
    id: 'belgique',
    name: 'Belgique',
    labelEn: 'Belgium',
    flag: '🇧🇪',
    city: 'Bruxelles & Gosselies',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Grand_Place_Bruselas_2.jpg/1280px-Grand_Place_Bruselas_2.jpg',
    description:
      'Centre névralgique européen du biomanufacturing, des vaccins et des thérapies cellulaires. Nos consultants recrutent des ingénieurs de production, des responsables assurance qualité (QA) et des spécialistes validation en environnement cGMP.',
    details: 'Forte présence autour du Biopark de Charleroi, de Bruxelles et du pôle biotechnologique flamand.',
    stats: 'Biopark Charleroi & Hub Pharma Bruxelles',
  },
  {
    id: 'allemagne',
    name: 'Allemagne',
    labelEn: 'Germany',
    flag: '🇩🇪',
    city: 'Francfort & Munich',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
    description:
      'Premier marché de santé en Europe, reconnu pour son leadership en ingénierie médicale (MedTech), chimie fine et instrumentation de pointe. Nous identifions des ingénieurs R&D et des experts techniques de haut niveau.',
    details: 'Missions sur les bassins de Munich (Martinsried), Francfort et la MedTech Valley du Bade-Wurtemberg.',
    stats: 'Clusters Munich Martinsried & Francfort Rhin-Main',
  },
];

interface EuropePresenceSectionProps {
  onOpenContact: (profileType?: 'entreprise' | 'candidat', subject?: string) => void;
  onOpenQuickApply: (jobTitle?: string, sector?: string) => void;
}

export const EuropePresenceSection: React.FC<EuropePresenceSectionProps> = ({
  onOpenContact,
  onOpenQuickApply,
}) => {
  const [selectedId, setSelectedId] = useState<string>('france');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  // Map internal id to data
  const idMap: Record<string, string> = {
    france: 'france',
    suisse: 'suisse',
    switzerland: 'suisse',
    luxembourg: 'luxembourg',
    belgique: 'belgique',
    belgium: 'belgique',
    allemagne: 'allemagne',
    germany: 'allemagne',
  };

  const activeCountry = COUNTRIES.find((c) => c.id === selectedId) || COUNTRIES[0];

  // Marqueurs avec libellés fidèles à la capture d'écran, espacés pour une visibilité totale
  const markers = [
    {
      countryId: 'belgique',
      label: 'Belgium',
      labelX: 350,
      labelY: 190,
      lineX1: 350,
      lineY1: 202,
      lineX2: 352,
      lineY2: 296,
      vX: 352,
      vY: 308,
    },
    {
      countryId: 'luxembourg',
      label: 'Luxembourg',
      labelX: 415,
      labelY: 260,
      lineX1: 415,
      lineY1: 272,
      lineX2: 388,
      lineY2: 320,
      vX: 384,
      vY: 331,
    },
    {
      countryId: 'allemagne',
      label: 'Germany',
      labelX: 520,
      labelY: 215,
      lineX1: 520,
      lineY1: 226,
      lineX2: 468,
      lineY2: 284,
      vX: 462,
      vY: 294,
    },
    {
      countryId: 'france',
      label: 'France',
      labelX: 280,
      labelY: 365,
      lineX1: 280,
      lineY1: 376,
      lineX2: 312,
      lineY2: 404,
      vX: 318,
      vY: 414,
    },
    {
      countryId: 'suisse',
      label: 'Switzerland',
      labelX: 495,
      labelY: 370,
      lineX1: 495,
      lineY1: 382,
      lineX2: 432,
      lineY2: 408,
      vX: 422,
      vY: 414,
    },
  ];

  return (
    <FadeInSection
      id="europe"
      className="py-16 sm:py-24 bg-[#0A1128] text-white border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête : Rayonnement européen de nos expertises */}
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#55AAA5]">
            Rayonnement Européen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase mt-2">
            Nos expertises à l'échelle européenne
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium">
            Nos implantations et hubs d'intervention : <strong className="text-[#55AAA5]">France, Suisse, Luxembourg, Belgique et Allemagne</strong>
          </p>
        </div>

        {/* Grille 2 colonnes fidèle à la capture : Image & description à gauche, Carte sombre avec icônes "V" à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Colonne Gauche : Fiche pays avec Photo + Texte + Boutons (Lien, Vidéo/Échanger, Info) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {/* 1. Image rectangulaire représentative */}
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img
                    src={activeCountry.image}
                    alt={`Présence ${activeCountry.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{activeCountry.flag}</span>
                      <span className="text-xl font-bold tracking-tight">{activeCountry.name}</span>
                    </div>
                    <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg font-medium border border-white/20">
                      {activeCountry.city}
                    </span>
                  </div>
                </div>

                {/* 2. Texte descriptif clair */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeCountry.description}
                </p>

                {/* Badge d'implantation locale */}
                <div className="flex items-center gap-2 text-xs text-[#55AAA5] font-semibold bg-[#55AAA5]/10 border border-[#55AAA5]/20 px-3 py-1.5 rounded-lg w-fit">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{activeCountry.stats}</span>
                </div>

                {/* 3. Les 3 boutons circulaires (Lien, Vidéo/Échanger, Info) exactement comme dans la capture */}
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                  {/* Bouton 1 : LIEN */}
                  <button
                    id="map-btn-link"
                    onClick={() => onOpenQuickApply(undefined, activeCountry.name)}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#55AAA5] text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#459691] transition-all">
                      <Link2 className="w-4 h-4" />
                    </span>
                    <span className="uppercase tracking-wider text-xs">Lien</span>
                  </button>

                  {/* Bouton 2 : VIDÉO / ÉCHANGER */}
                  <button
                    id="map-btn-video"
                    onClick={() => onOpenContact('entreprise', `Échange projet - ${activeCountry.name}`)}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#18427F] text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#20529C] transition-all">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </span>
                    <span className="uppercase tracking-wider text-xs">Échanger</span>
                  </button>

                  {/* Bouton 3 : INFO */}
                  <button
                    id="map-btn-info"
                    onClick={() => setShowInfoModal(true)}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#55AAA5] text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#459691] transition-all">
                      <Info className="w-4 h-4" />
                    </span>
                    <span className="uppercase tracking-wider text-xs">Info</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Colonne Droite : Carte exacte de l'Europe sombre avec traits fins + Icône "V" sur chaque pays */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Raccourcis rapides sous forme de pills tactiles */}
            <div className="w-full flex items-center justify-center gap-1.5 sm:gap-2 mb-4 flex-wrap">
              {COUNTRIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
                    selectedId === c.id
                      ? 'bg-[#55AAA5] text-[#0A1128] shadow-md shadow-[#55AAA5]/30 scale-102'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>

            {/* Carte SVG avec les vraies frontières géographiques réelles (Natural Earth 50m) */}
            <div className="relative w-full aspect-[1.15/1] max-h-[580px] bg-[#0E152B] rounded-3xl p-3 sm:p-5 border border-white/10 shadow-2xl flex items-center justify-center select-none overflow-hidden">
              <svg
                viewBox="120 70 560 510"
                className="w-full h-full"
                style={{ touchAction: 'manipulation' }}
              >
                <defs>
                  {/* Glow effect pour l'icône V active */}
                  <filter id="v-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* 1. Tracé de tous les pays d'Europe (formes géographiques réelles) */}
                <g className="transition-all">
                  {EUROPE_PATHS.map((country: EuropeCountryPath) => {
                    const normalizedId = idMap[country.id] || country.id;
                    const isTarget = country.isTarget;
                    const isSelected = selectedId === normalizedId;

                    return (
                      <path
                        key={country.id}
                        id={`map-country-${country.id}`}
                        d={country.path}
                        onClick={() => {
                          if (isTarget) {
                            setSelectedId(normalizedId);
                          }
                        }}
                        className={`transition-colors duration-250 ${
                          isTarget
                            ? 'cursor-pointer'
                            : 'pointer-events-none'
                        } ${
                          isSelected
                            ? 'fill-[#192A4E] stroke-[#55AAA5] stroke-[2]'
                            : isTarget
                            ? 'fill-[#131B36] stroke-[#27385E] stroke-[1] hover:fill-[#1A264A] hover:stroke-[#55AAA5]'
                            : 'fill-[#0E152B] stroke-[#1D2B4A] stroke-[0.85]'
                        }`}
                      >
                        <title>{country.name}</title>
                      </path>
                    );
                  })}
                </g>

                {/* Repères avec Libellé blanc + Ligne verticale + Icône "V" sur chaque pays */}
                {markers.map((marker) => {
                  const isSelected = selectedId === marker.countryId;

                  return (
                    <g
                      key={marker.countryId}
                      className="cursor-pointer group"
                      onClick={() => setSelectedId(marker.countryId)}
                    >
                      {/* Libellé du pays en blanc et gras avec contour anti-collision */}
                      <text
                        x={marker.labelX}
                        y={marker.labelY}
                        fill="#FFFFFF"
                        stroke="#0E152B"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        paintOrder="stroke"
                        fontSize={isSelected ? "19" : "17"}
                        fontWeight="800"
                        letterSpacing="0.02em"
                        fontFamily="system-ui, -apple-system, sans-serif"
                        textAnchor="middle"
                        className="transition-all select-none"
                      >
                        {marker.label}
                      </text>

                      {/* Ligne verticale de repère descendant jusqu'à l'icône V sur le pays */}
                      <line
                        x1={marker.lineX1}
                        y1={marker.lineY1}
                        x2={marker.lineX2}
                        y2={marker.lineY2}
                        stroke={isSelected ? "#55AAA5" : "#4A608F"}
                        strokeWidth={isSelected ? "2.5" : "1.5"}
                        className="transition-all"
                      />

                      {/* ICÔNE "V" VITALIA POSITIONNÉE EXACTEMENT SUR LE PAYS */}
                      <g
                        transform={`translate(${marker.vX}, ${marker.vY})`}
                        filter={isSelected ? "url(#v-glow-filter)" : undefined}
                        className="transition-transform duration-200 group-hover:scale-120"
                      >
                        {/* Halo pulsant si sélectionné */}
                        {isSelected && (
                          <circle
                            cx="0"
                            cy="0"
                            r="19"
                            className="fill-[#55AAA5]/25 animate-pulse"
                          />
                        )}

                        {/* Pastille circulaire de l'icône V */}
                        <circle
                          cx="0"
                          cy="0"
                          r={isSelected ? "14" : "12"}
                          fill={isSelected ? "#55AAA5" : "#0B2F63"}
                          stroke="#FFFFFF"
                          strokeWidth={isSelected ? "2.5" : "1.8"}
                          className="transition-all"
                        />

                        {/* Lettre "V" géométrique de Vitalia */}
                        <path
                          d="M-5,-5 L0,5 L5,-5 L2.5,-5 L0,0.8 L-2.5,-5 Z"
                          fill="#FFFFFF"
                          className="transition-all"
                        />
                        {/* Accent géométrique caractéristique Vitalia */}
                        <rect
                          x="-1.8"
                          y="1.2"
                          width="3.6"
                          height="1.2"
                          rx="0.4"
                          fill={isSelected ? "#0B2F63" : "#55AAA5"}
                        />
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            <p className="text-xs text-slate-400 mt-3 italic text-center">
              Cliquez sur une icône « V », un pays ou son nom pour actualiser la fiche
            </p>
          </div>

        </div>

      </div>

      {/* Modal d'information ("Info") */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#0B1E3F] text-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-white/15 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{activeCountry.flag}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{activeCountry.name}</h3>
                <p className="text-xs text-[#55AAA5] font-semibold">Bureaux & Hubs : {activeCountry.city}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {activeCountry.details}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#55AAA5] shrink-0" />
                <span>Consultants bilingues spécialisés Life Sciences & Ingénierie</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#55AAA5] shrink-0" />
                <span>Approche directe et chasse de tête locale</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#55AAA5] shrink-0" />
                <span>Maîtrise des spécificités réglementaires du pays</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowInfoModal(false);
                  onOpenContact('entreprise', `Question implantation - ${activeCountry.name}`);
                }}
                className="flex-1 py-3 rounded-xl text-xs font-bold text-[#0A1128] bg-[#55AAA5] hover:bg-[#6ec2bc] transition-all cursor-pointer text-center"
              >
                Contacter ce bureau
              </button>
              <button
                onClick={() => setShowInfoModal(false)}
                className="px-4 py-3 rounded-xl text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/15 transition-all cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </FadeInSection>
  );
};
