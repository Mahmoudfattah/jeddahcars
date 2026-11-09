import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  CarFront,
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
    "السلام عليكم، أرغب في تقييم وبيع سيارتي التشليح أو المصدومة في جدة",
  );

export const metadata: Metadata = {
  title:
    "شراء سيارات تشليح ومصدومة من الخلف والأمام في جدة بأعلى سعر | قيّمها كار",
  description:
    "نشتري جميع أنواع سيارات التشليح والسكراب والسيارات المصدومة (من الخلف أو الأمام أو الجانب) والمتعطلة والمحروقة في جدة (الحمدانية، بريمان، أبحر، الصفا، الخمرة) كاش فوري مع سطحة مجانية وإسقاط لوحات: 0508374454.",
  keywords: [
    "شراء سيارات تشليح جدة",
    "شراء سيارات مصدومه",
    "سياره مصدومة من الخلف",
    "شراء سيارات مصدومة في جدة",
    "تشليح جدة الحمدانية",
    "تشليح بريمان جدة",
    "شراء سيارات سكراب ومتعطلة جدة",
    "قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/tashleeh-jeddah",
  },
  openGraph: {
    title: "شراء سيارات تشليح ومصدومة في جدة بأعلى سعر كاش | قيّمها كار",
    description:
      "نشتري سيارتك المصدومة أو التالفة أو المتعطلة أو السكراب في جميع أحياء جدة بتقييم فوري وأعلى سعر كاش مع سطحة مجانية وإسقاط لوحات فوري عبر أبشر.",
    url: "https://qeemahcar.com/tashleeh-jeddah",
    siteName: "قيّمها كار لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const CAR_CASES = [
  {
    title: "شراء سيارات مصدومة من الخلف أو الأمام أو الجانب",
    description:
      "نشتري جميع سيارات الحوادث المرورية في جدة مهما كانت درجة الصدمة (صدمة خلفية، أمامية، انقلاب، أو تلف كامل في الشاصي والهيكل) بأعلى سعر كاش فوري.",
  },
  {
    title: "شراء سيارات تشليح وسكراب وتالفة بالكامل",
    description:
      "نثمن ونشتري السيارات القديمة والتالفة والسكراب في أحياء جدة (الحمدانية، بريمان، الخمرة، الصفا) مع التكفل الكامل بسحبها وإسقاط لوحاتها.",
  },
  {
    title: "شراء سيارات متعطلة (عطل مكينة أو جيربوكس) ومحروقة",
    description:
      "سيارتك متعطلة في المكينة أو القير أو متضررة من السيول أو الحريق؟ نشتريها بحالتها الراهنة فوراً دون الحاجة لإصلاحها أو فحصها.",
  },
];

const JEDDAH_DISTRICTS = [
  "حي الحمدانية",
  "تشليح بريمان",
  "أبحر الشمالية والجنوبية",
  "حي الصفا",
  "حي المروة",
  "حي السامر",
  "حي النسيم",
  "حي الروضة",
  "حي الفيحاء",
  "حي الوزيرية",
  "الخمرة والصناعية",
  "حي الجامعة وجنوب جدة",
];

const FAQS_TASHLEEH = [
  {
    q: "هل تشترون سيارة مصدومة من الخلف أو الأمام بدون إصلاح في جدة؟",
    a: "نعم بالتأكيد، نشتري جميع السيارات المصدومة من الخلف أو الأمام أو الجانب بحالتها الراهنة بعد الحادث مباشرة دون أن تتكلف ريالاً واحداً في إصلاحها، ونوفر سطحة مجانية لنقلها.",
  },
  {
    q: "كيف يتم تحديد سعر سيارة التشليح أو المصدومة في جدة؟",
    a: "نعتمد على تقييم عادل وشفاف بناءً على نوع السيارة وموديلها وحالة الأجزاء السليمة، ونضمن لك أعلى تسعير كاش فوري في سوق تشليح جدة خلال دقائق من إرسال الصور عبر واتساب.",
  },
  {
    q: "هل تشمل خدمة شراء سيارات التشليح في جدة إسقاط اللوحات الفوري؟",
    a: "نعم، فور الاتفاق واستلام السيارة، نُنهي إجراءات إسقاط المركبة واللوحات رسمياً عبر نظام أبشر في نفس اليوم مجاناً تماماً لإخلاء مسؤوليتك المرورية.",
  },
  {
    q: "هل تشترون السيارات المصدومة في مكة المكرمة والطائف أيضاً؟",
    a: "نعم، بالإضافة إلى تغطيتنا الشاملة لكافة أحياء جدة على مدار 24 ساعة، نصلك أيضاً في مكة المكرمة والطائف بسطحة خاصة مجانية ودفع كاش فوري.",
  },
];

export default function TashleehJeddahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://qeemahcar.com/tashleeh-jeddah#service",
        name: "شراء سيارات تشليح ومصدومة من الخلف والأمام وسكراب في جدة — قيّمها كار",
        description:
          "خدمة شراء جميع أنواع سيارات التشليح والسكراب والسيارات المصدومة من الخلف والأمام والمتعطلة في جدة مع سطحة مجانية وإسقاط لوحات فوري عبر أبشر.",
        provider: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "جدة",
        },
        url: "https://qeemahcar.com/tashleeh-jeddah",
      },
      {
        "@type": "FAQPage",
        "@id": "https://qeemahcar.com/tashleeh-jeddah#faq",
        mainEntity: FAQS_TASHLEEH.map((item) => ({
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
            name: "شراء سيارات تشليح ومصدومة في جدة",
            item: "https://qeemahcar.com/tashleeh-jeddah",
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
        className="min-h-screen overflow-hidden bg-[#090e17] pb-20 pt-24 text-white sm:pt-28"
      >
        {/* Breadcrumb */}
        <div className="container mx-auto mb-4 max-w-7xl px-4 sm:mb-6 sm:px-6 lg:px-8">
          <nav
            aria-label="مسار الصفحة"
            className="flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm"
          >
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-[#38bdf8]"
            >
              <ArrowRight className="h-3.5 w-3.5" />
              <span>الرئيسية (قيّمها كار)</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="font-semibold text-[#38bdf8]">
              شراء سيارات تشليح ومصدومة في جدة
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative container mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#142238] via-[#0f172a] to-[#090e17] p-5 shadow-2xl shadow-black/20 sm:rounded-[32px] sm:p-8 lg:p-12">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2 text-xs font-bold leading-relaxed text-[#38bdf8] sm:text-sm">
              <CarFront className="h-4 w-4 shrink-0" />
              <span>نشتري كافة درجات الضرر في جميع أحياء جدة — كاش فوري</span>
            </div>

            <h1 className="max-w-5xl text-2xl font-extrabold leading-[1.45] tracking-tight text-white sm:text-4xl sm:leading-[1.35] lg:text-5xl">
              شراء سيارات تشليح ومصدومة في جدة{" "}
              <span className="text-[#38bdf8]">
                (مصدومة من الخلف أو الأمام، تالفة، ومتعطلة) بأعلى سعر
              </span>
            </h1>

            <p className="mt-5 max-w-4xl text-sm leading-8 text-slate-300 sm:mt-6 sm:text-base lg:text-lg lg:leading-9">
              في <strong>قيّمها كار</strong> نشتري جميع أنواع{" "}
              <strong>
                السيارات المصدومة والتشليح والسكراب والمتعطلة في جدة
              </strong>{" "}
              مهما كانت حالتها: سواء كانت{" "}
              <strong>سيارة مصدومة من الخلف أو الأمام</strong>، أو متعطلة في
              المكينة أو الجيربوكس، أو محروقة، أو بدون استمارة سارية. نضمن لك
              أعلى تقييم نقدي فوري مع <strong>سطحة مجانية</strong> من أمام منزلك
              و<strong>إسقاط فوري للوحات عبر أبشر</strong>.
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22c55e] px-6 py-4 text-center text-sm font-bold leading-relaxed text-white shadow-[0_10px_25px_-5px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#16a34a] sm:w-auto sm:px-7 sm:text-base"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                <span>أرسل صور سيارتك المصدومة أو التشليح واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 sm:w-auto sm:px-7 sm:text-base"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#38bdf8]" />
                <span>اتصل الآن:</span>
                <span dir="ltr" className="text-[#38bdf8]">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-9 grid grid-cols-1 gap-3 border-t border-white/10 pt-7 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.035] p-4 sm:p-5">
                <Clock className="mt-0.5 h-7 w-7 shrink-0 text-[#38bdf8]" />
                <div className="min-w-0">
                  <h2 className="text-sm font-bold leading-6 text-white">
                    تثمين فوري ودفع كاش خلال دقائق
                  </h2>
                  <p className="mt-1 text-xs leading-6 text-slate-400">
                    أعلى سعر في سوق تشليح الحمدانية وبريمان بجدة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.035] p-4 sm:p-5">
                <Truck className="mt-0.5 h-7 w-7 shrink-0 text-[#38bdf8]" />
                <div className="min-w-0">
                  <h2 className="text-sm font-bold leading-6 text-white">
                    سطحة خاصة مجانية لباب منزلك
                  </h2>
                  <p className="mt-1 text-xs leading-6 text-slate-400">
                    سحب مجاني للسيارة من موقع الحادث أو المنزل أو الورشة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.035] p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
                <ShieldCheck className="mt-0.5 h-7 w-7 shrink-0 text-[#38bdf8]" />
                <div className="min-w-0">
                  <h2 className="text-sm font-bold leading-6 text-white">
                    إسقاط لوحات فوري ونظامي
                  </h2>
                  <p className="mt-1 text-xs leading-6 text-slate-400">
                    إنهاء إجراءات أبشر وإخلاء المسؤولية في نفس اليوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Car Categories Section */}
        <section className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] sm:text-sm">
              جميع حالات السيارات مقبولة
            </span>
            <h2 className="mt-3 text-xl font-extrabold leading-[1.5] text-white sm:text-2xl sm:leading-tight lg:text-3xl">
              ما هي أنواع السيارات المصدومة والتشليح التي نشتريها في جدة؟
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {CAR_CASES.map((item, idx) => (
              <div
                key={idx}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#111927] p-5 transition-all hover:border-[#38bdf8]/40 sm:p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold leading-8 text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhoods Box */}
        <section className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-5 sm:p-8 lg:p-10">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold text-[#38bdf8] sm:text-sm">
              <MapPin className="h-4 w-4" />
              <span>تغطية شاملة لشمال وجنوب جدة</span>
            </div>
            <h2 className="text-xl font-extrabold leading-[1.5] text-white sm:text-2xl lg:text-3xl">
              نشتري السيارات المصدومة والتشليح في كافة أحياء جدة
            </h2>
            <p className="mb-6 mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:mb-7 sm:mt-4 sm:text-base">
              تصلك سطحتنا المجانية ومندوب التقييم خلال 30 دقيقة في جميع أحياء
              ومناطق محافظة جدة:
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {JEDDAH_DISTRICTS.map((area) => (
                <span
                  key={area}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold leading-5 text-slate-200 transition-colors hover:border-[#38bdf8]/30 hover:bg-[#38bdf8]/[0.06] sm:px-4 sm:text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-5 sm:p-8 lg:p-10">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold text-[#38bdf8] sm:text-sm">
              <HelpCircle className="h-4 w-4" />
              <span>أسئلة شائعة — تشليح وشراء المصدوم بجدة</span>
            </div>
            <h2 className="mb-7! text-xl font-extrabold leading-[1.5] text-white sm:mb-8 sm:text-2xl lg:text-3xl">
              إجابات وافية حول بيع سيارتك التشليح أو المصدومة في جدة
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
              {FAQS_TASHLEEH.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#090e17]/70 p-5 sm:p-6"
                >
                  <h3 className="mb-3 text-base font-bold leading-7 text-[#38bdf8]">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:mt-9 sm:flex-row sm:items-center sm:gap-4 sm:pt-7">
              <span className="text-sm leading-7 text-slate-300">
                هل ترغب في الاطلاع على تفاصيل خدمة إسقاط اللوحات الفوري؟
              </span>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/isqat-markabat-jeddah"
                  className="inline-flex items-center justify-center rounded-xl border border-[#38bdf8]/40 bg-[#38bdf8]/15 px-5 py-3 text-center text-sm font-bold text-[#38bdf8] transition-all hover:bg-[#38bdf8] hover:text-slate-950"
                >
                  صفحة إسقاط المركبات الفوري بجدة
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-white/10"
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
