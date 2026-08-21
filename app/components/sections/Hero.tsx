import Image from "next/image";
import { Truck, ShieldCheck, Clock3, ArrowLeft, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background text-foreground py-20 sm:py-20"
      dir="rtl"
    >
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* TEXT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <p className="text-sm font-semibold text-[var(--brand-light)]">
              شراء سيارات مصدومة وتالفة — جدة
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] text-[var(--foreground)]">
              نشتري سيارتك
              <br />
              المصدومة بسعر عادل
            </h1>

            <p className="text-base text-[var(--foreground-secondary)] leading-relaxed max-w-md">
              تقييم واضح خلال دقائق عبر واتساب، وسطحة مجانية تصلك في جدة أينما
              كنت، مع إنهاء إجراءات نقل الملكية وإسقاط اللوحة.
            </p>

            <div className="flex items-center gap-2">
                <a
              href="https://wa.me/9665XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-fit flex items-center gap-4 rounded-full bg-white text-black! font-semibold py-1.5 pl-1.5 pr-6 hover:bg-gray-200 transition duration-300"
            >
              <span className="text-sm text-blue-950">
                راسلنا على واتساب الآن
              </span>
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <ArrowLeft size={18} />
              </div>
            </a>
                <a
              href="https://wa.me/9665XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4  flex items-center gap-4 rounded-full bg-[#1d7aa5]  text-black! font-semiboldpr-6 hover:bg-gray-200  justify-center shrink-0 w-13 h-13 transition duration-300"
            >
             
         
                <Phone size={18} className="text-white flex items-center justify-center" />
             
            </a>

             

            </div>
            {/* Bottom info panel — cities served, mirrors ZenDrive's model/swatch block */}
            <div className="hidden lg:flex flex-col gap-3 mt-6 pt-6 border-t border-[var(--border)] max-w-xs">
              <span className="text-sm font-semibold text-[var(--foreground)]">
                نخدم 3 مدن رئيسية
              </span>
              <div className="flex items-center gap-4 text-sm text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-light)]" />
                  جدة
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--sapphire-light)]" />
                  مكة
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--slate-400)]" />
                  الطائف
                </span>
              </div>
            </div>
          </div>

          {/* CAR COLUMN */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 flex justify-center items-center min-h-[340px] sm:min-h-[420px] lg:min-h-[520px]">
            {/* Depth glow — the one intentional blur on this page */}
            <div className="absolute left-1/2 bottom-8 -translate-x-1/2 w-[70%] h-24 rounded-full bg-[var(--brand)]/20 blur-[50px]" />

            {/* ZenDrive Style Ellipse Floor Line */}
            <div className="absolute top-[63%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-62.5 sm:h-87.5 border border-gray-700/50 rounded-[100%] z-0 pointer-events-none" />
            <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
              <Image
                src="/ChatGPT Image 21 أغسطس 2026، 01_20_30 ص.png"
                alt="سيارة تعرضت لحادث في جدة جاهزة للتقييم والبيع"
                width={900}
                height={650}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Floating badge — top right of car */}
            <div className="absolute top-2 sm:top-6 right-2 sm:right-4 z-20 flex flex-col items-end gap-1.5">
              <span className="text-[11px] font-semibold text-[var(--foreground-muted)] px-3">
                الحالة
              </span>
              <div className="flex items-center gap-2.5 bg-[var(--surface)]/90 backdrop-blur-sm border border-[var(--border)] rounded-2xl px-3.5 py-2.5 shadow-[var(--shadow-md)] max-w-[190px]">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--brand-pale)] flex items-center justify-center text-[var(--brand-light)]">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-xs font-medium text-[var(--foreground)] leading-snug">
                  نقيّم أي درجة ضرر، من خدش بسيط لتلف كامل
                </span>
              </div>
            </div>

            {/* Floating badge — mid left of car */}
            <div className="absolute top-1/3 left-1 sm:left-4 z-20 flex flex-col items-start gap-1.5">
              <span className="text-[11px] font-semibold text-[var(--foreground-muted)] px-3">
                الخدمة
              </span>
              <div className="flex items-center gap-2.5 bg-[var(--surface)]/90 backdrop-blur-sm border border-[var(--border)] rounded-2xl px-3.5 py-2.5 shadow-[var(--shadow-md)] max-w-[180px]">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--brand-pale)] flex items-center justify-center text-[var(--brand-light)]">
                  <Truck size={16} />
                </div>
                <span className="text-xs font-medium text-[var(--foreground)] leading-snug">
                  سطحة مجانية من موقعك داخل جدة
                </span>
              </div>
            </div>

            {/* Floating badge — bottom, circular-icon style (mirrors "Quick Charge") */}
            <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 z-20">
              <div className="flex items-center gap-3 bg-[var(--surface)]/90 backdrop-blur-sm border border-[var(--border)] rounded-full pl-4 pr-2 py-2 shadow-[var(--shadow-md)]">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[var(--brand)] flex items-center justify-center text-white">
                  <Clock3 size={16} />
                </div>
                <span className="text-xs font-semibold text-[var(--foreground)] whitespace-nowrap">
                  تقييم خلال دقائق
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile version of the cities panel — desktop one is hidden above on mobile */}
        <div className="flex lg:hidden justify-center gap-5 mt-8 text-sm text-[var(--foreground-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-light)]" />{" "}
            جدة
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--sapphire-light)]" />{" "}
            مكة
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--slate-400)]" />{" "}
            الطائف
          </span>
        </div>
      </div>
    </section>
  );
}
