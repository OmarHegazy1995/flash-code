import { useLanguage } from '../context/LanguageContext';

export const Projects = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.projects;

  return (
    <section id="projects" className="min-h-screen bg-[#F3F7FB] py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#061A46] mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-[#061A46]/70 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1264F5]/10 text-[#1264F5] text-xs font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#061A46] mb-2">{project.title}</h3>
                <p className="text-[#061A46]/60 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#08CBE8] text-white font-semibold hover:bg-[#07b8d4] transition-all duration-300"
          >
            {data.cta}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};