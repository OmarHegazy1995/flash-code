import { useLanguage } from '../context/LanguageContext';

export const Testimonials = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.testimonials;

  return (
    <section id="testimonials" className="min-h-screen bg-white py-20">
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
          {data.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-[#061A46]/10 hover:border-[#08CBE8]/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-[#08CBE8] text-4xl mb-4">"</div>
              <p className="text-[#061A46]/80 text-sm leading-relaxed mb-6">
                {testimonial.content}
              </p>
              <div>
                <h4 className="font-bold text-[#061A46]">{testimonial.name}</h4>
                <p className="text-[#061A46]/50 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};