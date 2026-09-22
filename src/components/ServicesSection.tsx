import React, { useState } from 'react';
import { SERVICES_ENTREPRISES, SERVICES_CANDIDATS } from '../data/content';
import { ServiceCategory } from '../types';
import {
  Compass,
  Microscope,
  ShieldCheck,
  TrendingUp,
  KeyRound,
  UserCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

interface ServicesSectionProps {
  onContactRequest: (profileType: 'entreprise' | 'candidat', serviceTitle?: string) => void;
  onOpenQuickApply: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onContactRequest,
  onOpenQuickApply,
}) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('entreprises');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#0B2F63]" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-[#55AAA5]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0B2F63]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#55AAA5]" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-[#0B2F63]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#55AAA5]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#0B2F63]" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#0B2F63]" />;
    }
  };

  const services = activeTab === 'entreprises' ? SERVICES_ENTREPRISES : SERVICES_CANDIDATS;

  return (
    <section id="services" className="py-20 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B2F63] bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Une Approche Sur-Mesure
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F63] tracking-tight">
            Des services dédiés aux enjeux des Sciences de la Vie
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Nous accompagnons aussi bien les directions générales et RH dans leurs mandats critiques que les experts scientifiques et médicaux dans leurs choix de carrière.
          </p>
        </div>

        {/* Tab Switcher optimisé mobile */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs gap-1.5 sm:gap-0">
            <button
              id="services-tab-entreprises"
              type="button"
              onClick={() => setActiveTab('entreprises')}
              className={`flex items-center justify-center gap-2.5 px-5 py-3 sm:py-2.5 rounded-xl text-sm font-bold min-h-[44px] transition-all cursor-pointer ${
                activeTab === 'entreprises'
                  ? 'bg-[#0B2F63] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2F63] hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Services aux Entreprises</span>
            </button>

            <button
              id="services-tab-candidats"
              type="button"
              onClick={() => setActiveTab('candidats')}
              className={`flex items-center justify-center gap-2.5 px-5 py-3 sm:py-2.5 rounded-xl text-sm font-bold min-h-[44px] transition-all cursor-pointer ${
                activeTab === 'candidats'
                  ? 'bg-[#55AAA5] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2F63] hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Accompagnement Candidats</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0B2F63]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header item */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-[#F2F4F7]">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.highlightMetric && (
                    <span className="text-[11px] font-bold text-[#3F8F8A] bg-[#EEF8F7] px-3 py-1 rounded-full border border-[#55AAA5]/30">
                      {service.highlightMetric}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B2F63] mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-[#55AAA5] mb-3">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Key deliverables */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#55AAA5] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button tactile */}
              <div>
                {activeTab === 'entreprises' ? (
                  <button
                    id={`service-btn-contact-${service.id}`}
                    onClick={() => onContactRequest('entreprise', service.title)}
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0B2F63] hover:bg-[#18427F] active:bg-[#071C3C] transition-all cursor-pointer"
                  >
                    <span>Échanger sur ce besoin</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    id={`service-btn-apply-${service.id}`}
                    onClick={() => onOpenQuickApply(service.title)}
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B2F63] bg-[#EEF8F7] border border-[#55AAA5]/40 hover:bg-[#55AAA5]/20 active:bg-[#55AAA5]/30 transition-all cursor-pointer"
                  >
                    <span>Échanger avec un consultant</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#55AAA5]" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
