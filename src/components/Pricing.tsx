import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    target: "فنادق صغيرة",
    price: { monthly: 49, yearly: 39 },
    features: [
      { name: "إدارة حتى 20 غرفة", included: true },
      { name: "نظام الحجوزات الأساسي", included: true },
      { name: "دعم فني عبر البريد", included: true },
      { name: "تقارير مبسطة", included: true },
      { name: "تكامل مع OTA", included: false },
      { name: "إدارة الموظفين", included: false },
    ],
  },
  {
    name: "Professional",
    target: "الأكثر شيوعاً",
    popular: true,
    price: { monthly: 99, yearly: 79 },
    features: [
      { name: "إدارة حتى 100 غرفة", included: true },
      { name: "نظام الحجوزات المتقدم", included: true },
      { name: "دعم فني 24/7", included: true },
      { name: "تقارير وتحليلات مفصلة", included: true },
      { name: "تكامل مع OTA", included: true },
      { name: "إدارة الموظفين الأساسية", included: true },
    ],
  },
  {
    name: "Enterprise",
    target: "سلاسل فندقية",
    price: { monthly: 249, yearly: 199 },
    features: [
      { name: "غرف غير محدودة", included: true },
      { name: "نظام الحجوزات المخصص", included: true },
      { name: "مدير حساب شخصي", included: true },
      { name: "تقارير مخصصة", included: true },
      { name: "تكامل مع جميع OTA", included: true },
      { name: "إدارة الموظفين المتقدمة", included: true },
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-[64px] lg:py-[120px] bg-cream-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold-primary"></div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold-muted font-sans">
              الأسعار
            </h2>
            <div className="h-[1px] w-8 bg-gold-primary"></div>
          </div>
          <p className="mt-2 text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-primary-deep font-display leading-tight mb-6">
            خطط تناسب حجم أعمالك
          </p>
          <p className="text-text-mid max-w-2xl mx-auto text-lg mb-10 font-sans">
            اختر الخطة التي تلبي احتياجات فندقك، مع إمكانية الترقية في أي وقت.
          </p>

          {/* Toggle Pricing */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative flex items-center bg-border p-1 rounded-full w-[240px] h-[44px]">
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary-deep rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isYearly ? "left-1" : "left-[calc(50%+3px)]"
                }`}
              ></div>
              <button
                onClick={() => setIsYearly(true)}
                className={`relative flex-1 text-sm font-medium z-10 transition-colors duration-300 font-sans ${
                  isYearly ? "text-white" : "text-text-mid"
                }`}
              >
                سنوي
              </button>
              <button
                onClick={() => setIsYearly(false)}
                className={`relative flex-1 text-sm font-medium z-10 transition-colors duration-300 font-sans ${
                  !isYearly ? "text-white" : "text-text-mid"
                }`}
              >
                شهري
              </button>
            </div>
            
            <AnimatePresence>
              {isYearly && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="text-success text-sm font-medium bg-success/10 px-3 py-1 rounded-full font-sans"
                >
                  وفر 20% مع الدفع السنوي
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Stack / Desktop Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto pb-8 lg:pb-0">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`relative flex flex-col p-[32px_24px] lg:p-[48px_40px] rounded-[20px] ${
                plan.popular
                  ? "bg-gradient-to-br from-primary-mid to-primary-deep text-white shadow-[0_40px_80px_rgba(13,27,42,0.4),0_0_0_1px_rgba(201,168,76,0.3)] border border-gold-primary/50 z-10 lg:scale-[1.06]"
                  : "bg-warm-white border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-primary to-gold-light text-primary-deep text-[12px] font-bold px-[20px] py-[6px] rounded-full shadow-md whitespace-nowrap font-sans">
                  الأكثر طلباً
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`text-[28px] font-bold font-serif mb-2 ${plan.popular ? "text-white" : "text-primary-deep"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-sans ${plan.popular ? "text-white/70" : "text-text-mid"}`}
                >
                  {plan.target}
                </p>
              </div>

              <div className="mb-8 flex items-baseline font-serif">
                <span className={`text-[44px] lg:text-[56px] font-bold leading-none ${plan.popular ? "text-white" : "text-primary-deep"}`}>
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span
                  className={`text-lg font-medium ml-2 font-sans ${plan.popular ? "text-white/70" : "text-text-mid"}`}
                >
                  /شهر
                </span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-gold-primary/20" : "bg-success/10"}`}>
                        <Check
                          className={`w-3 h-3 ${plan.popular ? "text-gold-primary" : "text-success"}`}
                        />
                      </div>
                    ) : (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-white/5" : "bg-text-subtle/10"}`}>
                        <X
                          className={`w-3 h-3 ${plan.popular ? "text-white/30" : "text-text-subtle/40"}`}
                        />
                      </div>
                    )}
                    <span
                      className={`text-[15px] font-sans ${
                        !feature.included
                          ? plan.popular
                            ? "text-white/50 line-through"
                            : "text-text-subtle/60 line-through"
                          : plan.popular
                            ? "text-white/90"
                            : "text-text-dark"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 font-sans ${
                  plan.popular
                    ? "bg-gold-primary text-primary-deep hover:bg-gold-light shadow-[0_4px_14px_rgba(201,168,76,0.2)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.3)] hover:-translate-y-1"
                    : "bg-primary-deep/5 text-primary-deep hover:bg-primary-deep/10 border border-primary-deep/10"
                }`}
              >
                اختر {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
