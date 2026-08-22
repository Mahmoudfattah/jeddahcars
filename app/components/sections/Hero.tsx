import Image from "next/image";
import {
  Truck,
  ShieldCheck,
  Clock3,
  ArrowLeft,
  Phone,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background py-18 text-foreground sm:py-20"
      dir="rtl"
    >
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* ========================================================
              TEXT COLUMN
          ======================================================== */}
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-5">
            <p className="text-sm font-semibold text-[var(--brand-light)]">
              تشليح · تالفة · متعطلة · سكراب · مصدومة — جدة
            </p>

            <h1 className="text-3xl font-extrabold leading-[1.2] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              نشتري سيارات التشليح
              <br />
              والمصدومة في جدة
            </h1>

            <p className="max-w-md text-base leading-relaxed text-[var(--foreground-secondary)]">
              نشتري جميع أنواع السيارات التشليح والتالفة والمتعطلة والسكراب
              والمصدومة في جدة، مع تقييم فوري، وسحب مجاني من أمام المنزل،
              وإتمام إجراءات إسقاط اللوحات. كما نخدم مكة المكرمة والطائف.
            </p>

            {/* ========================================================
                CONTACT CTA
            ======================================================== */}
            <div className="flex flex-wrap items-center gap-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/966508374454"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="راسلنا على واتساب الآن"
                className="mt-4 flex w-fit items-center gap-4 rounded-full bg-white py-1.5 pl-1.5 pr-6 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
              >
                <span className="text-sm text-blue-950">
                  راسلنا على واتساب الآن
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <ArrowLeft size={18} />
                </span>
              </a>

              {/* Phone Button */}
              <a
                href="tel:+966508374454"
                aria-label="اتصل بنا"
                className="mt-4 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#1d7aa5] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#134f6b]"
              >
                <Phone size={18} className="text-white" />
              </a>
            </div>

            {/* Bottom info panel — cities served */}
            <div className="mt-6 hidden max-w-xs flex-col gap-3 border-t border-[var(--border)] pt-6 lg:flex">
              <span className="text-sm font-semibold text-[var(--foreground)]">
                نخدم 3 مدن رئيسية
              </span>

              <div className="flex items-center gap-4 text-sm text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-light)]" />
                  جدة
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--sapphire-light)]" />
                  مكة
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--slate-400)]" />
                  الطائف
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              CAR COLUMN
          ======================================================== */}
          <div className="relative order-1 flex min-h-[340px] items-center justify-center sm:min-h-[420px] lg:order-2 lg:col-span-7 lg:min-h-[520px]">
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[var(--brand)]/20 blur-[50px]"
            />

            {/* Decorative ellipse */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[63%] z-0 h-[250px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-gray-700/50 sm:h-[350px]"
            />

            {/* Car */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
              <Image
                src="/heroImage.webp"
                alt="سيارة سيدان مصدومة ومتضررة في جدة جاهزة للتقييم والبيع"
                width={900}
                height={650}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 55vw, 45vw"
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* ======================================================
                CONDITION CARD
            ====================================================== */}
            <div className="absolute right-2 top-2 z-20 flex flex-col items-end gap-1.5 sm:right-4 sm:top-6">
              <span className="px-3 text-[11px] font-semibold text-[var(--foreground-muted)]">
                الحالة
              </span>

              <div className="flex max-w-[190px] items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-3.5 py-2.5 shadow-[var(--shadow-md)] backdrop-blur-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-pale)] text-[var(--brand-light)]">
                  <ShieldCheck size={16} />
                </div>

                <span className="text-xs font-medium leading-snug text-[var(--foreground)]">
                  نقيّم أي درجة ضرر، من خدش بسيط لتلف كامل
                </span>
              </div>
            </div>

            {/* ======================================================
                SERVICE CARD
            ====================================================== */}
            <div className="absolute left-1 top-1/3 z-20 flex flex-col items-start gap-1.5 sm:left-4">
              <span className="px-3 text-[11px] font-semibold text-[var(--foreground-muted)]">
                الخدمة
              </span>

              <div className="flex max-w-[180px] items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-3.5 py-2.5 shadow-[var(--shadow-md)] backdrop-blur-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-pale)] text-[var(--brand-light)]">
                  <Truck size={16} />
                </div>

                <span className="text-xs font-medium leading-snug text-[var(--foreground)]">
                  سطحه مجانية من موقعك داخل جدة
                </span>
              </div>
            </div>

            {/* ======================================================
                INSTANT EVALUATION
            ====================================================== */}
            <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 sm:bottom-6 lg:left-auto lg:right-6 lg:translate-x-0">
              <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 py-2 pl-4 pr-2 shadow-[var(--shadow-md)] backdrop-blur-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-white">
                  <Clock3 size={16} />
                </div>

                <span className="whitespace-nowrap text-xs font-semibold text-[var(--foreground)]">
                  تقييم خلال دقائق
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE CITIES
        ============================================================ */}
        <div className="mt-8 flex justify-center gap-5 text-sm text-[var(--foreground-muted)] lg:hidden">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-light)]" />
            جدة
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--sapphire-light)]" />
            مكة
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--slate-400)]" />
            الطائف
          </span>
        </div>
      </div>


      {/* LocalBusiness structured data — tells Google this is a local business,
    its primary service area (Jeddah), and secondary coverage (Makkah, Taif).
    This is what can trigger Google Maps / Local Pack visibility, and lets
    Search show the phone number as a tappable call button in results. */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "شراء السيارات المصدومة والتشليح",
      description:
        "نشتري جميع أنواع السيارات التشليح والتالفة والمتعطلة والسكراب والمصدومة في جدة، مع تقييم فوري، وسحب مجاني من أمام المنزل، وإتمام إجراءات إسقاط اللوحات.",
      telephone: "+966508374454",
      areaServed: [
        {
          "@type": "City",
          name: "جدة",
        },
        {
          "@type": "City",
          name: "مكة المكرمة",
        },
        {
          "@type": "City",
          name: "الطائف",
        },
      ],
      // priceRange: "$$",
    }),
  }}
/>
    </section>
  );
}