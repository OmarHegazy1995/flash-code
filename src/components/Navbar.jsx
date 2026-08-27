import { useState, useEffect } from 'react';
import { Globe2, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { language, isRTL, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const links = [
    { id: 'hero', label: t.navbar.links.hero, href: '#hero' },
    { id: 'about', label: t.navbar.links.about, href: '#about' },
    { id: 'services', label: t.navbar.links.services, href: '#services' },
    { id: 'projects', label: t.navbar.links.projects, href: '#projects' },
  ];

  // ========== SCROLL STATE ==========
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ========== ACTIVE SECTION ==========
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el) => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // تحديد إذا كنا في الـ Hero section
  const isHero = activeSection === 'hero';

  return (
    <>
      <nav
        dir={isRTL ? 'rtl' : 'ltr'}
        className={`
          fixed top-0 left-0 right-0 z-[100]
          transition-all duration-500
          ${
            isScrolled || !isHero
              ? `
                bg-[#061A46]/90 backdrop-blur-2xl
                border-b border-white/10
                shadow-[0_10px_40px_rgba(6,26,70,0.18)]
              `
              : `
                bg-[#061A46]/50 backdrop-blur-sm
                border-b border-white/5
              `
          }
        `}
      >
        {/* TOP GLOW RIBBON */}
        <div
          className={`
            absolute top-0 left-0 right-0 h-px
            transition-opacity duration-500
            bg-gradient-to-r from-transparent via-[#08CBE8] to-transparent
            ${isScrolled || !isHero ? 'opacity-100' : 'opacity-50'}
          `}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="h-[78px] flex items-center justify-between gap-8">
            {/* ===== LOGO ===== */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('hero');
              }}
              className="group flex items-center gap-3 shrink-0 cursor-pointer"
            >
              <div
                className={`
                  relative w-10 h-10 rounded-xl overflow-hidden
                  flex items-center justify-center
                  bg-gradient-to-br from-[#1264F5] via-[#08CBE8] to-[#0BAA9A]
                  shadow-[0_8px_30px_rgba(8,203,232,0.25)]
                  transition-all duration-500
                  group-hover:scale-105 group-hover:shadow-[0_8px_40px_rgba(8,203,232,0.4)]
                `}
              >
                <span
                  className={`
                    absolute w-16 h-2 -rotate-45 bg-white/30
                    -translate-x-6 group-hover:translate-x-6
                    transition-transform duration-700
                  `}
                />
                <span className="relative text-white font-black text-xl tracking-tight">
                  F
                </span>
              </div>

              <div className="hidden sm:block">
                <div
                  className={`
                    font-bold text-[17px] tracking-tight transition-colors
                    ${isScrolled || !isHero ? 'text-white' : 'text-white'}
                  `}
                >
                  {t.navbar.brand}
                </div>
                <div
                  className={`
                    text-[8px] tracking-[0.28em] font-medium transition-colors
                    ${isScrolled || !isHero ? 'text-white/50' : 'text-white/60'}
                  `}
                >
                  {t.navbar.tagline}
                </div>
              </div>
            </a>

            {/* ===== DESKTOP NAV ===== */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const active = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.id);
                    }}
                    className={`
                      relative px-4 py-2.5 rounded-lg text-sm font-medium
                      transition-all duration-300 cursor-pointer
                      ${
                        active
                          ? 'text-white'
                          : isScrolled || !isHero
                          ? 'text-white/65 hover:text-white'
                          : 'text-white/70 hover:text-white'
                      }
                    `}
                  >
                    {link.label}
                    <span
                      className={`
                        absolute ${isRTL ? 'right-0' : 'left-0'} bottom-1
                        h-[2px] rounded-full
                        bg-gradient-to-r from-[#1264F5] to-[#08CBE8]
                        transition-all duration-300
                        ${active ? 'w-full opacity-100' : 'w-0 opacity-0'}
                      `}
                    />
                  </a>
                );
              })}
            </div>

            {/* ===== RIGHT ACTIONS ===== */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleLanguage}
                className={`
                  hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl
                  text-xs font-semibold transition-all duration-300 border
                  ${
                    isScrolled || !isHero
                      ? 'text-white/80 border-white/10 bg-white/5 hover:bg-white/10'
                      : 'text-white border-white/20 bg-white/10 hover:bg-white/20'
                  }
                `}
              >
                <Globe2 size={15} />
                <span>{t.navbar.language}</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className={`
                  lg:hidden w-10 h-10 rounded-xl
                  flex items-center justify-center transition-all duration-300
                  ${
                    isScrolled || !isHero
                      ? 'text-white bg-white/5 hover:bg-white/10'
                      : 'text-white bg-white/10 hover:bg-white/20'
                  }
                `}
              >
                {isOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500
            ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="border-t border-white/10 bg-[#061A46]/95 backdrop-blur-2xl">
            <div className="max-w-7xl mx-auto px-5 py-5">
              <div className="flex flex-col gap-1">
                {links.map((link, index) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.id);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-4 rounded-xl
                      transition-all duration-300 cursor-pointer
                      ${
                        activeSection === link.id
                          ? 'bg-white/10 text-white'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }
                    `}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    }}
                  >
                    <span className="text-sm font-medium">{link.label}</span>
                    <ChevronDown
                      size={16}
                      className="-rotate-90 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </a>
                ))}

                <button
                  onClick={toggleLanguage}
                  className="mt-2 flex items-center justify-between px-4 py-4 rounded-xl text-white/70 bg-white/5 hover:bg-white/10 transition"
                >
                  <span className="flex items-center gap-2">
                    <Globe2 size={17} />
                    <span className="text-sm">Language</span>
                  </span>
                  <span className="text-sm font-semibold text-[#08CBE8]">
                    {t.navbar.language}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== SCROLL PROGRESS BAR ===== */}
      <div
        className={`
          fixed top-0 left-0 right-0 h-[2px] z-[110]
          bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A]
          transition-opacity duration-300
          ${isScrolled ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </>
  );
};