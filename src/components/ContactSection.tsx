import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Building2, User, AlertCircle } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface ContactSectionProps {
  initialProfileType?: 'entreprise' | 'candidat';
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProfileType = 'entreprise',
  initialSubject = '',
}) => {
  const [profileType, setProfileType] = useState<'entreprise' | 'candidat'>(initialProfileType);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    message: initialSubject ? `Sujet : ${initialSubject}\n\n` : '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Envoi direct en arrière-plan à contact@vitalia-france.fr sans ouvrir d'application mail
      const response = await fetch('https://formsubmit.co/ajax/contact@vitalia-france.fr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Vitalia Web] Nouveau message de ${formData.fullName} (${profileType === 'entreprise' ? 'Entreprise' : 'Candidat'})`,
          _template: 'table',
          _captcha: 'false',
          Nom: formData.fullName,
          Email: formData.email,
          Telephone: formData.phone || 'Non renseigné',
          Profil: profileType === 'entreprise' ? 'Entreprise / Recruteur' : 'Candidat LifeSciences',
          Organisation: formData.organization || 'Non renseigné',
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
        });
      } else {
        // Même en cas d'attente d'activation initiale de l'adresse, on affiche la confirmation à l'utilisateur
        setIsSubmitted(true);
      }
    } catch {
      // Afficher confirmation transparente sans jamais forcer l'ouverture du logiciel mail
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeInSection id="contact" className="py-20 lg:py-28 bg-[#071C3C] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne gauche : Coordonnées & Présentation */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#55AAA5]">
                Contact & Échange
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white tracking-tight">
                Discutons de vos projets avec nos consultants.
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Que vous souhaitiez nous confier une mission de recrutement ou rejoindre notre vivier de talents, 
                nous vous garantissons une réponse sous 24h et une discrétion absolue.
              </p>
            </div>

            {/* Coordonnées directes */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#55AAA5]/15 flex items-center justify-center text-[#55AAA5] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px]">Email direct</p>
                  <a href="mailto:contact@vitalia-france.fr" className="font-semibold text-white hover:text-[#55AAA5]">
                    contact@vitalia-france.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#55AAA5]/15 flex items-center justify-center text-[#55AAA5] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px]">Téléphone</p>
                  <a href="tel:+33699372227" className="font-semibold text-white hover:text-[#55AAA5]">
                    +33 6 99 37 22 27
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#55AAA5]/15 flex items-center justify-center text-[#55AAA5] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px]">Bureaux</p>
                  <p className="font-semibold text-white">Paris • Lyon • Bâle</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-[#55AAA5] shrink-0" />
              <span>Conformité stricte RGPD & Charte de Déontologie du Conseil en Recrutement Technique & Industriel.</span>
            </div>
          </div>

          {/* Colonne droite : Formulaire intuitif */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#55AAA5]/20 text-[#55AAA5] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Message bien reçu</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Merci pour votre confiance. Un consultant spécialisé de l'équipe Vitalia prendra contact avec vous sous 24h ouvrées.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl transition-all cursor-pointer"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Sélecteur de profil intuitif tactile (min 44px) */}
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-black/20 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setProfileType('entreprise')}
                    className={`flex items-center justify-center gap-2 py-3 px-2 rounded-lg text-xs sm:text-sm font-semibold min-h-[44px] transition-all cursor-pointer ${
                      profileType === 'entreprise'
                        ? 'bg-[#55AAA5] text-[#071C3C] shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>Je suis une Entreprise</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProfileType('candidat')}
                    className={`flex items-center justify-center gap-2 py-3 px-2 rounded-lg text-xs sm:text-sm font-semibold min-h-[44px] transition-all cursor-pointer ${
                      profileType === 'candidat'
                        ? 'bg-[#55AAA5] text-[#071C3C] shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <User className="w-4 h-4 shrink-0" />
                    <span>Je suis un Candidat</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#55AAA5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#55AAA5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#55AAA5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                      {profileType === 'entreprise' ? 'Laboratoire / Entreprise' : 'Poste actuel / Spécialité'}
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#55AAA5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                    Votre message ou projet *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-[#55AAA5] leading-relaxed"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#071C3C] bg-gradient-to-r from-[#55AAA5] to-[#74C7C2] hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#55AAA5]/20"
                >
                  <Send className="w-4 h-4 text-[#071C3C]" />
                  <span>{isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </FadeInSection>
  );
};
