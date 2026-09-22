export type ServiceCategory = 'entreprises' | 'candidats';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  iconName: string;
  highlightMetric?: string;
}

export interface ExpertiseSector {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  subfields: string[];
  iconName: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  type: 'entreprise' | 'candidat';
  quote: string;
  impact: string;
  sector: string;
  avatarUrl: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Conseils Carrière' | 'Actualités Pharma & Biotech' | 'Tendances RH & Marché' | 'Réglementation';
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  tags: string[];
  featured?: boolean;
}

export interface JobOffer {
  id: string;
  title: string;
  sector: 'Pharmaceutique' | 'Biotechnologies' | 'MedTech' | 'Diagnostic & Data';
  location: string;
  contractType: string;
  experienceLevel: string;
  salaryRange: string;
  description: string;
  keyRequirements: string[];
  postedDaysAgo: number;
  featured?: boolean;
}

export interface ContactFormData {
  profileType: 'entreprise' | 'candidat' | 'autre';
  fullName: string;
  email: string;
  phone: string;
  companyOrCurrentRole: string;
  subject: string;
  message: string;
  linkedinUrl?: string;
  cvFileName?: string;
}

export interface QuickApplyData {
  jobId?: string;
  jobTitle?: string;
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  sector: string;
  yearsOfExperience: string;
  cvFile?: File | null;
  message?: string;
}
