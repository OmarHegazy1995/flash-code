import { useLanguage } from '../context/LanguageContext';

export const Services = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.services;

  return (
    <section id="services" className="min-h-screen bg-white py-20">
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
          {data.services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-[#061A46]/10 hover:border-[#1264F5]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#061A46] mb-3">{service.title}</h3>
              <p className="text-[#061A46]/60 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#1264F5] text-white font-semibold hover:bg-[#0f59dc] transition-all duration-300"
          >
            {data.cta}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};