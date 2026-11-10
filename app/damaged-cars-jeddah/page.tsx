import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Wrench,
  Truck,
  Clock,
  MapPin,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، لدي سيارة متعطلة / بدون استمارة سارية في جدة وأرغب في تقييمها وبيعها مع إسقاط اللوحات",
  );

export const metadata: Metadata = {
  title:
    "شراء سيارات متعطلة وبدون استمارة أو فحص في جدة (عطل مكينة وقير) | قيّمها كار",
  description:
    "نشتري السيارات المتعطلة (تخبيط مكينة، عطل جيربوكس، أو متوقفة) والسيارات بدون استمارة سارية أو فحص دوري في جدة بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر: 0508374454.",
  keywords: [
    "شراء سيارات متعطلة جدة",
    "شراء سيارات بدون استمارة جدة",
    "شراء سيارات بدون فحص دوري جدة",
    "بيع سيارة مكينة مخبطة جدة",
    "شراء سيارات خربانه جدة",
    "شراء سيارات قديمة ومتوقفة جدة",
    "إسقاط لوحات سيارة استمارتها منتهية جدة",
    "قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/damaged-cars-jeddah",
  },
  openGraph: {
    title: "شراء سيارات متعطلة وبدون استمارة أو فحص في جدة | قيّمها كار",
    description:
      "سيارتك متعطلة في المكينة أو الجيربوكس أو استمارتها منتهية في جدة؟ نشتريها بحالتها فوراً بأعلى سعر كاش مع سطحة مجانية وإسقاط لوحات عبر أبشر.",
    url: "https://qeemahcar.com/damaged-cars-jeddah",
    siteName: "قيّمها كار لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const DAMAGED_TYPES = [
  {
    title: "شراء سيارات عطل مكينة أو جيربوكس (مخبطة)",
    description:
      "لا داعي لتحمل تكاليف توضيب المكينة أو تغيير الجيربوكس الباهظة؛ نشتري سيارتك المتعطلة بحالتها الراهنة في جدة بأعلى سعر نقدي فوري.",
  },
  {
    title: "شراء سيارات بدون استمارة سارية أو بدون فحص دوري",
    description:
      "نشتري السيارات التي انتهت استمارتها أو لا تملك فحصاً دورياً سارياً في جدة، ونتولى إنهاء كافة الإجراءات المرورية وإسقاط اللوحات رسمياً.",
  },
  {
    title: "شراء سيارات متوقفة، قديمة، غرقانة، أو محروقة",
    description:
      "إذا كانت سيارتك متوقفة منذ فترة طويلة أمام المنزل أو تضررت من السيول أو الحريق، نسحبها بسطحة خاصة مجانية وندفع لك قيمتها كاش فوراً.",
  },
];

const JEDDAH_NEIGHBORHOODS = [
  "حي الحمدانية",
  "حي بريمان",
  "أبحر الشمالية والجنوبية",
  "حي الصفا",
  "حي المروة",
  "حي السامر",
  "حي النسيم",
  "حي الروضة",
  "حي الفيحاء",
  "حي الوزيرية",
  "حي الخمرة",
  "حي الجامعة وجنوب جدة",
];

const FAQS_DAMAGED = [
  {
    q: "هل تشترون السيارة في جدة إذا كانت الاستمارة منتهية منذ سنوات؟",
    a: "نعم بالتأكيد، نشتري السيارات المتعطلة والمصدومة والتشليح في جدة حتى لو كانت الاستمارة منتهية، ونتكفل بإتمام إجراءات إسقاط اللوحات عبر منصة أبشر.",
  },
  {
    q: "هل أحتاج إلى عمل فحص دوري للسيارة المتعطلة قبل بيعها لكم؟",
    a: "لا إطلاقاً، لا يُشترط وجود فحص دوري ساري المفعول لبيع السيارة المتعطلة أو التالفة وإسقاط لوحاتها في جدة.",
  },
  {
    q: "سيارتي لا تشتغل (مكينة مخبطة أو قير عطلان)، كيف يتم نقلها؟",
    a: "نوفر سطحة هيدروليك خاصة ومجانية 100% تصل إلى موقع سيارتك أمام المنزل أو داخل الورشة في أي حي من أحياء جدة لسحبها دون أن تدفع أي رسوم نقل.",
  },
  {
    q: "متى أستلم مبلغ السيارة المتعطلة ومتى يتم إسقاط اللوحات؟",
    a: "تستلم المبلغ كاش فوري أو تحويل بنكي مباشر لحظة استلام السيارة، ويتم إنهاء إسقاط المركبة واللوحات رسمياً عبر أبشر في نفس اليوم.",
  },
];

export default function DamagedCarsJeddahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://qeemahcar.com/damaged-cars-jeddah#service",
        name: "شراء سيارات متعطلة وبدون استمارة أو فحص في جدة — قيّمها كار",
        description:
          "خدمة شراء السيارات المتعطلة (عطل مكينة أو جيربوكس) والسيارات بدون استمارة سارية أو فحص دوري في جدة بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات عبر أبشر.",
        provider: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "جدة",
        },
        url: "https://qeemahcar.com/damaged-cars-jeddah",
      },
      {
        "@type": "FAQPage",
        "@id": "https://qeemahcar.com/damaged-cars-jeddah#faq",
        mainEntity: FAQS_DAMAGED.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
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
            name: "شراء سيارات متعطلة وبدون استمارة في جدة",
            item: "https://qeemahcar.com/damaged-cars-jeddah",
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
              شراء سيارات متعطلة في جدة
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-6 sm:p-10 lg:p-14 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#38bdf8] mb-5">
              <Wrench className="w-4 h-4" />
              <span>نشتري السيارات المتعطلة والمنتهية استمارتها فوراً بدون فحص دوري</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] tracking-tight text-white max-w-4xl">
              شراء سيارات متعطلة في جدة{" "}
              <span className="text-[#38bdf8]">
                (عطل مكينة أو قير، قديمة، ومتوقفة) كاش فوري
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
              هل لديك سيارة متعطلة في <strong>المكينة أو الجيربوكس</strong> أو متوقفة أمام المنزل في <strong>جدة</strong> و<strong>استمارتها منتهية أو بدون فحص دوري</strong>؟ في{" "}
              <strong>قيّمها كار</strong> نشتريها منك بحالتها الراهنة بأعلى سعر كاش فوري، ونوفر لك{" "}
              <strong>سطحة مجانية</strong> لسحبها من أمام المنزل أو الورشة، مع إتمام{" "}
              <strong>إسقاط اللوحات الفوري عبر أبشر</strong> في نفس اليوم.
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
                <span>أرسل حالة سيارتك المتعطلة عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-bold text-white transition-all"
              >
                <Phone className="w-5 h-5 text-[#38bdf8]" />
                <span>اتصل الآن:</span>
                <span dir="ltr" className="text-[#38bdf8]">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <ShieldCheck className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    لا يشترط فحص دوري أو استمارة سارية
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ننهي إجراءات الإسقاط النظامي عبر أبشر فوراً
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <Truck className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    سحب مجاني من المنزل أو الورشة
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    سطحة هيدروليك مجانية لجميع أحياء جدة
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <Clock className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    استلام الكاش فوراً في موقعك
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    دفع نقدي أو تحويل بنكي فوري خلال 30 دقيقة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Cases Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              نشتري السيارة بحالتها دون إصلاح
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              حالات السيارات المتعطلة والمنتهية التي نشتريها في جدة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DAMAGED_TYPES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] mb-5">
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

        {/* Neighborhoods Box */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <MapPin className="w-4 h-4" />
              <span>خدمة سحب مجانية من كافة أحياء جدة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4!">
              نصلك لاستلام السيارة المتعطلة في جميع أحياء جدة
            </h2>
            <p className="text-sm text-slate-300 mb-6! leading-relaxed max-w-3xl">
              سواء كانت سيارتك متوقفة أمام المنزل أو داخل إحدى ورش الصناعية في شمال أو جنوب جدة، تصلك سطحتنا مجاناً:
            </p>

            <div className="flex flex-wrap gap-2.5">
              {JEDDAH_NEIGHBORHOODS.map((area) => (
                <span
                  key={area}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-10">
            <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة — السيارات المتعطلة وبدون استمارة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8!">
              أسئلة متكررة حول بيع سيارة متعطلة أو بدون فحص في جدة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS_DAMAGED.map((faq, idx) => (
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

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-slate-300">
                تصفح خدماتنا المتخصصة الأخرى في مدينة جدة:
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
                  شراء سيارات تشليح ومصدومة بجدة
                </Link>
                <Link
                  href="/"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                >
                  العودة للرئيسية
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