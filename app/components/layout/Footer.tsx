"use client";

import { Phone, MessageCircle, ExternalLink, ArrowLeft } from "lucide-react";

const quickLinks = [
{ label: "من نحن", href: "#about" },
  { label: "كيف تعمل الخدمة", href: "#how-it-works" },
  { label: "سيارات مصدومة", href: "#cars" },
 
];

const otherSites = [
  { label: "ba3hacash.com", href: "https://ba3hacash.com/" },
  { label: "ahmed-alhawary.com", href: "https://ahmed-alhawary.com/" },
  {
    label: "alnada-cars.com",
    href: "https://alnada-cars.com/sell-your-car-scrap-jeddah/",
  },
  {
    label: "buying-damage-cars",
    href: "https://buying-damage-cars.vercel.app/",
  },
  {
    label: "silver-muffin",
    href: "https://silver-muffin-1fb75b.netlify.app/",
  },
];

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK = "https://wa.me/966508374454";
const TIKTOK_LINK = "https://www.tiktok.com/@ahmdtop3";

// Minimal TikTok glyph
function TikTokIcon({ size = 15, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.9-.83-1.47-1.98-1.6-3.24V2.2h-3.3v13.7c0 1.36-1.1 2.46-2.46 2.46a2.46 2.46 0 0 1-2.46-2.46c0-1.36 1.1-2.46 2.46-2.46.24 0 .48.03.7.1v-3.35a5.8 5.8 0 0 0-.7-.04A5.76 5.76 0 0 0 3.5 15.9a5.76 5.76 0 0 0 5.74 5.75 5.76 5.76 0 0 0 5.74-5.75V9.02a8.9 8.9 0 0 0 5.02 1.55V7.28a5.5 5.5 0 0 1-3.4-1.46Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
    id="contact"
    className="relative overflow-hidden bg-[#090e17] pt-8 sm:pt-12 border-t border-white/5" dir="rtl">
      {/* Background ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80%] h-64 rounded-full bg-[#38bdf8]/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        
        {/* Top CTA Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#162438] to-[#0f172a] border border-white/10 p-8 sm:p-12 mb-16 shadow-[0_0_40px_rgba(56,189,248,0.05)]">
          {/* Decorative shapes inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-bold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                متواجدون على مدار الساعة
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                جاهز تبيع سيارتك المصدومة؟
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                أرسل صور سيارتك الآن عبر الواتساب واحصل على أفضل تسعيرة وتقييم فوري خلال دقائق.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="اتصل بنا"
              >
                <Phone size={22} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-[#25D366] text-white font-bold text-lg py-3.5 pr-8 pl-4 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                راسلنا واتساب
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
          
          {/* Brand & Description (Takes more space) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              شراء السيارات المصدومة
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              نشتري سيارتك المصدومة أو التالفة أو التشليح في جميع أنحاء المملكة (جدة، مكة، الطائف) 
              بأفضل الأسعار مع توفير خدمة السحب مجاناً وإنهاء الإجراءات بضغطة زر.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a href={`tel:${PHONE_TEL}`} dir="ltr" className="group flex items-center justify-end gap-3 w-fit px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-[#38bdf8]/30 hover:bg-[#162438] transition-all">
                <span className="text-slate-300 font-medium tracking-wider group-hover:text-white transition-colors">{PHONE_DISPLAY}</span>
                <div className="w-8 h-8 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={14} />
                </div>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" dir="ltr" className="group flex items-center justify-end gap-3 w-fit px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all">
                <span className="text-slate-300 font-medium tracking-wider group-hover:text-white transition-colors">{PHONE_DISPLAY}</span>
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={15} />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-5">
            <span className="text-base font-bold text-white">روابط سريعة</span>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-[#38bdf8] transition-colors w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#38bdf8] transition-colors" />
                    <span className="group-hover:-translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <span className="text-base font-bold text-white">المدن التي نخدمها</span>
            <ul className="flex flex-col gap-3">
              {['جدة', 'مكة المكرمة', 'الطائف'].map((city, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-6 h-6 rounded-md bg-[#162438] border border-white/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  </div>
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Projects (Changed to Badges/Pills) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <span className="text-base font-bold text-white">مشاريعنا الأخرى</span>
            <div className="flex flex-wrap gap-2">
              {otherSites.map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/10 transition-all"
                >
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                  <span className="text-xs text-slate-300 group-hover:text-white transition-colors">{site.label}</span>
                </a>
              ))}
            </div>
            
            {/* Social Media Area */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors w-fit"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <TikTokIcon size={16} />
                </div>
                تابعنا على تيك توك
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/10">
          <p className="text-xs text-slate-500 text-center sm:text-right">
            © {new Date().getFullYear()} شراء السيارات المصدومة. جميع الحقوق محفوظة.
          </p>

          <a
            href="https://www.tiktok.com/@dev_flow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
          >
            صُنع بحب بواسطة{" "}
            <span className="font-bold text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
              DevFlow
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}