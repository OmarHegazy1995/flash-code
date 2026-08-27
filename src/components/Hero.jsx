import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { language, isRTL, t } = useLanguage();

  // ===== TYPING ANIMATION =====
  const [typedText, setTypedText] = useState('');
  const [codeIndex, setCodeIndex] = useState(0);

  const codeLines = [
    'const idea = solution();',
    'const system = build(idea);',
    'system.scale(confidence);',
  ];

  useEffect(() => {
    const currentLine = codeLines[codeIndex];
    let index = 0;
    setTypedText('');

    const interval = setInterval(() => {
      setTypedText(currentLine.substring(0, index));
      index++;
      if (index > currentLine.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCodeIndex((prev) => (prev + 1) % codeLines.length);
        }, 1200);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [codeIndex]);

  const heroData = t.hero;

  return (
    <section
      id="hero"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-screen overflow-hidden flex items-center bg-[#061A46] text-white pt-[78px]"
    >
      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(18,100,245,0.25), transparent 32%),
            radial-gradient(circle at 85% 65%, rgba(8,203,232,0.18), transparent 30%),
            radial-gradient(circle at 55% 100%, rgba(11,170,154,0.12), transparent 30%)
          `,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ===== ANIMATED RIBBONS ===== */}
      <div className="absolute top-[15%] -left-[10%] w-[70%] h-[120px] rotate-[-12deg] opacity-20 pointer-events-none animate-ribbon">
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#1264F5] to-[#08CBE8] shadow-[0_0_25px_rgba(8,203,232,0.8)]" />
        <div className="mt-8 h-[2px] w-[80%] bg-gradient-to-r from-transparent via-[#08CBE8] to-transparent" />
        <div className="mt-8 h-[2px] w-[60%] bg-gradient-to-r from-transparent via-[#0BAA9A] to-transparent" />
      </div>

      <div className="absolute bottom-[12%] -right-[15%] w-[65%] h-[100px] rotate-[-12deg] opacity-15 pointer-events-none animate-ribbon-reverse">
        <div className="h-[3px] w-full bg-gradient-to-r from-[#0BAA9A] via-[#08CBE8] to-transparent" />
        <div className="mt-8 h-[2px] w-[75%] bg-gradient-to-r from-transparent via-[#1264F5] to-transparent" />
      </div>

      {/* ===== FLOATING CODE PARTICLES ===== */}
      <div className="absolute top-[22%] left-[8%] text-[#08CBE8]/20 text-6xl font-mono pointer-events-none animate-float">
        {'</>'}
      </div>
      <div className="absolute bottom-[18%] left-[38%] text-[#1264F5]/20 text-5xl font-mono pointer-events-none animate-float [animation-delay:1s]">
        {'{ }'}
      </div>
      <div className="absolute top-[18%] right-[10%] text-[#0BAA9A]/20 text-4xl font-mono pointer-events-none animate-float [animation-delay:2s]">
        {'01'}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* ===== LEFT CONTENT ===== */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#08CBE8]/20 bg-[#08CBE8]/[0.06] backdrop-blur-md mb-7 animate-fade-up">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#08CBE8] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#08CBE8]" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#08CBE8] tracking-wide">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-black tracking-[-0.04em] leading-[0.98] mb-7 animate-fade-up [animation-delay:0.1s]">
              {language === 'ar' ? (
                <>
                  نبني
                  <span className="block bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] bg-clip-text text-transparent">
                    المستقبل الرقمي.
                  </span>
                </>
              ) : (
                <>
                  BUILD
                  <span className="block bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] bg-clip-text text-transparent">
                    FASTER.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/85 mb-5 animate-fade-up [animation-delay:0.2s]">
              {heroData.subtitle}
            </div>

            {/* Description */}
            <p className="max-w-2xl text-base sm:text-lg leading-8 text-white/55 mb-9 animate-fade-up [animation-delay:0.3s]">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-start' : 'justify-start'} animate-fade-up [animation-delay:0.4s]`}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-xl bg-[#1264F5] hover:bg-[#0f59dc] text-white font-semibold shadow-[0_15px_40px_rgba(18,100,245,0.28)] hover:shadow-[0_18px_50px_rgba(18,100,245,0.4)] transition-all duration-300"
              >
                {heroData.cta}
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold backdrop-blur-md transition-all duration-300"
              >
                {heroData.cta2}
                <span className="text-[#08CBE8]">→</span>
              </a>
            </div>

            {/* Trust Tags */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs sm:text-sm text-white/40 animate-fade-up [animation-delay:0.5s]">
              {heroData.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[#08CBE8]">✓</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ===== RIGHT CONTENT - CODE VISUAL ===== */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in [animation-delay:0.2s]">
            {/* Glow */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#1264F5]/20 blur-[100px] animate-pulse" />

            {/* Code Window */}
            <div className="relative w-full max-w-[560px] rounded-2xl border border-white/10 bg-[#071f4f]/80 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.35)] overflow-hidden rotate-[1deg] hover:rotate-0 transition-transform duration-700">
              {/* Window Header */}
              <div className="h-12 px-5 flex items-center justify-between border-b border-white/10 bg-white/[0.025]">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[10px] font-mono text-white/30">flash-code.js</span>
              </div>

              {/* Code Body */}
              <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-8">
                <div className="text-white/25">01</div>
                <div>
                  <span className="text-[#08CBE8]">const</span>{' '}
                  <span className="text-white">flashCode</span>{' '}
                  <span className="text-white/40">=</span>{' '}
                  <span className="text-[#0BAA9A]">{'{'}</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#1264F5]">mission</span>
                  <span className="text-white/40">:</span>{' '}
                  <span className="text-[#08CBE8]">"build"</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#1264F5]">speed</span>
                  <span className="text-white/40">:</span>{' '}
                  <span className="text-[#08CBE8]">"fast"</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#1264F5]">quality</span>
                  <span className="text-white/40">:</span>{' '}
                  <span className="text-[#08CBE8]">"high"</span>
                </div>
                <div>
                  <span className="text-[#0BAA9A]">{'}'}</span>
                </div>
                <div className="h-5" />

                <div className="text-white/25">08</div>
                <div className="min-h-[32px] text-[#08CBE8]">
                  <span className="text-[#1264F5]">$</span> {typedText}
                  <span className="inline-block w-[7px] h-5 ml-1 bg-[#08CBE8] align-middle animate-pulse" />
                </div>
                <div className="h-5" />

                {/* Architecture Badges */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div className="p-3 rounded-xl border border-[#1264F5]/20 bg-[#1264F5]/5 text-center">
                    <div className="text-[#1264F5] text-lg mb-1">UI</div>
                    <div className="text-[9px] text-white/35">React</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#08CBE8]/20 bg-[#08CBE8]/5 text-center">
                    <div className="text-[#08CBE8] text-lg mb-1">API</div>
                    <div className="text-[9px] text-white/35">.NET</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#0BAA9A]/20 bg-[#0BAA9A]/5 text-center">
                    <div className="text-[#0BAA9A] text-lg mb-1">DB</div>
                    <div className="text-[9px] text-white/35">SQL</div>
                  </div>
                </div>
              </div>

              {/* Bottom Status */}
              <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/30">
                <span>system.status</span>
                <span className="flex items-center gap-2 text-[#0BAA9A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0BAA9A] animate-pulse" />
                  READY
                </span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-3 sm:left-0 px-4 py-3 rounded-xl border border-white/10 bg-[#061A46]/90 backdrop-blur-xl shadow-2xl animate-float [animation-delay:0.5s]">
              <div className="text-[10px] text-white/40 mb-1">BUILD</div>
              <div className="text-sm font-bold">
                <span className="text-[#1264F5]">FAST.</span>{' '}
                <span className="text-[#08CBE8]">SMART.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM FADE ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#061A46] to-transparent pointer-events-none" />

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/25">
        <span className="text-[9px] tracking-[0.25em]">SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-[#08CBE8] to-transparent animate-pulse" />
      </div>
    </section>
  );
};