import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمود",
    role: "مدير عام",
    hotel: "فندق الواحة",
    country: "🇸🇦",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    quote:
      "منذ استخدامنا للنظام، زادت نسبة الإشغال لدينا بـ 30% بفضل التكامل السلس مع منصات الحجز العالمية. الدعم الفني استثنائي.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة خالد",
    role: "مالكة",
    hotel: "شقق سارة الفندقية",
    country: "🇦🇪",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    quote:
      "أفضل استثمار قمنا به هذا العام. واجهة المستخدم بسيطة جداً لدرجة أن الموظفين الجدد يتعلمونها في يوم واحد.",
    rating: 5,
  },
  {
    id: 3,
    name: "عمر حسن",
    role: "مدير العمليات",
    hotel: "منتجع النخيل",
    country: "🇪🇬",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    quote:
      "التقارير المالية الدقيقة ساعدتنا في تقليل النفقات وتوجيه التسويق بشكل أفضل. نظام متكامل بكل معنى الكلمة.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-[60px] md:py-[80px] lg:py-[120px] bg-primary-deep overflow-hidden relative"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      </div>
      
      {/* Decorative Quote Icon */}
      <Quote className="absolute top-20 right-20 w-[200px] h-[200px] text-gold-primary/5 -rotate-12 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold-primary"></div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold-muted font-sans">
              آراء العملاء
            </h2>
            <div className="h-[1px] w-8 bg-gold-primary"></div>
          </div>
          <p className="mt-2 text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-white font-display leading-tight">
            قصص نجاح عملائنا
          </p>
          <p className="mt-6 text-lg leading-8 text-white/70 font-sans max-w-2xl mx-auto">
            انضم إلى آلاف الفنادق التي تثق بنا لإدارة عملياتها اليومية.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white/20 !w-2 !h-2 !transition-all !duration-300',
              bulletActiveClass: '!bg-gold-primary !w-6 !rounded-full'
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="pb-20"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-primary-mid/50 backdrop-blur-md p-[32px] md:p-[48px] lg:p-[64px] rounded-[24px] border border-gold-primary/20 text-center relative mx-4 md:mx-0">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto mb-8 rounded-full overflow-hidden border-2 border-gold-primary/50 shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                    ))}
                  </div>

                  <p className="text-[20px] md:text-[28px] font-serif text-white leading-relaxed mb-10 relative inline-block max-w-3xl">
                    <span className="text-[60px] text-gold-primary/20 absolute -top-8 -right-8 font-serif leading-none">
                      "
                    </span>
                    {testimonial.quote}
                    <span className="text-[60px] text-gold-primary/20 absolute -bottom-12 -left-8 font-serif leading-none">
                      "
                    </span>
                  </p>

                  <div className="relative inline-block">
                    <div className="h-[1px] w-12 bg-gold-primary/50 mx-auto mb-4"></div>
                    <h4 className="font-bold text-white text-lg font-sans mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gold-light font-sans">
                      {testimonial.role}، {testimonial.hotel}{" "}
                      <span className="opacity-80 ml-1">{testimonial.country}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
