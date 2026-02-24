import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Building2, Star, CalendarCheck, Headset } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "فندق مشترك",
    value: 2000,
    icon: Building2,
    suffix: "+",
  },
  {
    id: 2,
    name: "معدل رضا العملاء",
    value: 98,
    icon: Star,
    suffix: "%",
  },
  {
    id: 3,
    name: "حجز تمت إدارته",
    value: 500,
    icon: CalendarCheck,
    suffix: "K+",
  },
  {
    id: 4,
    name: "دعم فني متاح",
    value: 24,
    icon: Headset,
    suffix: "/7",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px"
  });

  return (
    <section className="py-[48px] lg:py-[80px] bg-cream-base relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative bg-warm-white border border-border rounded-[16px] p-[24px] lg:p-[40px_32px] transition-all duration-300 hover:-translate-y-1 hover:border-gold-primary hover:shadow-[0_12px_30px_rgba(201,168,76,0.1)] group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon Top Right (Left in RTL) */}
              <div className="absolute top-6 left-6 text-gold-primary/60">
                <stat.icon className="w-5 h-5" />
              </div>
              
              <div className="flex flex-col">
                {/* Number */}
                <div className="text-[48px] lg:text-[64px] font-display font-bold text-primary-deep leading-none mb-4">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                  <span className="text-gold-primary">{stat.suffix}</span>
                </div>
                
                {/* Gold Line */}
                <div className="h-[2px] w-[40px] bg-gold-primary mb-4 transition-all duration-300 group-hover:w-[60px]"></div>
                
                {/* Name */}
                <div className="text-text-mid font-sans text-base lg:text-lg">
                  {stat.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
