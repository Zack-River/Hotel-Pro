import { motion } from "motion/react";
import {
  CalendarDays,
  Users,
  CreditCard,
  LineChart,
  ConciergeBell,
  Globe,
  ArrowLeft,
} from "lucide-react";

const features = [
  {
    name: "إدارة الحجوزات المتقدمة",
    description:
      "نظام حجز ذكي مع تقويم تفاعلي ومنع التعارضات، يتيح لك رؤية شاملة لكل غرفك في الوقت الفعلي مع إمكانية التعديل السريع.",
    icon: CalendarDays,
    featured: true,
  },
  {
    name: "إدارة الموظفين",
    description:
      "جداول العمل، الصلاحيات، وتتبع الأداء لضمان سير العمل بسلاسة وكفاءة عالية.",
    icon: Users,
  },
  {
    name: "الفواتير والمدفوعات",
    description:
      "فواتير تلقائية، تقارير مالية دقيقة، ودعم متعدد العملات لتسهيل المعاملات.",
    icon: CreditCard,
  },
  {
    name: "تقارير وتحليلات",
    description:
      "لوحة بيانات حية مع رسوم بيانية تفصيلية لمتابعة أداء فندقك واتخاذ قرارات صائبة.",
    icon: LineChart,
  },
  {
    name: "طلبات الخدمة",
    description:
      "تتبع طلبات الغرف والخدمات الداخلية لحظيًا لضمان رضا النزلاء وسرعة الاستجابة.",
    icon: ConciergeBell,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-[60px] md:py-[80px] lg:py-[120px] bg-cream-base"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold-primary"></div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold-muted font-sans">
              كل ما تحتاجه
            </h2>
            <div className="h-[1px] w-8 bg-gold-primary"></div>
          </div>
          <p className="mt-2 text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-primary-deep font-display leading-tight">
            ميزات مصممة لراحة بالك
          </p>
          <p className="mt-6 text-lg leading-8 text-text-mid font-sans">
            نقدم لك مجموعة متكاملة من الأدوات التي تساعدك على إدارة فندقك
            بكفاءة، تقليل الجهد اليدوي، وزيادة أرباحك.
          </p>
        </div>

        <div className="mx-auto mt-16 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`group flex flex-col bg-warm-white p-[24px] md:p-[28px_24px] lg:p-[40px_32px] rounded-[16px] border border-border transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:bg-gradient-to-br hover:from-primary-mid hover:to-primary-deep hover:shadow-[0_24px_60px_rgba(13,27,42,0.3)] min-h-[auto] lg:min-h-[280px] ${
                  feature.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-[52px] w-[52px] lg:h-[64px] lg:w-[64px] items-center justify-center rounded-[12px] bg-gradient-to-br from-gold-primary/15 to-gold-primary/5 border border-gold-primary/30 group-hover:bg-gold-primary/20 transition-colors">
                      <feature.icon
                        className="h-[24px] w-[24px] lg:h-[28px] lg:w-[28px] text-gold-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className="text-[22px] lg:text-[28px] font-semibold leading-7 text-primary-deep font-serif group-hover:text-white transition-colors mb-4">
                    {feature.name}
                  </h3>

                  <p className="flex-auto text-base leading-7 text-text-mid font-sans group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>

                  {feature.featured && (
                    <div className="mt-6 hidden md:block rounded-xl overflow-hidden border border-border group-hover:border-white/10 transition-colors">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                        alt="Dashboard Preview"
                        className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gold-muted group-hover:text-gold-light transition-colors flex items-center gap-2 w-fit"
                    >
                      اعرف أكثر{" "}
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
