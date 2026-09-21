import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export const FloatingButtons = () => {
  const { language, isRTL } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // أرقام التواصل
  const phoneNumber = '+201553009484';
  const whatsappNumber = '201553009484';

  // التحقق من حجم الشاشة
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 480);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // حجم الأيقونة حسب الشاشة
  const iconSize = isSmallMobile ? 18 : isMobile ? 20 : 24;
  const buttonSize = isSmallMobile ? 'w-12 h-12' : isMobile ? 'w-13 h-13' : 'w-14 h-14';
  const bottomSpacing = isSmallMobile ? 'bottom-4' : 'bottom-6';
  const gapSpacing = isSmallMobile ? 'gap-2' : 'gap-3';

  return (
    <div className={`fixed ${bottomSpacing} ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-50 flex flex-col ${gapSpacing}`}>
      
      {/* زر الاتصال */}
      <a
        href={`tel:${phoneNumber}`}
        className={`
          group relative ${buttonSize} rounded-full 
          bg-gradient-to-br from-[#1264F5] to-[#08CBE8] 
          flex items-center justify-center 
          shadow-lg shadow-[#1264F5]/30 hover:shadow-xl hover:shadow-[#1264F5]/50 
          transition-all duration-300 hover:scale-110
        `}
        aria-label="Call us"
      >
        <Phone size={iconSize} className="text-white" />
        
        {/* Tooltip - يظهر فوق الزر */}
        <span className={`
          absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2
          ${isMobile ? 'hidden' : ''}
          whitespace-nowrap px-3 py-1.5 rounded-lg 
          bg-[#061A46] text-white text-xs font-medium 
          opacity-0 group-hover:opacity-100 
          transition-all duration-300 pointer-events-none
          shadow-lg
        `}>
          {language === 'ar' ? 'اتصل بنا' : 'Call us'}
          {/* سهم صغير تحت التولتيب */}
          <span className={`
            absolute top-full left-1/2 -translate-x-1/2
            w-0 h-0 
            border-l-[6px] border-l-transparent 
            border-r-[6px] border-r-transparent 
            border-t-[6px] border-t-[#061A46]
          `} />
        </span>
      </a>

      {/* زر WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative ${buttonSize} rounded-full 
          bg-[#25D366] 
          flex items-center justify-center 
          shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 
          transition-all duration-300 hover:scale-110
        `}
        aria-label="WhatsApp"
      >
        <MessageCircle size={iconSize} className="text-white" />
        
        {/* Tooltip - يظهر فوق الزر */}
        <span className={`
          absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2
          ${isMobile ? 'hidden' : ''}
          whitespace-nowrap px-3 py-1.5 rounded-lg 
          bg-[#061A46] text-white text-xs font-medium 
          opacity-0 group-hover:opacity-100 
          transition-all duration-300 pointer-events-none
          shadow-lg
        `}>
          WhatsApp
          {/* سهم صغير تحت التولتيب */}
          <span className={`
            absolute top-full left-1/2 -translate-x-1/2
            w-0 h-0 
            border-l-[6px] border-l-transparent 
            border-r-[6px] border-r-transparent 
            border-t-[6px] border-t-[#061A46]
          `} />
        </span>
      </a>

    </div>
  );
};