import { motion } from "motion/react";
import { Play, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] md:min-h-[90vh] lg:min-h-screen flex items-center pt-[100px] md:pt-[120px] lg:pt-[160px] pb-[60px] lg:pb-[80px] overflow-hidden bg-primary-deep">
      {/* Complex Background */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Image */}
        <img
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Hotel"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        {/* Layer 2: Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary-mid/80 to-primary-deep"></div>
        {/* Layer 3: Noise Texture */}
        <div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
        {/* Layer 4: Grid Lines */}
        <div className="absolute inset-0 bg-grid-lines"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-white text-right max-w-[640px]">
            {/* Gold Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="h-[1px] w-[60px] bg-gold-primary mb-8 origin-right"
            ></motion.div>

            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-display font-bold leading-[1.1] mb-6">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                أدر فندقك بـ <span className="text-gold-primary italic">ذكاء</span>،
              </motion.div>
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                وقدّم تجربة لا تُنسى
              </motion.div>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-white/80 mb-10 max-w-xl leading-relaxed font-sans"
            >
              نظام إدارة فنادق متكامل يجمع كل ما تحتاجه من حجوزات، تقارير،
              وإدارة موظفين في منصة واحدة سهلة الاستخدام.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="bg-gold-primary hover:bg-gold-light text-primary-deep font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_14px_rgba(201,168,76,0.2)] hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] text-lg">
                ابدأ تجربتك المجانية
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <Play className="w-5 h-5 text-gold-primary" />
                شاهد العرض التوضيحي
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-4 text-sm text-white/70"
            >
              <div className="flex -space-x-2 space-x-reverse">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`User ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-primary-deep object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-primary mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-white font-bold ml-1 font-mono">4.9/5</span>
                </div>
                <p className="font-sans">أكثر من 2,000 فندق يثق بنا 🇸🇦 🇦🇪 🇪🇬</p>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:block relative max-w-[560px] mx-auto"
          >
            <motion.div
              animate={{ y: [-12, 0, -12] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative rounded-[16px] overflow-hidden border border-gold-primary/20 shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,168,76,0.2)] bg-primary-deep rotate-[1.5deg]"
            >
              <div className="bg-primary-mid/80 backdrop-blur-md border-b border-white/10 p-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="p-5 grid grid-cols-3 gap-5 h-[400px]">
                {/* Sidebar */}
                <div className="col-span-1 border-l border-white/10 pl-5 space-y-4">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded bg-gold-primary/20 flex items-center justify-center text-gold-primary font-bold font-serif">H</div>
                    <div className="text-white font-bold font-serif">فندق الواحة</div>
                  </div>
                  <div className="h-8 w-full bg-white/10 rounded-lg"></div>
                  <div className="h-8 w-3/4 bg-white/5 rounded-lg"></div>
                  <div className="h-8 w-5/6 bg-white/5 rounded-lg"></div>
                  <div className="h-8 w-2/3 bg-white/5 rounded-lg"></div>
                </div>
                {/* Main Content */}
                <div className="col-span-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-white/50 text-xs mb-1 font-sans">الإشغال اليوم</div>
                      <div className="text-2xl font-bold text-white font-mono">85%</div>
                    </div>
                    <div className="bg-gold-primary/10 p-4 rounded-xl border border-gold-primary/20">
                      <div className="text-gold-light text-xs mb-1 font-sans">إيرادات اليوم</div>
                      <div className="text-2xl font-bold text-gold-primary font-mono">12,450 ر.س</div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 h-48">
                    <div className="text-white/50 text-xs mb-3 font-sans">الحجوزات الأخيرة</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80" className="w-8 h-8 rounded-full object-cover" alt="User" />
                          <div>
                            <div className="text-sm text-white/90 font-sans">أحمد محمد</div>
                            <div className="text-xs text-white/50 font-sans">جناح ملكي - 3 ليالي</div>
                          </div>
                        </div>
                        <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full font-sans">مؤكد</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg">
                        <div className="flex items-center gap-3">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80" className="w-8 h-8 rounded-full object-cover" alt="User" />
                          <div>
                            <div className="text-sm text-white/90 font-sans">سارة خالد</div>
                            <div className="text-xs text-white/50 font-sans">غرفة مزدوجة - ليلة</div>
                          </div>
                        </div>
                        <span className="text-xs bg-gold-primary/20 text-gold-primary px-2 py-1 rounded-full font-sans">انتظار</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-sans">اكتشف المزيد</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
