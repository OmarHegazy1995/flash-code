import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Award
} from 'lucide-react';

export const Contact = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.contact;

  // أيقونات التواصل الاجتماعي باستخدام SVG مباشرة (تجنب مشاكل lucide-react)
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com/flashcode',
      bgColor: 'hover:bg-[#1877f2]'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      url: 'https://instagram.com/flashcode',
      bgColor: 'hover:bg-[#e4405f]'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com/company/flashcode',
      bgColor: 'hover:bg-[#0a66c2]'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      url: 'https://wa.me/20123456789',
      bgColor: 'hover:bg-[#25d366]'
    }
  ];

  // معلومات إضافية
  const infoCards = [
    {
      icon: Clock,
      title: language === 'ar' ? 'ساعات العمل' : 'Working Hours',
      value: language === 'ar' ? 'الأحد - الخميس: 9ص - 6م' : 'Sun - Thu: 9AM - 6PM',
      color: 'text-[#08CBE8]'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'سنوات الخبرة' : 'Years of Experience',
      value: language === 'ar' ? 'أكثر من 10 سنوات' : '10+ Years',
      color: 'text-[#1264F5]'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-[#061A46] py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1264F5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#08CBE8]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#08CBE8]/20 bg-[#08CBE8]/[0.06] backdrop-blur-md mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#08CBE8] opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#08CBE8]" />
            </span>
            <span className="text-xs font-medium text-[#08CBE8] tracking-wide">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{data.title}</h3>
              <p className="text-white/60 leading-relaxed">{data.description}</p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#08CBE8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08CBE8]/20 transition">
                  <Mail size={20} className="text-[#08CBE8]" />
                </div>
                <div>
                  <p className="text-xs text-white/40">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                  <span className="text-sm">{data.email}</span>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#08CBE8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08CBE8]/20 transition">
                  <Phone size={20} className="text-[#08CBE8]" />
                </div>
                <div>
                  <p className="text-xs text-white/40">{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</p>
                  <span className="text-sm">{data.phone}</span>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#08CBE8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08CBE8]/20 transition">
                  <MapPin size={20} className="text-[#08CBE8]" />
                </div>
                <div>
                  <p className="text-xs text-white/40">{language === 'ar' ? 'العنوان' : 'Address'}</p>
                  <span className="text-sm">{data.address}</span>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#08CBE8]/30 transition-all duration-300 hover:bg-white/10">
                    <Icon size={20} className={`${card.color} mb-2`} />
                    <p className="text-white/40 text-xs">{card.title}</p>
                    <p className="text-white text-sm font-semibold">{card.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Social Media Section */}
            <div className="pt-4">
              <p className="text-white/50 text-sm mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-white/20" />
                {language === 'ar' ? 'تابعنا على وسائل التواصل' : 'Follow us on social media'}
                <span className="w-8 h-px bg-white/20" />
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative w-14 h-14 rounded-xl
                      flex items-center justify-center
                      bg-white/5 border border-white/10
                      text-white/60 hover:text-white
                      transition-all duration-300
                      hover:scale-110 hover:shadow-lg
                      ${social.bgColor}
                      hover:border-transparent
                    `}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#061A46] text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#08CBE8]/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h3>
              <p className="text-white/40 text-sm">
                {language === 'ar' 
                  ? 'سنرد عليك في أقرب وقت ممكن' 
                  : 'We\'ll get back to you as soon as possible'
                }
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    {data.form.name}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#08CBE8]/20"
                    placeholder={data.form.name}
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    {data.form.email}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#08CBE8]/20"
                    placeholder={data.form.email}
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  {language === 'ar' ? 'الموضوع' : 'Subject'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#08CBE8]/20"
                  placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  {data.form.message}
                </label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#08CBE8]/20 resize-none"
                  placeholder={data.form.message}
                />
              </div>
              <button 
                type="submit"
                className="group w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] text-white font-semibold hover:shadow-[0_10px_40px_rgba(8,203,232,0.3)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>{data.form.submit}</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};