import {
  Hotel,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  DollarSign,
  ArrowLeft
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white/70 pt-[80px] lg:pt-[120px] pb-8 border-t border-gold-primary/20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer CTA */}
        <div className="bg-gradient-to-br from-primary-mid to-primary-deep border border-gold-primary/30 rounded-[24px] p-[40px] md:p-[64px] mb-[80px] text-center relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[48px] font-display font-bold text-white mb-6 leading-tight">
              ارتقِ بتجربة ضيوفك اليوم
            </h2>
            <p className="text-lg text-white/80 font-sans mb-10">
              انضم إلى نخبة الفنادق التي تعتمد على تقنياتنا لتقديم خدمة استثنائية وإدارة سلسة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-primary text-primary-deep px-8 py-4 rounded-full font-bold font-sans hover:bg-gold-light transition-all duration-300 shadow-[0_4px_14px_rgba(201,168,76,0.3)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                ابدأ تجربتك المجانية
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>
              <button className="bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-bold font-sans hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                تحدث مع المبيعات
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-primary to-gold-muted flex items-center justify-center shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                <Hotel className="w-5 h-5 text-primary-deep" />
              </div>
              <span className="text-white font-serif text-[28px] font-bold tracking-wide">
                هوتيل برو
              </span>
            </div>
            <p className="text-[15px] leading-relaxed mb-8 max-w-sm font-sans text-white/60">
              نظام إدارة فنادق سحابي متكامل يهدف إلى تبسيط العمليات اليومية،
              زيادة الإيرادات، وتحسين تجربة النزلاء من خلال أدوات ذكية وسهلة
              الاستخدام.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:text-primary-deep hover:border-gold-primary transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:text-primary-deep hover:border-gold-primary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:text-primary-deep hover:border-gold-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:text-primary-deep hover:border-gold-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 font-serif text-lg tracking-wide">المنتج</h4>
            <ul className="space-y-4 text-[15px] font-sans">
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  المميزات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  الأسعار
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  التكاملات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  سجل التحديثات
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-serif text-lg tracking-wide">الشركة</h4>
            <ul className="space-y-4 text-[15px] font-sans">
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  الوظائف
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  الصحافة
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-serif text-lg tracking-wide">الدعم</h4>
            <ul className="space-y-4 text-[15px] font-sans">
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  مركز المساعدة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  اتصل بنا
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  حالة النظام
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-primary/0 group-hover:bg-gold-primary transition-colors"></span>
                  توثيق API
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] font-sans">
          <p className="text-white/50">© {new Date().getFullYear()} هوتيل برو. جميع الحقوق محفوظة.</p>

          <div className="flex items-center gap-6 text-white/50">
            <a href="#" className="hover:text-gold-primary transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-gold-primary transition-colors">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-gold-primary transition-colors">
              ملفات تعريف الارتباط
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-gold-primary transition-colors text-white/70">
              <Globe className="w-4 h-4" />
              العربية
            </button>
            <button className="flex items-center gap-2 hover:text-gold-primary transition-colors text-white/70">
              <DollarSign className="w-4 h-4" />
              USD
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
