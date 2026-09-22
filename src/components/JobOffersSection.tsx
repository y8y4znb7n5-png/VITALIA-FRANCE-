import React, { useState } from 'react';
import { JOB_OFFERS } from '../data/content';
import { JobOffer } from '../types';
import {
  MapPin,
  Clock,
  Euro,
  Linkedin,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface JobOffersSectionProps {
  onApplyForJob: (job: JobOffer) => void;
  onSpontaneousApply: () => void;
}

export const JobOffersSection: React.FC<JobOffersSectionProps> = ({
  onApplyForJob,
  onSpontaneousApply,
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('Tous');
  const [selectedJobForDetails, setSelectedJobForDetails] = useState<JobOffer | null>(null);

  const sectors = ['Tous', 'Pharmaceutique', 'Biotechnologies', 'MedTech', 'Diagnostic & Data'];

  const filteredJobs =
    selectedSector === 'Tous'
      ? JOB_OFFERS
      : JOB_OFFERS.filter((job) => job.sector === selectedSector);

  return (
    <section id="offres" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#55AAA5] bg-[#EEF8F7] px-3.5 py-1.5 rounded-full">
              Opportunités en cours
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F63] tracking-tight">
              Postes ouverts en LifeSciences
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Postulez en 1 clic grâce à votre profil LinkedIn ou transmettez votre candidature à nos consultants.
            </p>
          </div>

          <button
            id="job-offers-spontaneous-btn"
            onClick={onSpontaneousApply}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B2F63] bg-[#EEF8F7] border border-[#55AAA5]/50 hover:bg-[#55AAA5]/20 active:bg-[#55AAA5]/30 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#55AAA5]" />
            <span>Candidature spontanée / confidentielle</span>
          </button>
        </div>

        {/* Filter Pills optimisés mobile */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mr-2 py-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrer :</span>
          </div>
          {sectors.map((sector) => (
            <button
              key={sector}
              id={`filter-job-${sector.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
              onClick={() => setSelectedSector(sector)}
              className={`min-h-[42px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center ${
                selectedSector === sector
                  ? 'bg-[#0B2F63] text-white shadow-xs'
                  : 'bg-[#F2F4F7] text-slate-600 hover:text-[#0B2F63] hover:bg-slate-200/70'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              id={`job-card-${job.id}`}
              className="p-6 rounded-3xl bg-[#F2F4F7] border border-slate-200/90 hover:border-[#0B2F63]/40 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Sector & tags header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B2F63] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {job.sector}
                  </span>
                  <span className="text-xs text-slate-500">
                    Publié il y a {job.postedDaysAgo}j
                  </span>
                </div>

                <h3 className="font-bold text-[#0B2F63] text-lg mb-2">
                  {job.title}
                </h3>

                {/* Metadata Pills */}
                <div className="flex flex-wrap gap-2 text-xs text-slate-600 mb-4">
                  <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200/70">
                    <MapPin className="w-3.5 h-3.5 text-[#55AAA5]" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200/70">
                    <Clock className="w-3.5 h-3.5 text-[#0B2F63]" />
                    {job.contractType}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200/70 font-semibold text-[#0B2F63]">
                    <Euro className="w-3.5 h-3.5 text-[#55AAA5]" />
                    {job.salaryRange}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {job.description}
                </p>

                {/* Requirements brief */}
                <div className="space-y-1 mb-5">
                  {job.keyRequirements.slice(0, 2).map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#55AAA5] shrink-0" />
                      <span className="truncate">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer optimisé mobile tactile */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-stretch gap-2.5">
                <button
                  id={`job-apply-linkedin-${job.id}`}
                  onClick={() => onApplyForJob(job)}
                  className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0077B5] hover:bg-[#005f93] active:bg-[#004b75] transition-all shadow-xs cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span>Postuler avec LinkedIn</span>
                </button>

                <button
                  id={`job-view-details-${job.id}`}
                  onClick={() => setSelectedJobForDetails(job)}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B2F63] bg-white hover:bg-slate-50 border border-slate-200 active:bg-slate-100 transition-all cursor-pointer flex items-center justify-center"
                >
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Application Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0B2F63] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              Vous avez une expertise pointue en sciences de la vie ?
            </h3>
            <p className="text-sm text-slate-200 max-w-2xl leading-relaxed">
              La majorité de nos recrutements stratégiques sont menés en toute confidentialité et ne font l'objet d'aucune annonce publique. Transmettez votre profil en toute sécurité.
            </p>
          </div>
          <button
            id="spontaneous-banner-cta"
            onClick={onSpontaneousApply}
            className="w-full sm:w-auto min-h-[48px] shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0B2F63] bg-white hover:bg-[#EEF8F7] active:bg-slate-200 transition-all shadow-sm cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-[#0077B5]" />
            <span>Déposer mon profil LinkedIn</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal Job Details */}
      {selectedJobForDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#55AAA5] bg-[#EEF8F7] px-2.5 py-1 rounded-md">
                  {selectedJobForDetails.sector}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2F63] mt-2">
                  {selectedJobForDetails.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedJobForDetails(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-600 mb-6">
              <span className="bg-[#F2F4F7] px-3 py-1.5 rounded-lg">{selectedJobForDetails.location}</span>
              <span className="bg-[#F2F4F7] px-3 py-1.5 rounded-lg">{selectedJobForDetails.contractType}</span>
              <span className="bg-[#F2F4F7] px-3 py-1.5 rounded-lg font-semibold text-[#0B2F63]">{selectedJobForDetails.salaryRange}</span>
              <span className="bg-[#F2F4F7] px-3 py-1.5 rounded-lg">{selectedJobForDetails.experienceLevel}</span>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed mb-6">
              <div>
                <h4 className="font-bold text-[#0B2F63] mb-1">Missions & Enjeux :</h4>
                <p>{selectedJobForDetails.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B2F63] mb-2">Profil recherché & compétences requises :</h4>
                <ul className="space-y-2">
                  {selectedJobForDetails.keyRequirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#55AAA5] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  const job = selectedJobForDetails;
                  setSelectedJobForDetails(null);
                  onApplyForJob(job);
                }}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#0077B5] hover:bg-[#005f93] transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>Postuler avec LinkedIn en 1 clic</span>
              </button>

              <button
                onClick={() => setSelectedJobForDetails(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
