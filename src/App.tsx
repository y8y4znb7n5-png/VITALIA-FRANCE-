import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyFiguresSection } from './components/KeyFiguresSection';
import { AboutSection } from './components/AboutSection';
import { EnterpriseSection } from './components/EnterpriseSection';
import { CandidateSection } from './components/CandidateSection';
import { ExpertiseSectors } from './components/ExpertiseSectors';
import { EuropePresenceSection } from './components/EuropePresenceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LinkedInQuickApplyModal } from './components/LinkedInQuickApplyModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [quickApplyOpen, setQuickApplyOpen] = useState<boolean>(false);
  const [quickApplyTitle, setQuickApplyTitle] = useState<string>('');
  const [quickApplySector, setQuickApplySector] = useState<string>('');
  const [contactProfileType, setContactProfileType] = useState<'entreprise' | 'candidat'>('entreprise');
  const [contactSubject, setContactSubject] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['candidats', 'entreprises', 'expertises', 'europe', 'cabinet', 'temoignages', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuickApply = (jobTitle?: string, sector?: string) => {
    setQuickApplyTitle(jobTitle || 'Transmission de profil confidentiel');
    setQuickApplySector(sector || '');
    setQuickApplyOpen(true);
  };

  const handleOpenContact = (profileType: 'entreprise' | 'candidat' = 'entreprise', subject?: string) => {
    setContactProfileType(profileType);
    if (subject) {
      setContactSubject(subject);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSectorForContact = (sectorTitle: string) => {
    setContactProfileType('entreprise');
    setContactSubject(`Échange sur le pôle : ${sectorTitle}`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071C3C] text-slate-100 font-sans antialiased selection:bg-[#55AAA5] selection:text-[#071C3C]">
      {/* Barre de navigation épurée */}
      <Navbar
        activeSection={activeSection}
        onOpenQuickApply={() => handleOpenQuickApply()}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        {/* 1. Hero : Accroche claire et double porte d'entrée immédiate (Candidats / Entreprises) */}
        <Hero
          onOpenQuickApply={() => handleOpenQuickApply()}
          onOpenContact={handleOpenContact}
        />

        {/* Chiffres clés de réassurance & décompte dynamique au scroll */}
        <KeyFiguresSection />

        {/* 2. Espace Candidats : Confidentialité & accompagnement de carrière */}
        <CandidateSection
          onOpenQuickApply={handleOpenQuickApply}
          onOpenContact={handleOpenContact}
        />

        {/* 3. Espace Entreprises : Méthode d'approche directe & profils clés */}
        <EnterpriseSection onOpenContact={handleOpenContact} />

        {/* 4. Nos Domaines d'Expertise & Rayonnement Européen */}
        <ExpertiseSectors
          onSelectSectorForContact={handleSelectSectorForContact}
          onOpenQuickApply={(sectorTitle) => handleOpenQuickApply(undefined, sectorTitle)}
        />

        {/* Rayonnement Européen de nos expertises : Carte interactive (France, Suisse, Luxembourg, Belgique, Allemagne) */}
        <EuropePresenceSection
          onOpenContact={handleOpenContact}
          onOpenQuickApply={handleOpenQuickApply}
        />

        {/* 5. Qui sommes-nous ? : Raison d'être & valeurs fondamentales */}
        <AboutSection />

        {/* 7. Témoignages & Références : Confiance et crédibilité */}
        <TestimonialsSection />

        {/* 7. Contact direct et simplifié */}
        <ContactSection
          initialProfileType={contactProfileType}
          initialSubject={contactSubject}
        />
      </main>

      {/* Footer sobre et institutionnel */}
      <Footer
        onOpenQuickApply={() => handleOpenQuickApply()}
        onOpenContact={handleOpenContact}
      />

      {/* Modal épurée de transmission de profil candidat (avec option LinkedIn) */}
      <LinkedInQuickApplyModal
        isOpen={quickApplyOpen}
        onClose={() => setQuickApplyOpen(false)}
        preselectedJobTitle={quickApplyTitle}
        preselectedSector={quickApplySector}
      />
    </div>
  );
}
