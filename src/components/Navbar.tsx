import React, { useState, useEffect } from 'react';
import { VitaliaLogo } from './VitaliaLogo';
import { Menu, X, ChevronsRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenQuickApply: (jobTitle?: string) => void;
  onOpenContact: (profileType?: 'entreprise' | 'candidat') => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuickApply,
  onOpenContact,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'FR' | 'EN'>('FR');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Candidats', href: '#candidats' },
    { label: 'Entreprises', href: '#entreprises' },
    { label: 'Nos expertises', href: '#expertises' },
    { label: 'Qui sommes-nous ?', href: '#cabinet' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071C3C]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3.5 border-b border-white/10'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Vitalia */}
        <a
          id="nav-logo-link"
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#55AAA5] rounded-lg"
        >
          <VitaliaLogo variant="full" theme="white" size="md" />
        </a>

        {/* Liens de navigation centraux épurés */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#55AAA5] font-semibold'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Bouton d'action + Sélecteur de langue à sa droite */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-btn-contact-action"
            onClick={() => onOpenContact('entreprise', 'Prise de contact générale')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#071C3C] bg-gradient-to-r from-[#55AAA5] to-[#74C7C2] hover:brightness-105 active:scale-95 rounded-xl transition-all shadow-md shadow-[#55AAA5]/20 cursor-pointer"
          >
            <span>Nous contacter</span>
            <ChevronsRight className="w-4 h-4 text-[#071C3C]" />
          </button>

          {/* Sélecteur de langue à droite du bouton "Nous contacter" */}
          <button
            id="nav-lang-selector-btn"
            onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
            aria-label="Changer de langue"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-colors"
          >
            <span>{lang === 'FR' ? '🇫🇷 FR' : '🇬🇧 EN'}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>

        {/* Menu burger mobile tactile (min 44x44px) */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu déroulant mobile optimisé tactile */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-[#07152B]/98 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="space-y-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[48px] px-3.5 text-base font-medium text-slate-100 hover:text-[#55AAA5] hover:bg-white/5 active:bg-white/10 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-3">
            <button
              id="mobile-btn-contact-action"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('entreprise', 'Prise de contact générale');
              }}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-[#071C3C] bg-gradient-to-r from-[#55AAA5] to-[#74C7C2] active:brightness-95 transition-all shadow-md shadow-[#55AAA5]/20 cursor-pointer"
            >
              <span>Nous contacter</span>
              <ChevronsRight className="w-4 h-4 text-[#071C3C]" />
            </button>

            {/* Sélecteur de langue en mobile */}
            <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400">
              <span>Langue :</span>
              <button
                type="button"
                onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
                className="min-h-[44px] inline-flex items-center gap-2 px-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              >
                <span>{lang === 'FR' ? '🇫🇷 Français' : '🇬🇧 English'}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
