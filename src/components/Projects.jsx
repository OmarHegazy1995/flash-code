import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export const Projects = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.projects;
  const [showAll, setShowAll] = useState(false);

  // أول 3 مشاريع بس
  const displayedProjects = showAll ? data.projects : data.projects.slice(0, 3);

  // ===== Project Card =====
  const ProjectCard = ({ project }) => {
    const [imageError, setImageError] = useState(false);
    const hasLive = project.liveUrl && project.liveUrl !== '#';

    return (
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-[#061A46]/5 hover:border-[#1264F5]/30 flex flex-col max-w-md mx-auto w-full">
        
        {/* ===== Image ===== */}
        <div className="h-52 overflow-hidden bg-gradient-to-br from-[#1264F5]/20 to-[#08CBE8]/20">
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl">🖼️</span>
            </div>
          )}
        </div>

        {/* ===== Content ===== */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category */}
          <span className="inline-block px-3 py-1 rounded-full bg-[#1264F5]/10 text-[#1264F5] text-xs font-semibold mb-2.5 self-start">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2.5 text-[#061A46]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-[#061A46]/60 text-sm leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-[#1264F5]/10 text-[#1264F5] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-start items-center pt-4 border-t border-[#061A46]/5">
            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1264F5] font-semibold flex items-center hover:text-[#08CBE8] transition-colors text-sm"
              >
                {language === 'ar' ? 'معاينة مباشرة' : 'Live Demo'} →
              </a>
            ) : (
              <span className="text-[#061A46]/20 text-sm">
                {language === 'ar' ? 'قريباً' : 'Coming Soon'}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-[#F3F7FB] py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1264F5]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#08CBE8]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1264F5]/20 bg-[#1264F5]/5 backdrop-blur-sm mb-5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#1264F5] opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#1264F5]" />
            </span>
            <span className="text-xs font-semibold text-[#1264F5] tracking-wider uppercase">
              {language === 'ar' ? 'أعمالنا' : 'Our Work'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#061A46] mb-4">
            {data.title}
          </h2>
          <p className="text-lg sm:text-xl text-[#061A46]/60 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View All / Show Less Button */}
        {data.projects.length > 3 && (
          <div className="text-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] text-white font-semibold shadow-lg shadow-[#1264F5]/25 hover:shadow-xl hover:shadow-[#1264F5]/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>
                {showAll
                  ? (language === 'ar' ? 'عرض أقل' : 'Show Less')
                  : (language === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects')}
              </span>
              {showAll ? (
                <ChevronUp
                  size={18}
                  className="group-hover:-translate-y-1 transition-transform duration-300"
                />
              ) : (
                <ChevronDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};