import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { BlogPost } from '../types';
import { Search, Clock, Calendar, ArrowRight, Tag, X, BookOpen, Share2, Check } from 'lucide-react';

interface BlogSectionProps {
  onOpenContact: (profileType?: 'entreprise' | 'candidat') => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'Tous',
    'Conseils Carrière',
    'Actualités Pharma & Biotech',
    'Tendances RH & Marché',
    'Réglementation',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="blog" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#55AAA5] bg-[#EEF8F7] px-3.5 py-1.5 rounded-full">
            Insights & Veille
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2F63] tracking-tight">
            Blog, conseils carrière & actualités LifeSciences
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Décryptage des évolutions du marché, conseils de négociation pour les candidats et analyses des mutations réglementaires et scientifiques.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[42px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center ${
                  selectedCategory === cat
                    ? 'bg-[#0B2F63] text-white shadow-xs'
                    : 'bg-[#F2F4F7] text-slate-600 hover:text-[#0B2F63] hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input (16px base font to prevent mobile zoom) */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="blog-search-input"
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-xl text-base sm:text-xs bg-[#F2F4F7] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#55AAA5] focus:bg-white text-slate-800"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#F2F4F7] rounded-3xl">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-[#0B2F63]">Aucun article trouvé</p>
            <p className="text-xs text-slate-500 mt-1">Essayez d’élargir vos termes de recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                id={`blog-card-${post.id}`}
                className="p-6 sm:p-8 rounded-3xl bg-[#F2F4F7] border border-slate-200/90 hover:border-[#0B2F63]/30 transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => setActivePost(post)}
              >
                <div>
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B2F63] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#55AAA5]" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2F63] group-hover:text-[#18427F] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200/70"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#55AAA5]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Author & Read More */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatarUrl}
                      alt={post.author.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover border border-white"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#0B2F63]">{post.author.name}</p>
                      <p className="text-[10px] text-slate-500">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0B2F63] group-hover:text-[#55AAA5] transition-colors">
                    Lire l'article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92dvh] overflow-y-auto p-5 sm:p-10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2F63] bg-[#F2F4F7] px-3 py-1.5 rounded-md">
                {activePost.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Lien copié</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Partager</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setActivePost(null)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Post Header */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2F63] mb-4 leading-tight">
              {activePost.title}
            </h2>

            {/* Post Meta */}
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img
                  src={activePost.author.avatarUrl}
                  alt={activePost.author.name}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <p className="font-bold text-[#0B2F63]">{activePost.author.name}</p>
                  <p className="text-[10px] text-slate-400">{activePost.author.role}</p>
                </div>
              </div>
              <span className="text-slate-300">•</span>
              <span>{activePost.date}</span>
              <span className="text-slate-300">•</span>
              <span>Lecture {activePost.readTime}</span>
            </div>

            {/* Post Body Content */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
              {activePost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mb-8">
              {activePost.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold text-[#0B2F63] bg-[#EEF8F7] px-3 py-1 rounded-full border border-[#55AAA5]/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA inside article */}
            <div className="p-6 rounded-2xl bg-[#F2F4F7] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#0B2F63] text-sm">
                  Un projet de recrutement ou une réflexion de carrière ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                  Nos consultants spécialisés sont à votre écoute pour échanger en toute discrétion.
                </p>
              </div>
              <button
                onClick={() => {
                  setActivePost(null);
                  onOpenContact('entreprise');
                }}
                className="w-full sm:w-auto min-h-[44px] shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0B2F63] hover:bg-[#18427F] transition-all cursor-pointer flex items-center justify-center"
              >
                Contacter un consultant
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
