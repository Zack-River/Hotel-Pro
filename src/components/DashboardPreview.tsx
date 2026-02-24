import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CheckCircle2, TrendingUp } from "lucide-react";

const tabs = [
  { id: "bookings", name: "الحجوزات" },
  { id: "reports", name: "التقارير" },
  { id: "rooms", name: "الغرف" },
  { id: "staff", name: "الموظفون" },
];

const data = [
  { name: "يناير", bookings: 450, revenue: 45000 },
  { name: "فبراير", bookings: 380, revenue: 38000 },
  { name: "مارس", bookings: 520, revenue: 55000 },
  { name: "أبريل", bookings: 480, revenue: 49000 },
  { name: "مايو", bookings: 610, revenue: 65000 },
  { name: "يونيو", bookings: 590, revenue: 62000 },
  { name: "يوليو", bookings: 750, revenue: 85000 },
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-gradient-to-b from-cream-base via-[#0D1B2A] to-[#0D1B2A] text-white overflow-hidden min-h-[auto] lg:min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-display font-bold mb-4 leading-tight text-primary-deep">
            كل ما تحتاجه في مكان واحد
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto text-base md:text-lg font-sans">
            لوحة تحكم شاملة تمنحك رؤية كاملة لأداء فندقك، مع أدوات متقدمة لإدارة
            كل التفاصيل.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-[10px] rounded-[12px] p-1 border border-gold-primary/20 h-[48px] md:h-[56px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-[28px] py-2 rounded-[8px] text-[13px] md:text-[15px] font-medium transition-all duration-300 font-sans ${
                  activeTab === tab.id
                    ? "bg-gold-primary text-primary-deep shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mockup Container */}
        <div className="relative mx-auto max-w-[900px]">
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute -left-12 top-20 bg-primary-mid/90 backdrop-blur-md border border-gold-primary/20 p-4 rounded-xl shadow-2xl items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-success" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-sans">حجز جديد — غرفة 204</div>
              <div className="text-xs text-white/60 font-sans">منذ دقيقتين</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:flex absolute -right-12 bottom-20 bg-primary-mid/90 backdrop-blur-md border border-gold-primary/20 p-4 rounded-xl shadow-2xl items-center gap-4 z-20"
          >
            <div>
              <div className="text-xs text-white/60 mb-1 font-sans">إيرادات اليوم</div>
              <div className="text-lg font-bold text-gold-primary font-mono">12,450 ر.س</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-gold-primary" />
            </div>
          </motion.div>

          {/* Main Preview */}
          <div className="relative bg-[#0D1B2A] rounded-[20px] border border-gold-primary/20 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Browser/Window Header */}
            <div className="bg-[#1A2E4A] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-4 py-1 text-xs text-white/40 flex items-center gap-2 font-mono">
                <span className="w-3 h-3 rounded-sm bg-white/20"></span>
                hotelpro.app/dashboard
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 h-[440px] md:h-auto min-h-[500px] bg-[#0D1B2A]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col"
                >
                  {/* Dynamic Content based on Tab */}
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-semibold font-serif text-white">
                      {tabs.find((t) => t.id === activeTab)?.name}
                    </h3>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded bg-white/5"></div>
                      <div className="w-8 h-8 rounded bg-white/5"></div>
                      <div className="w-24 h-8 rounded bg-gold-primary/20 text-gold-primary flex items-center justify-center text-xs font-medium border border-gold-primary/30">
                        تصدير
                      </div>
                    </div>
                  </div>

                  {activeTab === "reports" ? (
                    <div className="flex-1 w-full h-[300px] md:h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={data}
                          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.05)"
                            vertical={false}
                          />
                          <XAxis
                            dataKey="name"
                            stroke="rgba(255,255,255,0.4)"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            fontFamily="DM Sans"
                          />
                          <YAxis
                            stroke="rgba(255,255,255,0.4)"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                            fontFamily="JetBrains Mono"
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#1A2E4A",
                              borderColor: "rgba(201,168,76,0.2)",
                              borderRadius: "8px",
                              fontFamily: "DM Sans"
                            }}
                            itemStyle={{ color: "#C9A84C" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#C9A84C"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#0D1B2A", strokeWidth: 2 }}
                            activeDot={{ r: 6 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="bookings"
                            stroke="#1B6B7B"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#0D1B2A", strokeWidth: 2 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 pr-2">
                      <div className="md:col-span-2 space-y-4">
                        <div className="bg-white/5 rounded-xl border border-white/5 p-5 flex flex-col justify-between">
                           <div className="text-white/50 text-sm mb-2 font-sans">إجمالي الغرف المتاحة</div>
                           <div className="text-3xl font-bold text-white font-mono">42 <span className="text-sm text-success font-normal font-sans">+5 عن الأمس</span></div>
                        </div>
                        <div className="bg-white/5 rounded-xl border border-white/5 p-5 space-y-4">
                           <div className="text-white/80 font-medium mb-2 font-sans">حالة الغرف (الطابق الأول)</div>
                           {[
                             { room: '101', type: 'جناح تنفيذي', status: 'مشغولة', color: 'bg-red-500/20 text-red-400' },
                             { room: '102', type: 'غرفة مزدوجة', status: 'متاحة', color: 'bg-success/20 text-success' },
                             { room: '103', type: 'غرفة مفردة', status: 'تنظيف', color: 'bg-gold-primary/20 text-gold-primary' },
                             { room: '104', type: 'جناح ملكي', status: 'مشغولة', color: 'bg-red-500/20 text-red-400' },
                           ].map((r, i) => (
                             <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                               <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold font-mono text-white">{r.room}</div>
                                 <div>
                                   <div className="text-sm text-white/90 font-sans">{r.type}</div>
                                   <div className="text-xs text-white/50 font-sans">تنظيف يومي</div>
                                 </div>
                               </div>
                               <div className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${r.color}`}>{r.status}</div>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gold-primary/10 rounded-xl border border-gold-primary/20 p-5 flex flex-col justify-between">
                           <div className="text-gold-light text-sm mb-2 font-sans">نسبة الإشغال الحالية</div>
                           <div className="text-4xl font-bold text-gold-primary font-mono">85%</div>
                        </div>
                        <div className="bg-white/5 rounded-xl border border-white/5 p-5 space-y-5">
                           <div className="text-white/80 font-medium mb-2 font-sans">توزيع الحجوزات</div>
                           <div>
                             <div className="flex justify-between text-xs mb-1 font-sans"><span className="text-white/70">Booking.com</span><span className="text-white font-mono">45%</span></div>
                             <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                               <div className="w-[45%] h-full bg-accent-teal"></div>
                             </div>
                           </div>
                           <div>
                             <div className="flex justify-between text-xs mb-1 font-sans"><span className="text-white/70">مباشر (الموقع)</span><span className="text-white font-mono">35%</span></div>
                             <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                               <div className="w-[35%] h-full bg-success"></div>
                             </div>
                           </div>
                           <div>
                             <div className="flex justify-between text-xs mb-1 font-sans"><span className="text-white/70">Expedia</span><span className="text-white font-mono">20%</span></div>
                             <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                               <div className="w-[20%] h-full bg-gold-primary"></div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
