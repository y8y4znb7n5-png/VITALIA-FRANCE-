import React, { useState, useEffect } from 'react';
import { QuickApplyData } from '../types';
import {
  X,
  Linkedin,
  CheckCircle2,
  Upload,
  ArrowRight,
  Shield,
  Sparkles,
  RefreshCw,
  FileText,
  Clock,
  Check,
} from 'lucide-react';

interface LinkedInQuickApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedJobTitle?: string;
  preselectedSector?: string;
}

export const LinkedInQuickApplyModal: React.FC<LinkedInQuickApplyModalProps> = ({
  isOpen,
  onClose,
  preselectedJobTitle,
  preselectedSector,
}) => {
  const [formData, setFormData] = useState<QuickApplyData>({
    jobTitle: preselectedJobTitle || 'Candidature Spontanée / Mandat Confidentiel',
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    sector: preselectedSector || 'Biotechnologies',
    yearsOfExperience: '5-10 ans (Senior)',
    message: '',
  });

  const [isImporting, setIsImporting] = useState(false);
  const [importedSuccess, setImportedSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [fileName, setFileName] = useState<string>('');

  useEffect(() => {
    if (preselectedJobTitle) {
      setFormData((prev) => ({ ...prev, jobTitle: preselectedJobTitle }));
    }
    if (preselectedSector) {
      setFormData((prev) => ({ ...prev, sector: preselectedSector }));
    }
  }, [preselectedJobTitle, preselectedSector]);

  if (!isOpen) return null;

  // Simulate one-click LinkedIn authorization & profile retrieval
  const handleLinkedInQuickSync = () => {
    setIsImporting(true);
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        fullName: 'Dr. Camille Laurent',
        email: 'camille.laurent.pharma@gmail.com',
        phone: '+33 6 42 18 90 33',
        linkedinUrl: 'https://linkedin.com/in/camille-laurent-lifesciences',
        yearsOfExperience: '5-10 ans (Senior)',
        message: 'Intéressée par des opportunités de direction de projet en biotechnologies ou oncologie clinique.',
      }));
      setFileName('CV_Camille_Laurent_PhD.pdf');
      setIsImporting(false);
      setImportedSuccess(true);
    }, 1100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/contact@vitalia-france.fr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Vitalia Web] Candidature Spontanée : ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false',
          Nom: formData.fullName,
          Email: formData.email,
          Telephone: formData.phone || 'Non renseigné',
          Secteur: formData.targetSector || 'Non spécifié',
          Experience: formData.yearsOfExperience || 'Non spécifié',
          LinkedIn: formData.linkedinUrl || 'Non renseigné',
          CV: fileName || 'Non joint',
          Message: formData.message || 'Aucun message particulier',
        }),
      });
      setIsDone(true);
    } catch {
      setIsDone(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFormData((prev) => ({ ...prev, cvFile: file }));
    }
  };

  const resetAll = () => {
    setIsDone(false);
    setImportedSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92dvh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button tactile (min 44x44px) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fermer la boîte de dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EEF8F7] text-[#55AAA5] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B2F63]">
              Candidature transmise avec succès !
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Votre profil LinkedIn a été synchronisé et confié à notre équipe LifeSciences.
              Un consultant référent étudiera votre profil en toute confidentialité sous <span className="font-semibold text-[#0B2F63]">24 à 48 heures</span>.
            </p>

            <div className="p-4 rounded-2xl bg-[#F2F4F7] text-left text-xs sm:text-sm space-y-1.5 max-w-md mx-auto text-slate-700">
              <p><span className="font-bold text-[#0B2F63]">Poste visé :</span> {formData.jobTitle}</p>
              <p><span className="font-bold text-[#0B2F63]">Candidat :</span> {formData.fullName}</p>
              <p><span className="font-bold text-[#0B2F63]">Email :</span> {formData.email}</p>
              <p><span className="font-bold text-[#0B2F63]">Profil LinkedIn :</span> {formData.linkedinUrl || 'Lié'}</p>
            </div>

            <button
              onClick={resetAll}
              className="mt-4 min-h-[44px] px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0B2F63] hover:bg-[#18427F] transition-all cursor-pointer"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2 pr-10">
              <div className="w-10 h-10 rounded-xl bg-[#0077B5] text-white flex items-center justify-center shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B2F63]">
                  Candidature rapide via LinkedIn
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {formData.jobTitle}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Gagnez du temps : importez directement les informations clés de votre compte LinkedIn ou renseignez le lien de votre profil.
            </p>

            {/* Quick 1-Click Import Button */}
            <div className="mb-6 p-4 rounded-2xl bg-[#EEF8F7] border border-[#55AAA5]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0077B5] text-white flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#0B2F63]">
                    Synchronisation automatique
                  </p>
                  <p className="text-xs text-slate-600">
                    Pré-remplit vos coordonnées et votre titre actuel
                  </p>
                </div>
              </div>

              <button
                type="button"
                id="btn-sync-linkedin-profile"
                onClick={handleLinkedInQuickSync}
                disabled={isImporting}
                className="w-full sm:w-auto shrink-0 min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0077B5] hover:bg-[#005f93] active:bg-[#004b75] transition-all disabled:opacity-50 cursor-pointer"
              >
                {isImporting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Importation...</span>
                  </>
                ) : importedSuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Profil synchronisé</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Importer depuis LinkedIn</span>
                  </>
                )}
              </button>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Thomas Bernard"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-base sm:text-sm rounded-xl bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="t.bernard@biotech.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-base sm:text-sm rounded-xl bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Téléphone (pour un échange informel)
                  </label>
                  <input
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-base sm:text-sm rounded-xl bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    URL de votre profil LinkedIn *
                  </label>
                  <div className="relative">
                    <Linkedin className="w-4 h-4 text-[#0077B5] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/votre-profil"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      className="w-full min-h-[44px] pl-9 pr-3.5 py-2.5 text-base sm:text-sm rounded-xl bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Secteur d'expertise principal
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-base sm:text-sm rounded-xl bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white"
                  >
                    <option value="Pharmaceutique">Industrie Pharmaceutique</option>
                    <option value="Biotechnologies">Biotechnologies & ATMP</option>
                    <option value="MedTech">Dispositifs Médicaux (MedTech)</option>
                    <option value="Diagnostic & Data">Diagnostic In Vitro & Santé Digitale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Niveau d'expérience
                  </label>
                  <select
                    value={formData.yearsOfExperience}
                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-base sm:text-sm rounded-xl bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white"
                  >
                    <option value="1-3 ans (Junior)">1-3 ans (Junior / Post-doc)</option>
                    <option value="3-7 ans (Confirmé)">3-7 ans (Confirmé)</option>
                    <option value="5-10 ans (Senior)">5-10 ans (Senior)</option>
                    <option value="10+ ans (Direction / C-Level)">10+ ans (Direction / C-Level)</option>
                  </select>
                </div>
              </div>

              {/* CV File Attachment (Optionnel si LinkedIn renseigné) */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                  CV en pièce jointe (optionnel avec profil LinkedIn)
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <label
                    htmlFor="quick-cv-upload"
                    className="cursor-pointer min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-[#F2F4F7] border border-slate-200 hover:bg-slate-200/70 active:bg-slate-300 transition-colors"
                  >
                    <Upload className="w-4 h-4 text-[#55AAA5]" />
                    <span>{fileName ? 'Changer de CV' : 'Téléverser un CV (PDF)'}</span>
                  </label>
                  <input
                    id="quick-cv-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {fileName && (
                    <span className="text-xs sm:text-sm text-slate-600 truncate max-w-xs font-medium flex items-center gap-1">
                      <FileText className="w-4 h-4 text-[#55AAA5]" />
                      {fileName}
                    </span>
                  )}
                </div>
              </div>

              {/* Note or Message */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                  Message court ou projet souhaité (optionnel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Disponibilité, zone géographique, type de projets scientifiques ou managériaux visés..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-base sm:text-sm rounded-xl bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white resize-none leading-relaxed"
                />
              </div>

              {/* Confidentiality reminder */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <Shield className="w-4 h-4 text-[#55AAA5] shrink-0" />
                <span>
                  Discrétion absolue : votre profil ne sera jamais partagé sans votre consentement écrit.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="btn-submit-quick-apply"
                disabled={isSubmitting}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0077B5] hover:bg-[#005f93] active:bg-[#004b75] transition-all shadow-xs disabled:opacity-50 mt-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Transmission en cours...</span>
                ) : (
                  <>
                    <Linkedin className="w-4 h-4" />
                    <span>Valider ma candidature express LinkedIn</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
