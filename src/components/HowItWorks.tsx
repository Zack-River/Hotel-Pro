import { motion } from "motion/react";
import { UserPlus, Hotel, Rocket, ArrowLeft } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "سجّل حسابك",
    description:
      "أنشئ حساباً مجانياً في أقل من دقيقة بدون الحاجة لبطاقة ائتمان.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "أضف فندقك",
    description: "أدخل بيانات فندقك، الغرف، والأسعار لبدء استقبال الحجوزات.",
    icon: Hotel,
  },
  {
    id: 3,
    title: "ابدأ الإدارة",
    description: "استمتع بلوحة تحكم متكاملة وراقب نمو أرباحك لحظة بلحظة.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-marble-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream-base/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold-primary"></div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold-muted font-sans">
              البدء سهل جداً
            </h2>
            <div className="h-[1px] w-8 bg-gold-primary"></div>
          </div>
          <p className="mt-2 text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-primary-deep font-display leading-tight">
            كيف يعمل النظام؟
          </p>
          <p className="mt-6 text-lg leading-8 text-text-mid font-sans max-w-2xl mx-auto">
            ثلاث خطوات بسيطة تفصلك عن إدارة فندقك باحترافية وسهولة تامة.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gold-primary/30 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Large Background Number */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-display font-bold text-primary-deep/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-primary/5">
                  0{step.id}
                </div>

                {/* Icon Container */}
                <div className="w-[96px] h-[96px] rounded-full bg-warm-white shadow-[0_8px_30px_rgba(13,27,42,0.08)] border border-border flex items-center justify-center relative mb-8 group-hover:border-gold-primary/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(201,168,76,0.15)] z-10">
                  <div className="absolute inset-2 rounded-full border border-dashed border-gold-primary/30 group-hover:rotate-180 transition-transform duration-1000 ease-in-out"></div>
                  <step.icon className="w-8 h-8 text-primary-deep group-hover:text-gold-primary transition-colors duration-300 relative z-10" />
                </div>

                <h3 className="text-[24px] font-bold text-primary-deep mb-4 font-serif relative z-10">
                  {step.title}
                </h3>
                <p className="text-text-mid font-sans leading-relaxed relative z-10 max-w-[280px]">
                  {step.description}
                </p>

                {/* Arrow for Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-8 text-gold-primary/50">
                    <ArrowLeft className="w-6 h-6 -rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
