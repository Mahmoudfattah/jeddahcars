import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  CarFront,
  ArrowRight,
  HelpCircle,
  FileSpreadsheet,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، لدي سيارة مصدومة في جدة وأرغب في تثمينها بعد تقرير الحادث",
  );

export const metadata: Metadata = {
  title:
    "تثمين وشراء سيارات الحوادث (الصدمات الخلفية والأمامية) بعد تقدير في جدة | قيّمها كار",
  description:
    "كيف يتم تسعير السيارة المصدومة من الخلف أو الأمام أو الجانب في جدة؟ نثمن الأجزاء والمحركات السليمة بعد تقرير نجم وتقدير ونشتريها فوراً بإجراءات نظامية: 0508374454.",
  keywords: [
    "سياره مصدومة من الخلف",
    "تثمين سيارة مصدومة من الخلف جدة",
    "شراء سيارات مصدومة من الامام جدة",
    "بيع سيارة بعد تقرير تقدير جدة",
    "شراء سيارات حوادث جدة",
    "قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/rear-front-damaged-cars",
  },
  openGraph: {
    title:
      "تثمين سيارات الحوادث (الصدمات الخلفية والأمامية) بعد تقدير في جدة | قيّمها كار",
    description:
      "تقييم فني منصف للسيارات المتضررة من الخلف أو الأمام في جدة يراعي سلامة المحرك والقير والأجزاء غير المتضررة مع سحب مجاني بالسطحة.",
    url: "https://qeemahcar.com/rear-front-damaged-cars",
    siteName: "قيّمها كار لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const IMPACT_ZONES = [
  {
    zone: "النوع الأول: الصدمات الخلفية",
    intactRate: "سلامة المحرك والقير والواجهة الأمامية (تصل إلى 75%)",
    details:
      "عند تضرر الشنطة الخلفية أو الصدام الخلفي أو الشاصي الخلفي، تظل المكينة والجيربوكس والواجهة الأمامية والطبلون بحالة ممتازة؛ لذلك تحصل السيارة المصدومة من الخلف على أعلى فئة سعرية عند التثمين.",
  },
  {
    zone: "النوع الثاني: الصدمات الأمامية",
    intactRate: "سلامة المقصورة والأبواب والدفرنس والجزء الخلفي",
    details:
      "نقيّم مدى وصول الصدمة إلى الرديتر أو الكمر الأمامي أو المحرك، ونحسب القيمة السوقية الكاملة للقير، الأبواب، المقاعد، الشنطة، والقطع الخلفية السليمة.",
  },
  {
    zone: "النوع الثالث: الصدمات الجانبية وخروج الإيرباقات",
    intactRate: "سلامة كامل المنظومة الميكانيكية (المحرك وناقل الحركة)",
    details:
      "خروج الوسائد الهوائية (Airbags) أو تضرر الأبواب والسمكة الجانبية يكلف مبالغ طائلة في الورش، بينما نشتريها نحن بسعر مرتفع لسلامة محركاتها.",
  },
  {
    zone: "النوع الرابع: التلف الكلي (Total Loss) بعد تقرير تقدير",
    intactRate: "شراء فوري واستلام من مراكز تقدير الحوادث بجدة",
    details:
      "إذا قرر مركز «تقدير» أو شركة التأمين اعتبار المركبة تالفة كلياً، نشتري الحطام (السالفج) فوراً وننهي إجراءات نقل الملكية أو الإسقاط النظامي عبر أبشر.",
  },
];

const POST_ACCIDENT_STEPS = [
  "إصدار تقرير الحادث من «نجم» أو «المرور» واستكمال فحص مركز «تقدير» في جدة.",
  "إرسال 4 صور واضحة للسيارة توضح زاوية الصدمة مع ذكر الموديل والممشى عبر واتساب (0508374454).",
  "استلام عرض السعر التفصيلي خلال 15 دقيقة بناءً على قيمة الأجزاء الميكانيكية والهيكلية السليمة.",
  "التحقق من سريان رخصة السير (الاستمارة) والهوية الوطنية لإتمام المبايعة أو الإسقاط النظامي الفوري.",
];

export default function RearFrontDamagedCarsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://qeemahcar.com/rear-front-damaged-cars#service",
        name: "تثمين وشراء سيارات الحوادث (الصدمات الخلفية والأمامية) في جدة — قيّمها كار",
        description:
          "تقييم فني وشراء فوري للسيارات المصدومة من الخلف أو الأمام أو الجانب بعد تقرير تقدير في جدة وفق الضوابط النظامية.",
        provider: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "جدة",
        },
        url: "https://qeemahcar.com/rear-front-damaged-cars",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية — قيّمها كار",
            item: "https://qeemahcar.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "تثمين الصدمات الخلفية والأمامية في جدة",
            item: "https://qeemahcar.com/rear-front-damaged-cars",
          },
        ],
      },
    ],
  };

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
              تثمين الصدمات الخلفية والأمامية بعد تقدير
            </span>
          </nav>
        </div>

        {/* Distinct Technical Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-6 sm:p-10 lg:p-14 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#38bdf8] mb-5">
              <FileSpreadsheet className="w-4 h-4" />
              <span>تثمين هندسي حسب زاوية الصدمة وتقرير «تقدير» في جدة</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-white max-w-4xl">
              كيف نثمن السيارات المصدومة من الخلف أو الأمام{" "}
              <span className="text-[#38bdf8]">
                في جدة دون بخس لقيمة أجزائها السليمة؟
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
              السيارة التي تعرضت لصدمة خلفية أو جانبية ليست مجرد حديد سكراب؛ بل
              تحتوي على محرك وجيربوكس وقطع أصلية تساوي آلاف الريالات. في{" "}
              <strong>قيّمها كار بجدة</strong> نفحص زاوية الضرر ونمنحك تسعيراً
              مفصلاً ينصف الأجزاء السليمة، مع استلام المركبة من{" "}
              <strong>مراكز تقدير الحوادث أو موقعك</strong> بسطحة مجانية.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] px-8 py-4 text-base font-bold text-white shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>أرسل صور الصدمة أو تقرير تقدير عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-bold text-white transition-all"
              >
                <Phone className="w-5 h-5 text-[#38bdf8]" />
                <span dir="ltr" className="text-[#38bdf8]">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 2x2 Impact Zone Breakdown Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <Layers className="w-4 h-4" />
              <span>معايير الفحص الفني حسب موضع الحادث</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              تصنيف الحوادث وكيف يؤثر موضع الصدمة على سعر الشراء
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMPACT_ZONES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 px-3.5 py-1.5 text-xs font-bold text-[#38bdf8] mb-4">
                    {item.intactRate}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mb-3">
                    {item.zone}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Post-Taqdeer Checklist Card */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>خطوات نظامية بعد الحادث في جدة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              ماذا تفعل لبيع سيارتك المصدومة بعد تقرير «نجم» و«تقدير»؟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {POST_ACCIDENT_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#090e17]/70 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-slate-300">
                أقسام قيّمها كار الأخرى في جدة:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/isqat-markabat-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-4 py-2 text-xs sm:text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  إسقاط مركبات فوري بجدة
                </Link>
                <Link
                  href="/tashleeh-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-4 py-2 text-xs sm:text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  تشليح جدة
                </Link>
                <Link
                  href="/car-valuation-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-4 py-2 text-xs sm:text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  تثمين السيارات بجدة
                </Link>
                <Link
                  href="/scrap-car-brands-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-4 py-2 text-xs sm:text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  دليل ماركات السيارات وتشليح بريمان
                </Link>
                <Link
                  href="/blog"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-4 py-2 text-xs sm:text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  المدونة
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
