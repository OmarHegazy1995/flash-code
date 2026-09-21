import { useLanguage } from '../context/LanguageContext';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  BadgeDollarSign, 
  Database, 
  Rocket
} from 'lucide-react';

export const Services = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.services;

  // أيقونات متحركة لكل خدمة
  const iconMap = {
    '🌐': Globe,
    '📱': Smartphone,
    '🎨': Palette,
    '🛒': BadgeDollarSign,
    '📊': Database,
    '🚀': Rocket,
  };

  return (
    <section id="services" className="min-h-screen bg-[#F3F7FB] py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1264F5]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#08CBE8]/5 rounded-full blur-3xl" />
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
              {language === 'ar' ? 'ما نقدمه' : 'What We Offer'}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#061A46] mb-4">
            {data.title}
          </h2>
          <p className="text-lg sm:text-xl text-[#061A46]/60 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-[#061A46]/5 hover:border-[#1264F5]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1264F5]/0 via-[#08CBE8]/0 to-[#0BAA9A]/0 group-hover:from-[#1264F5]/5 group-hover:via-[#08CBE8]/5 group-hover:to-[#0BAA9A]/5 transition-all duration-500" />
                
                {/* Icon Container */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1264F5]/10 to-[#08CBE8]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <IconComponent 
                    size={28} 
                    className="text-[#1264F5] group-hover:text-[#08CBE8] transition-colors duration-300" 
                  />
                  {/* Icon Background Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1264F5]/0 to-[#08CBE8]/0 group-hover:from-[#1264F5]/20 group-hover:to-[#08CBE8]/20 transition-all duration-500" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#061A46] mb-3 group-hover:text-[#1264F5] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#061A46]/60 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative Number - تتحرك حسب RTL */}
                <span className={`
                  absolute top-4 font-black text-6xl select-none
                  text-[#061A46]/5
                  ${isRTL ? 'left-4' : 'right-4'}
                `}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-14">
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] text-white font-semibold shadow-lg shadow-[#1264F5]/25 hover:shadow-xl hover:shadow-[#1264F5]/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>{language === 'ar' ? 'استكشف مشاريعنا' : 'Explore Our Projects'}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};