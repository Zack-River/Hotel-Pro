import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "هل يمكنني تجربة النظام قبل الاشتراك؟",
    answer:
      "نعم، نقدم فترة تجريبية مجانية لمدة 14 يوماً بكامل الصلاحيات، ولا نطلب إدخال بيانات البطاقة الائتمانية.",
  },
  {
    question: "هل النظام آمن ويحمي بيانات نزلائي؟",
    answer:
      "بالتأكيد. نستخدم تشفير 256-bit لحماية جميع البيانات، ونلتزم بأعلى معايير الأمان العالمية (PCI-DSS) لمعالجة المدفوعات.",
  },
  {
    question: "هل يمكن ربط النظام مع قنوات الحجز (OTA)؟",
    answer:
      "نعم، نوفر ربطاً مباشراً ثنائي الاتجاه مع Booking.com, Expedia, Airbnb وغيرها لتحديث التوافر والأسعار تلقائياً.",
  },
  {
    question: "ماذا لو احتجت إلى مساعدة فنية؟",
    answer:
      "فريق الدعم الفني متاح على مدار الساعة طوال أيام الأسبوع عبر الدردشة المباشرة، البريد الإلكتروني، والهاتف لمساعدتك في أي وقت.",
  },
  {
    question: "هل يمكنني استخدام النظام من هاتفي المحمول؟",
    answer:
      "نعم، النظام مصمم ليكون متجاوباً بالكامل مع جميع الأجهزة (كمبيوتر، جهاز لوحي، هاتف ذكي) لتدير فندقك من أي مكان.",
  },
  {
    question: "هل يمكنني ترقية خطتي لاحقاً؟",
    answer:
      "بالطبع، يمكنك الترقية أو تغيير خطتك في أي وقت من خلال لوحة التحكم الخاصة بك، وسيتم احتساب الفرق تلقائياً.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-marble-light relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold-primary"></div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold-muted font-sans">
              الأسئلة الشائعة
            </h2>
            <div className="h-[1px] w-8 bg-gold-primary"></div>
          </div>
          <p className="mt-2 text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-primary-deep font-display leading-tight mb-6">
            إجابات سريعة لاستفساراتك
          </p>
          <p className="text-text-mid text-lg font-sans">
            أكثر الأسئلة التي تصلنا من مديري الفنادق حول نظامنا.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b transition-colors duration-300 ${
                openIndex === index
                  ? "border-gold-primary"
                  : "border-border hover:border-gold-primary/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-right focus:outline-none group"
              >
                <span
                  className={`font-bold font-serif text-[20px] md:text-[24px] transition-colors duration-300 ${openIndex === index ? "text-gold-primary" : "text-primary-deep group-hover:text-gold-primary"}`}
                >
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? "bg-gold-primary text-primary-deep" : "bg-warm-white border border-border text-gold-primary group-hover:border-gold-primary/50"}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-text-mid leading-relaxed font-sans text-lg pr-4 border-r-2 border-gold-primary/30 mr-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
