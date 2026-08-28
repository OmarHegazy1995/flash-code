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
    <section id="contact" className="min-h-[70vh] bg-[#061A46] py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-56 h-56 bg-[#1264F5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#08CBE8]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#08CBE8]/20 bg-[#08CBE8]/[0.06] backdrop-blur-md mb-4">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#08CBE8] opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#08CBE8]" />
            </span>
            <span className="text-[10px] font-medium text-[#08CBE8] tracking-wide">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">
            {data.title}
          </h2>
          <p className="text-sm text-white/60 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1.5">{data.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{data.description}</p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-2.5">
              <div className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#08CBE8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08CBE8]/20 transition">
                  <Mail size={15} className="text-[#08CBE8]" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                  <span className="text-xs">{data.email}</span>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#08CBE8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08CBE8]/20 transition">
                  <Phone size={15} className="text-[#08CBE8]" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40">{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</p>
                  <span className="text-xs">{data.phone}</span>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#08CBE8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08CBE8]/20 transition">
                  <MapPin size={15} className="text-[#08CBE8]" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40">{language === 'ar' ? 'العنوان' : 'Address'}</p>
                  <span className="text-xs">{data.address}</span>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#08CBE8]/30 transition-all duration-300 hover:bg-white/10">
                    <Icon size={14} className={`${card.color} mb-1`} />
                    <p className="text-white/40 text-[9px]">{card.title}</p>
                    <p className="text-white text-[11px] font-semibold">{card.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Contact Form - مصغر */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#08CBE8]/20 transition-all duration-500">
            <div className="mb-3">
              <h3 className="text-base font-bold text-white mb-0.5">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h3>
              <p className="text-white/40 text-[10px]">
                {language === 'ar' 
                  ? 'سنرد عليك في أقرب وقت ممكن' 
                  : 'We\'ll get back to you as soon as possible'
                }
              </p>
            </div>

            <form className="space-y-2.5">
              <div className="grid sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-white/70 text-[10px] font-medium mb-1">
                    {data.form.name}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20"
                    placeholder={data.form.name}
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-[10px] font-medium mb-1">
                    {data.form.email}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20"
                    placeholder={data.form.email}
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-[10px] font-medium mb-1">
                  {language === 'ar' ? 'الموضوع' : 'Subject'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20"
                  placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                />
              </div>
              <div>
                <label className="block text-white/70 text-[10px] font-medium mb-1">
                  {data.form.message}
                </label>
                <textarea 
                  rows="3"
                  className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20 resize-none"
                  placeholder={data.form.message}
                />
              </div>
              <button 
                type="submit"
                className="group w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] text-white font-semibold text-xs hover:shadow-[0_8px_30px_rgba(8,203,232,0.3)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>{data.form.submit}</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};