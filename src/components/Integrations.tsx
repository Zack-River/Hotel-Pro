import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const integrations = [
  { name: "Booking.com", logo: "https://cdn.simpleicons.org/booking.com/003580" },
  { name: "Expedia", logo: "https://cdn.simpleicons.org/expedia/0000A0" },
  { name: "Airbnb", logo: "https://cdn.simpleicons.org/airbnb/FF5A5F" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/008CDD" },
  { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { name: "Google Calendar", logo: "https://cdn.simpleicons.org/googlecalendar/4285F4" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "QuickBooks", logo: "https://cdn.simpleicons.org/quickbooks/2CA01C" },
];

export default function Integrations() {
  return (
    <section className="h-[80px] md:h-[100px] bg-marble-light py-6 flex items-center overflow-hidden border-y border-gold-primary/20 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1920px] mx-auto w-full flex items-center px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="hidden lg:block shrink-0 ml-12 border-l border-gold-primary/30 pl-12">
          <p className="text-primary-deep text-sm font-medium font-sans uppercase tracking-widest">
            شركاء النجاح
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative flex-1 min-w-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="integrations-swiper"
          >
            {integrations.map((integration, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-40 hover:opacity-100 h-[32px]">
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="h-[24px] md:h-[32px] w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
