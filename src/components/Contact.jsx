import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Award,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const Contact = () => {
  const { language, isRTL, t } = useLanguage();
  const data = t.contact;

  // ===== STATE للفورم =====
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // ===== معلومات إضافية =====
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

  // ===== معالج التغيير في الحقول =====
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ===== معالج إرسال الفورم =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // API 
    const API_URL = 'https://your-api-endpoint.com/api/contact';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: language === 'ar' 
            ? '✅ تم إرسال رسالتك بنجاح! سنرد عليك قريباً.' 
            : '✅ Your message has been sent successfully! We\'ll get back to you soon.'
        });
        // إعادة تعيين الفورم
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || (language === 'ar' 
            ? '❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.' 
            : '❌ An error occurred. Please try again.')
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: language === 'ar' 
          ? '❌ حدث خطأ في الاتصال. تأكد من اتصالك بالإنترنت.' 
          : '❌ Connection error. Please check your internet connection.'
      });
    }

    setIsLoading(false);
  };

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
                  <bdi className="text-xs block" dir="ltr">{data.email}</bdi>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#08CBE8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#08CBE8]/20 transition">
                  <Phone size={15} className="text-[#08CBE8]" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40">{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</p>
                  <bdi className="text-xs block" dir="ltr">{data.phone}</bdi>
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
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#08CBE8]/20 transition-all duration-500">
            <div className="mb-3">
              <h3 className="text-base font-bold text-white mb-0.5">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h3>
              <p className="text-white/40 text-[10px]">
                {language === 'ar' 
                  ? 'جميع الحقول مطلوبة' 
                  : 'All fields are required'
                }
              </p>
            </div>

            {/* رسالة الحالة */}
            {status.message && (
              <div className={`mb-3 p-2.5 rounded-lg flex items-start gap-2 text-xs ${
                status.type === 'success' 
                  ? 'bg-[#0BAA9A]/20 border border-[#0BAA9A]/30 text-[#0BAA9A]' 
                  : 'bg-red-500/20 border border-red-500/30 text-red-400'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle size={14} className="shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                )}
                <span className="leading-relaxed">{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="grid sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-white/70 text-[10px] font-medium mb-1">
                    {data.form.name} <span className="text-[#08CBE8]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20"
                    placeholder={data.form.name}
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-[10px] font-medium mb-1">
                    {data.form.email} <span className="text-[#08CBE8]">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    dir="ltr"
                    className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20 text-left"
                    placeholder={data.form.email}
                  />
                </div>
              </div>
              
              {/* حقل رقم الهاتف */}
              <div>
                <label className="block text-white/70 text-[10px] font-medium mb-1">
                  {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} <span className="text-[#08CBE8]">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  dir="ltr"
                  className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20 text-left"
                  placeholder={language === 'ar' ? 'مثال: 0123456789' : 'e.g. 0123456789'}
                />
              </div>
              
              <div>
                <label className="block text-white/70 text-[10px] font-medium mb-1">
                  {language === 'ar' ? 'الموضوع' : 'Subject'} <span className="text-[#08CBE8]">*</span>
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20"
                  placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                />
              </div>
              <div>
                <label className="block text-white/70 text-[10px] font-medium mb-1">
                  {data.form.message} <span className="text-[#08CBE8]">*</span>
                </label>
                <textarea 
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-xs focus:border-[#08CBE8] focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-[#08CBE8]/20 resize-none"
                  placeholder={data.form.message}
                />
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className={`group w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#1264F5] via-[#08CBE8] to-[#0BAA9A] text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:shadow-[0_8px_30px_rgba(8,203,232,0.3)] hover:scale-[1.02]'
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                  </>
                ) : (
                  <>
                    <span>{data.form.submit}</span>
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};