import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.about;

  return (
    <section id="about" className="min-h-screen bg-[#F3F7FB] py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#061A46] mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-[#061A46]/70 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-[#061A46]/80 leading-relaxed">
              {data.description}
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#1264F5]">{data.mission}</h3>
              <p className="text-[#061A46]/70">{data.missionText}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#08CBE8]">{data.vision}</h3>
              <p className="text-[#061A46]/70">{data.visionText}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#061A46] text-center mb-6">{data.values}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.valuesList.map((value, i) => (
              <span key={i} className="px-6 py-3 bg-white rounded-full shadow-md text-[#061A46] font-semibold">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};