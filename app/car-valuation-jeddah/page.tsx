// app/car-valuation-jeddah/page.tsx (مشروع qeemahcar.com)
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Truck,
  Clock,
  ArrowRight,
  HelpCircle,
  Calculator,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في تقييم وتثمين سيارتي المصدومة والتالفة في جدة",
  );

export const metadata: Metadata = {
  title:
    "تقييم وتثمين السيارات المصدومة والتالفة في جدة خلال 15 دقيقة | قيّمها كار",
  description:
    "اعرف كم تسوى سيارتك المصدومة أو التالفة أو المتعطلة في جدة ومكة والطائف مجاناً عبر واتساب خلال 15 دقيقة، مع شراء فوري بأعلى سعر كاش وسطحة مجانية وإسقاط لوحات عبر أبشر.",
  keywords: [
    "تقييم سيارات مصدومة جدة",
    "تثمين سيارات تشليح جدة",
    "كم تسوى سيارتي المصدومة",
    "فحص وتقييم سيارات تالفة جدة",
    "قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/car-valuation-jeddah",
  },
  openGraph: {
    title:
      "تقييم وتثمين السيارات المصدومة والتالفة في جدة خلال 15 دقيقة | قيّمها كار",
    description:
      "اعرف كم تسوى سيارتك المصدومة أو التالفة في جدة ومكة والطائف مجاناً عبر واتساب خلال 15 دقيقة بأعلى سعر كاش.",
    url: "https://qeemahcar.com/car-valuation-jeddah",
    siteName: "قيّمها كار لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const VALUATION_STEPS = [
  {
    title: "01. المعايير الفنية للتسعير",
    description:
      "نفحص نوع السيارة، سنة الصنع، وحالة الشاصي والمحرك والجيربوكس والقطع الداخلية لنمنحك أعلى رقم شراء ممكن في سوق جدة.",
  },
  {
    title: "02. صفر خصومات خفية",
    description:
      "السعر الذي نتفق عليه معك عبر الواتساب أو عند المعاينة تستلمه كاملاً؛ لا نخصم أجرة السطحة ولا رسوم إسقاط اللوحات.",
  },
  {
    title: "03. تنفيذ فوري في نفس اليوم",
    description:
      "فور موافقتك على التسعيرة، يصلك مندوبنا والسطحة الخاصة خلال 30 دقيقة في أي حي بجدة لاستلام المركبة وتحويل المبلغ فوراً.",
  },
];

const FAQS_VALUATION = [
  {
    q: "كيف أعرف كم تسوى سيارتي المصدومة أو التالفة في جدة؟",
    a: "أرسل 4 صور واضحة للسيارة مع ذكر النوع والموديل وحالة المكينة والقير عبر واتساب على الرقم 0508374454، وسيقدم لك فريق قيّمها كار أعلى عرض سعر شراء نقدي خلال 15 دقيقة مجاناً.",
  },
  {
    q: "هل يختلف تثمين قيّمها كار عن بيع السيارة كحديد سكراب؟",
    a: "نعم، نحن نقيم السيارة بناءً على قيمة أجزائها السليمة وموديلها في السوق السعودي وليس بوزن الحديد فقط، مما يمنح المالك سعراً أعلى بكثير مع إعفاء كامل من رسوم السطحة وإسقاط اللوحات.",
  },
];

export default function CarValuationJeddahPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "تقييم وتثمين وشراء السيارات المصدومة والتشليح في جدة",
      provider: {
        "@type": "AutoDealer",
        name: "قيّمها كار",
        telephone: "+966508374454",
        url: "https://qeemahcar.com",
      },
      areaServed: ["جدة", "مكة المكرمة", "الطائف"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS_VALUATION.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://qeemahcar.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "تقييم وتثمين السيارات المصدومة بجدة",
          item: "https://qeemahcar.com/car-valuation-jeddah",
        },
      ],
    },
  ];

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        dir="rtl"
        className="min-h-screen bg-[#090e17] text-white pt-28 pb-16 overflow-hidden"
      >
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-6">
          <nav
            aria-label="مسار الصفحة"
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-400"
          >
            <Link
              href="/"
              className="hover:text-[#38bdf8] transition-colors flex items-center gap-1"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>الرئيسية (قيّمها كار)</span>
            </Link>
            <span>/</span>
            <span className="text-[#38bdf8] font-semibold">
              تقييم وتثمين السيارات المصدومة في جدة
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-6 sm:p-10 lg:p-14 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#38bdf8] mb-5">
              <Calculator className="w-4 h-4" />
              <span>تثمين مجاني وفوري خلال 15 دقيقة بدون التزام</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] tracking-tight text-white max-w-4xl">
              تقييم وتثمين السيارات المصدومة والتالفة في جدة{" "}
              <span className="text-[#38bdf8]">بأعلى سعر كاش فوري</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
              هل تتساءل كم تسوى سيارتك بعد الحادث أو بعد تعطل المكينة والقير؟ في{" "}
              <strong>قيّمها كار</strong> نوفر لك تقييماً فوريا وعادلاً يعتمد
              على القيمة السوقية للأجزاء السليمة وموديل المركبة، مع استعداد تام
              للشراء الفوري نقداً وسحب السيارة بسطحة مجانية من موقعك.
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_-5px_rgba(34,197,94,0.4)] transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>أرسل صور سيارتك للتثمين عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-bold text-white transition-all"
              >
                <Phone className="w-5 h-5 text-[#38bdf8]" />
                <span>اتصال مباشر بقسم التثمين:</span>
                <span dir="ltr" className="text-[#38bdf8]">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <Clock className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    تثمين سريع خلال 15 دقيقة
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    إرسال السعر بدقة بناءً على الصور والموديل
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <Truck className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    سطحة مجانية للمركبة
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    سحب مجاني من موقعك بجدة ومكة والطائف
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <ShieldCheck className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    إسقاط لوحات عبر أبشر
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    إخلاء مسؤوليتك رسمياً بدون رسوم إضافية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Steps Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              احترافية وشفافية في التقييم
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              كيف نقوم بتثمين سيارتك المصدومة والتالفة؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUATION_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] mb-5 font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-10">
            <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة — تقييم وتثمين السيارات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8!">
              أسئلة متكررة حول تثمين السيارات المصدومة في جدة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS_VALUATION.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#090e17]/70 p-5"
                >
                  <h3 className="text-base font-bold text-[#38bdf8] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}


            </div>

            {/* Internal Navigation Links */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-sm text-slate-300 font-bold">
                خدمات قيّمها كار المتخصصة بجدة:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/isqat-markabat-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-5 py-2.5 text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  إسقاط مركبات فوري بجدة
                </Link>
                <Link
                  href="/tashleeh-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-5 py-2.5 text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  شراء سيارات تشليح ومصدومة
                </Link>
                <Link
                  href="/damaged-cars-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-5 py-2.5 text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  شراء سيارات متعطلة وبدون استمارة
                </Link>
                <Link
                  href="/"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                >
                  الرئيسية
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
  
          <Footer/>
  
    </>
  );
}
