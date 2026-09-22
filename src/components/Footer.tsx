import React, { useState } from 'react';
import { VitaliaLogo } from './VitaliaLogo';
import { Linkedin, Mail, Phone, MapPin, ShieldCheck, HeartHandshake, FileCheck, Palette, X } from 'lucide-react';

interface FooterProps {
  onOpenQuickApply: () => void;
  onOpenContact: (profileType?: 'entreprise' | 'candidat') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuickApply, onOpenContact }) => {
  const [showBrandCharterModal, setShowBrandCharterModal] = useState(false);

  return (
    <footer id="main-footer" className="bg-[#071C3C] text-slate-300 border-t border-[#0B2F63]">
      {/* Upper Footer: Main Navigation & Identity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Presentation (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <VitaliaLogo variant="full" theme="white" size="md" />
              <span className="text-xs font-semibold text-[#55AAA5] tracking-widest uppercase border-l border-slate-700 pl-3">
                LifeSciences
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Cabinet de conseil en recrutement par approche directe dédié exclusivement aux industries de santé : Industrie Pharmaceutique, Biotechnologies, MedTech et Diagnostic In Vitro.
            </p>

            {/* LinkedIn & Socials tactiles */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenQuickApply}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0077B5] hover:bg-[#005f93] active:bg-[#004b75] transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>Page LinkedIn & Candidatures</span>
              </button>

              <button
                onClick={() => setShowBrandCharterModal(true)}
                className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-slate-300 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer"
                title="Consulter la charte graphique officielle"
              >
                <Palette className="w-4 h-4 text-[#55AAA5]" />
                <span>Charte graphique</span>
              </button>
            </div>
          </div>

          {/* Col 2: Expertises (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Pôles d'expertise
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#expertises" className="hover:text-white transition-colors py-1 inline-block">Industrie Pharmaceutique</a></li>
              <li><a href="#expertises" className="hover:text-white transition-colors py-1 inline-block">Biotechnologies & ATMP</a></li>
              <li><a href="#expertises" className="hover:text-white transition-colors py-1 inline-block">Dispositifs Médicaux (MedTech)</a></li>
              <li><a href="#expertises" className="hover:text-white transition-colors py-1 inline-block">Diagnostic In Vitro & NGS</a></li>
              <li><a href="#expertises" className="hover:text-white transition-colors py-1 inline-block">Santé Digitale & IA Médicale</a></li>
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Accompagnement
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onOpenContact('entreprise', 'Executive Search & Direction')}
                  className="hover:text-white transition-colors text-left py-1 inline-block cursor-pointer"
                >
                  Executive Search & C-Level
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('entreprise', 'Experts R&D & Clinique')}
                  className="hover:text-white transition-colors text-left py-1 inline-block cursor-pointer"
                >
                  Experts R&D & Clinique
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('entreprise', 'Affaires Réglementaires & QA')}
                  className="hover:text-white transition-colors text-left py-1 inline-block cursor-pointer"
                >
                  Affaires Réglementaires & QA
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuickApply}
                  className="hover:text-white transition-colors text-left text-[#55AAA5] font-semibold py-1 inline-block cursor-pointer"
                >
                  Transmettre un profil
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Bureaux (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Bureaux & Contact
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#55AAA5] shrink-0" />
                <span>France • Suisse • Luxembourg • Belgique • Allemagne</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#55AAA5] shrink-0" />
                <a href="mailto:contact@vitalia-lifesciences.com" className="hover:text-white py-1 inline-block">
                  contact@vitalia-lifesciences.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#55AAA5] shrink-0" />
                <a href="tel:+33189456720" className="hover:text-white py-1 inline-block">
                  +33 (0)1 89 45 67 20
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Déontologie & Labels Banner */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#55AAA5] shrink-0" />
            <span>Secret professionnel & RGPD appliqué à la santé</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#55AAA5] shrink-0" />
            <span>Charte éthique et égalité professionnelle</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#55AAA5] shrink-0" />
            <span>Membre des réseaux professionnels LifeSciences</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vitalia LifeSciences. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-slate-200 py-1">Mentions légales</a>
            <a href="#" className="hover:text-slate-200 py-1">Politique de confidentialité</a>
            <a href="#" className="hover:text-slate-200 py-1">Gestion des cookies</a>
          </div>
        </div>
      </div>

      {/* Brand Charter Modal */}
      {showBrandCharterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-white text-slate-800 rounded-3xl max-w-lg w-full max-h-[92dvh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setShowBrandCharterModal(false)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fermer la charte"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <VitaliaLogo variant="symbol" size="md" />
              <div>
                <h3 className="text-lg font-bold text-[#0B2F63]">Charte Graphique Vitalia</h3>
                <p className="text-xs text-slate-500">Identité visuelle & spécifications techniques</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <p className="font-bold text-slate-700 mb-2">Palette officielle :</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-[#0B2F63] text-white">
                    <p className="font-bold">#0B2F63</p>
                    <p className="text-[10px] opacity-80">Bleu Nuit Profond (Principal)</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#55AAA5] text-white">
                    <p className="font-bold">#55AAA5</p>
                    <p className="text-[10px] opacity-80">Teal Végétal (Accentuation)</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F2F4F7] text-slate-800 border border-slate-200">
                    <p className="font-bold">#F2F4F7</p>
                    <p className="text-[10px] text-slate-500">Gris Perle (Fonds)</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F2F4F7] space-y-2">
                <p className="font-bold text-[#0B2F63]">Variantes du Logo :</p>
                <div className="flex items-center justify-around py-2 bg-white rounded-lg p-3">
                  <VitaliaLogo variant="full" size="sm" />
                  <VitaliaLogo variant="symbol" size="sm" />
                  <VitaliaLogo variant="circle" size="sm" />
                </div>
                <p className="text-[11px] text-slate-500">
                  Le logo typographique VITALIA intègre une base teal géométrique sous le premier 'A' et un sommet pur sans traverse pour le second 'A', symbolisant l'élévation et la rigueur scientifique.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowBrandCharterModal(false)}
              className="mt-6 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#0B2F63] hover:bg-[#18427F]"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
