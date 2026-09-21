import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Building2
} from 'lucide-react';

export const Testimonials = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.testimonials;

  const [activeIndex, setActiveIndex] = useState(0);

  // ===== Auto Play =====
  useEffect(() => {
    if (!data?.testimonials?.length) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => 
        prev + 1 >= data.testimonials.length ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [data, activeIndex]);

  const goToSlide = (index) => setActiveIndex(index);
  const nextSlide = () => setActiveIndex((prev) => 
    (prev + 1) % data.testimonials.length
  );
  const prevSlide = () => setActiveIndex((prev) => 
    (prev - 1 + data.testimonials.length) % data.testimonials.length
  );

  const activeTestimonial = data?.testimonials?.[activeIndex];

  return (
    <section 
      id="testimonials" 
      className="relative py-16 bg-[#061A46] overflow-hidden"
    >
      {/* ============================================
          BACKGROUND DECORATION
      ============================================ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#1264F5]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#08CBE8]/15 rounded-full blur-[120px]" />
        
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#08CBE8]/40 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1264F5]/40 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#08CBE8]/30 bg-[#08CBE8]/10 backdrop-blur-md mb-4">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#08CBE8] opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#08CBE8]" />
            </span>
            <span className="text-[10px] font-semibold text-[#08CBE8] tracking-[0.2em] uppercase">
              {language === 'ar' ? 'شهادات العملاء' : 'Testimonials'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* ============================================
            MAIN TESTIMONIAL CARD (SAMPLE)
        ============================================ */}
        {activeTestimonial && (
          <div className="relative max-w-3xl mx-auto">

            {/* ===== Main Card ===== */}
            <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">

              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#08CBE8] to-transparent" />

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#08CBE8]/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#1264F5]/10 to-transparent rounded-tr-full" />

              {/* ===== Large Quote Mark ===== */}
              <div className="absolute top-4 right-6 opacity-[0.06] pointer-events-none">
                <Quote size={100} className="text-white fill-white" />
              </div>

              <div className="relative">

                {/* ===== Top Row: Stars + Source ===== */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-[#08CBE8] fill-[#08CBE8] drop-shadow-[0_0_6px_rgba(8,203,232,0.5)]"
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    <Building2 size={10} className="text-[#08CBE8]" />
                    <span className="text-[9px] font-semibold text-white/60 tracking-wider uppercase">
                      {language === 'ar' ? 'عميل موثق' : 'Verified Client'}
                    </span>
                  </div>
                </div>

                {/* ===== Quote Text ===== */}
                <blockquote className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light mb-6 relative">
                  <span className="text-[#08CBE8] text-2xl font-serif absolute -top-1 -right-0.5">
                    "
                  </span>
                  <p className="pr-4">
                    {activeTestimonial.content}
                  </p>
                </blockquote>

                {/* ===== Author Section ===== */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-white/10">

                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#1264F5]/30">
                        {activeTestimonial.name?.charAt(0) || '?'}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0BAA9A] border-[3px] border-[#061A46] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-base mb-0.5">
                        {activeTestimonial.name}
                      </h3>
                      <p className="text-[#08CBE8] text-xs font-medium">
                        {activeTestimonial.role}
                      </p>
                      {activeTestimonial.company && (
                        <p className="text-white/40 text-[10px] mt-0.5">
                          {activeTestimonial.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-[#1264F5]/10 to-[#08CBE8]/10 border border-[#08CBE8]/20">
                    <Award size={16} className="text-[#08CBE8]" />
                    <div>
                      <div className="text-white font-bold text-xs">
                        5.0 / 5.0
                      </div>
                      <div className="text-white/40 text-[9px]">
                        {language === 'ar' ? 'تقييم ممتاز' : 'Excellent Rating'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ===== Navigation Buttons ===== */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 ltr:-left-3 rtl:-right-3 lg:ltr:-left-12 lg:rtl:-right-12 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#08CBE8]/20 hover:border-[#08CBE8]/50 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous testimonial"
            >
              {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 ltr:-right-3 rtl:-left-3 lg:ltr:-right-12 lg:rtl:-left-12 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#08CBE8]/20 hover:border-[#08CBE8]/50 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next testimonial"
            >
              {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>

            {/* ===== Bottom: Dots + Counter ===== */}
            <div className="flex items-center justify-between mt-6 max-w-md mx-auto">

              <div className="flex gap-1.5">
                {data.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? 'w-8 bg-gradient-to-r from-[#1264F5] to-[#08CBE8]'
                        : 'w-1 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-lg font-black text-white">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-white/30 text-xs">/</span>
                <span className="text-white/40 text-xs">
                  {String(data.testimonials.length).padStart(2, '0')}
                </span>
              </div>

            </div>

          </div>
        )}

        {/* ============================================
            BOTTOM TRUST BAR
        ============================================ */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">

            {/* Happy Clients */}
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2.5">
                {['A', 'M', 'S', 'K', 'F'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#061A46] shadow-md"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-bold text-xs">
                  {language === 'ar' ? '+50 عميل' : '50+ Clients'}
                </div>
                <div className="text-white/40 text-[10px]">
                  {language === 'ar' ? 'يثقون بنا' : 'Trust us'}
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            {/* Rating */}
            <div className="flex items-center gap-2.5">
              <div className="text-2xl font-black bg-gradient-to-r from-[#1264F5] to-[#08CBE8] bg-clip-text text-transparent">
                4.9
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-[#08CBE8] fill-[#08CBE8]" />
                  ))}
                </div>
                <div className="text-white/40 text-[10px]">
                  {language === 'ar' ? 'متوسط التقييم' : 'Average Rating'}
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            {/* Projects */}
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-[#08CBE8] to-[#0BAA9A] bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-white/40 text-[10px]">
                {language === 'ar' ? 'مشاريع ناجحة' : 'Successful Projects'}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};