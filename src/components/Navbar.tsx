import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hotel, Menu, X, Globe } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "المميزات", to: "features" },
    { name: "الأسعار", to: "pricing" },
    { name: "آراء العملاء", to: "testimonials" },
    { name: "اتصل بنا", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary-deep/92 backdrop-blur-[20px] border-b border-gold-primary/15 py-4 md:py-5"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 md:h-12">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <Hotel className="w-8 h-8 text-gold-primary" />
            <span className="text-white font-serif text-2xl font-bold tracking-wide">
              هوتيل برو
            </span>
            <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-primary transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={700}
                className="relative text-white/90 hover:text-gold-light cursor-pointer transition-colors font-medium group py-2"
              >
                {link.name}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-primary opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white/80 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors">
              <Globe className="w-4 h-4" />
              عربي
            </button>
            <div className="flex items-center gap-3">
              <button className="text-white border border-gold-primary/40 hover:border-gold-primary hover:bg-gold-primary/10 transition-all duration-300 font-medium px-5 py-2 rounded-lg text-sm">
                تسجيل الدخول
              </button>
              <button className="bg-gold-primary hover:bg-gold-light text-primary-deep font-bold px-6 py-2 rounded-lg transition-all duration-300 shadow-[0_4px_14px_rgba(201,168,76,0.2)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.3)] hover:-translate-y-0.5 text-sm">
                ابدأ مجاناً
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-gold-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden h-screen"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-primary-deep z-50 md:hidden flex flex-col border-l border-white/10 shadow-2xl"
            >
              <div className="p-5 flex justify-between items-center border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Hotel className="w-6 h-6 text-gold-primary" />
                  <span className="text-white font-serif text-xl font-bold">
                    هوتيل برو
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-white/90 hover:text-gold-primary text-lg font-medium border-b border-white/5 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-white/10 space-y-4 bg-primary-deep">
                <button className="w-full text-white border border-gold-primary/40 hover:border-gold-primary font-medium px-4 py-3 rounded-lg transition-colors">
                  تسجيل الدخول
                </button>
                <button className="w-full bg-gold-primary hover:bg-gold-light text-primary-deep font-bold px-4 py-3 rounded-lg transition-colors shadow-lg shadow-gold-primary/20">
                  ابدأ مجاناً
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
