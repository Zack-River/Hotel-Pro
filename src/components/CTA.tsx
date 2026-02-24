import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShieldCheck, ArrowLeft, Star } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
});

type FormData = z.infer<typeof schema>;

export default function CTA() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    alert("تم التسجيل بنجاح! سنتواصل معك قريباً.");
  };

  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden bg-cream-base">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary-deep rounded-[32px] p-[40px] md:p-[80px] relative overflow-hidden shadow-[0_30px_60px_rgba(13,27,42,0.15)] border border-gold-primary/20">
          {/* Inner Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
              ))}
            </div>
            
            <h2 className="text-[36px] md:text-[52px] font-display font-bold text-white mb-6 leading-tight">
              جاهز للارتقاء بفندقك إلى <span className="text-gold-primary italic">مستوى الخمس نجوم؟</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
              انضم إلى نخبة الفنادق التي تعتمد على تقنياتنا لتقديم خدمة استثنائية وإدارة سلسة. ابدأ تجربتك المجانية اليوم.
            </p>

            <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[24px] border border-white/10 shadow-2xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="flex-1 text-right relative">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="الاسم الكامل"
                    className={`w-full px-6 py-4 rounded-full border bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 transition-all font-sans ${
                      errors.name ? "border-red-400/50" : "border-white/10 hover:border-white/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 absolute -bottom-6 right-4">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex-1 text-right relative">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="البريد الإلكتروني للعمل"
                    className={`w-full px-6 py-4 rounded-full border bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 transition-all font-sans ${
                      errors.email ? "border-red-400/50" : "border-white/10 hover:border-white/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 absolute -bottom-6 right-4">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gold-primary text-primary-deep font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-gold-light shadow-[0_4px_14px_rgba(201,168,76,0.3)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.4)] hover:-translate-y-1 group font-sans whitespace-nowrap mt-4 md:mt-0"
                >
                  {isSubmitting ? (
                    "جاري التسجيل..."
                  ) : (
                    <>
                      ابدأ تجربتك المجانية
                      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/50 font-sans">
                <ShieldCheck className="w-4 h-4 text-gold-primary" />
                <span>بياناتك محمية بأعلى معايير الأمان العالمية. لا نطلب بطاقة ائتمان.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
