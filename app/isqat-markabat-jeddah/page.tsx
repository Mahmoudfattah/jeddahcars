import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileCheck2,
  Truck,
  Clock,
  MapPin,
  ArrowRight,
  HelpCircle,
  Scale,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في بيع سيارتي وإتمام إجراءات إسقاط اللوحات الفوري في جدة",
  );

export const metadata: Metadata = {
  title:
    "اسقاط مركبات فوري بجده عبر أبشر مجاناً ونشتري سيارتك التالفة كاش | 0508374454",
  description:
    "اسقاط مركبات فوري بجده بدون رسوم عبر منصة أبشر (الاستمارة سارية أو منتهية) مع شراء سيارتك المصدومة أو القديمة أو التالفة بأعلى سعر كاش وسطحة مجانية لجميع أحياء جدة: 0508374454.",
  keywords: [
    "اسقاط مركبات فوري بجده",
    "اسقاط مركبات فوري جدة",
    "إسقاط المركبات القديمة بدون رسوم",
    "اسقاط لوحات سيارات جدة",
    "طريقة اسقاط المركبات ابشر جدة",
    "شراء سيارات تالفة واسقاط لوحات جدة",
    "تشليح بريمان جدة",
    "قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/isqat-markabat-jeddah",
  },
  openGraph: {
    title:
      "اسقاط مركبات فوري بجده عبر أبشر مجاناً ونشتري سيارتك كاش | 0508374454",
    description:
      "نشتري سيارتك المصدومة أو القديمة في جدة ونُنهي إجراءات إسقاط اللوحات الفوري عبر أبشر بدون رسوم (الاستمارة سارية أو منتهية) مع سطحة مجانية: 0508374454.",
    url: "https://qeemahcar.com/isqat-markabat-jeddah",
    siteName: "قيّمها كار لشراء السيارات المصدومة وإسقاط المركبات في جدة",
    locale: "ar_SA",
    type: "website",
  },
};

const STEPS = [
  {
    number: "01",
    title: "أرسل صور السيارة والاستمارة عبر واتساب",
    description:
      "تواصل معنا على الرقم 0508374454 وأرسل صور السيارة التالفة أو المصدومة أو القديمة مع موقعك في أي حي من أحياء جدة.",
  },
  {
    number: "02",
    title: "استلم أعلى سعر كاش فوري + سطحة مجانية",
    description:
      "نقوم بتقييم السيارة خلال 15 دقيقة ودفع المبلغ كاش أو تحويل بنكي مباشر، مع إرسال سطحة خاصة مجانية لسحب المركبة من أمام منزلك.",
  },
  {
    number: "03",
    title: "إسقاط فوري للوحات والمركبة عبر منصة أبشر",
    description:
      "نُنهي إجراءات إسقاط المركبة واللوحات رسمياً عبر نظام أبشر ومراكز التشليح المعتمدة في جدة في نفس اليوم ونزودك بإثبات إخلاء المسؤولية.",
  },
];

const REQUIREMENTS = [
  "صورة الهوية الوطنية أو الإقامة لمالك المركبة (أو المفوض الرسمي).",
  "صورة استمارة السيارة (نقبل المركبات سواء كانت الاستمارة سارية أو منتهية الصلاحية).",
  "رمز التحقق المرسل من منصة أبشر لحظة تسليم المركبة واللوحات لإتمام الإسقاط الفوري.",
  "لا يُشترط وجود فحص دوري ساري المفعول لإتمام البيع وإسقاط اللوحات.",
  "نتكفل باستلام اللوحات وسحب السيارة بالسطحة مجاناً 100% من جميع أحياء جدة.",
];

const COMPARISON = [
  {
    point: "رسوم التجديد والمخالفات",
    absher: "تتوقف كافة رسوم التجديد والالتزامات فوراً بمجرد الإسقاط",
    ignore: "تراكم رسوم تجديد رخصة السير ومخالفات الوقوف الطويل",
  },
  {
    point: "العائد المالي للمالك",
    absher: "تستلم أعلى سعر كاش فوري مقابل قيمة السيارة والقطع السليمة",
    ignore: "تتآكل قيمة المركبة تحت الشمس وتفقد قيمتها السوقية",
  },
  {
    point: "تكلفة السطحة والإجراءات",
    absher: "مجانية 100% — لا تدفع أي رسوم على الإسقاط أو السحب",
    ignore: "تتحمل أجرة السطحة والتنقل بين الورش والتشاليح بنفسك",
  },
];

const FAQS = [
  {
    q: "هل يتم إسقاط المركبات واللوحات في جدة في نفس اليوم؟",
    a: "نعم، في قيّمها كار نُنهي إجراءات إسقاط المركبات واللوحات الفوري في جدة عبر منصة أبشر المعتمدة في نفس يوم استلام السيارة، ونزودك بإشعار إخلاء المسؤولية الرسمي فوراً.",
  },
  {
    q: "كيف يتم إسقاط المركبات القديمة بدون رسوم في جدة؟",
    a: "عند بيع سيارتك القديمة أو التالفة أو المصدومة لنا في جدة، لا تدفع أي رسوم إدارية أو أجور سطحة؛ بل نتكفل بعملية السحب وإسقاط اللوحات عبر أبشر مجاناً 100% ونُسلّمك قيمة السيارة نقداً.",
  },
  {
    q: "هل يمكن إسقاط لوحات سيارة استمارتها منتهية أو بدون فحص دوري؟",
    a: "نعم، نقبل السيارات المصدومة والتالفة والقديمة في جدة ونُنهي إجراءات إسقاط لوحاتها عبر أبشر سواء كانت الاستمارة سارية أو منتهية، ولا يُشترط وجود فحص دوري ساري المفعول.",
  },
  {
    q: "هل يشترط وجود السيارة فعلياً لإتمام إسقاط المركبة عبر أبشر؟",
    a: "نعم، وفق الإجراءات النظامية المعتمدة عبر منصة أبشر ومراكز التشليح المرخصة، يُشترط تسليم المركبة التالفة أو القديمة مع لوحاتها ووجود الاستمارة (سارية أو منتهية) لإصدار إشعار الإسقاط الرسمي وإخلاء المسؤولية.",
  },
  {
    q: "ما هي أحياء جدة المشمولة بخدمة السحب المجاني وإسقاط المركبات؟",
    a: "نغطي جميع أحياء جدة على مدار 24 ساعة: الحمدانية، بريمان، أبحر الشمالية والجنوبية، الصفا، المروة، السامر، النسيم، الروضة، الفيحاء، قويزة، الوزيرية، الخمرة، وشمال وجنوب جدة.",
  },
];

const JEDDAH_AREAS = [
  "حي الحمدانية",
  "حي بريمان",
  "أبحر الشمالية والجنوبية",
  "حي الصفا",
  "حي المروة",
  "حي السامر",
  "حي النسيم",
  "حي الروضة",
  "حي الفيحاء",
  "قويزة والخمرة",
  "حي الجامعة",
  "شمال وجنوب جدة",
];

export default function IsqatMarkabatJeddahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://qeemahcar.com/isqat-markabat-jeddah#service",
        name: "اسقاط مركبات فوري بجده مع شراء السيارات التشليح والمصدومة والقديمة",
        description:
          "خدمة إسقاط مركبات ولوحات السيارات التالفة والقديمة والمصدومة فوراً في جدة عبر منصة أبشر بدون رسوم مع الدفع الكاش الفوري والسطحة المجانية.",
        provider: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "جدة",
        },
        url: "https://qeemahcar.com/isqat-markabat-jeddah",
      },
      {
        "@type": "FAQPage",
        "@id": "https://qeemahcar.com/isqat-markabat-jeddah#faq",
        mainEntity: FAQS.map((item) => ({
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
            name: "اسقاط مركبات فوري بجده",
            item: "https://qeemahcar.com/isqat-markabat-jeddah",
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

      <div
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
              اسقاط مركبات فوري بجده
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-10">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-5 sm:p-8 lg:p-12 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#38bdf8] mb-4 sm:mb-5">
              <ShieldCheck className="w-4 h-4" />
              <span>إجراءات نظامية فورية عبر أبشر — بدون أي رسوم إضافية</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] tracking-tight text-white max-w-4xl">
              اسقاط مركبات فوري بجده عبر أبشر{" "}
              <span className="text-[#38bdf8]">
                مع شراء سيارتك التالفة أو القديمة بأعلى سعر كاش
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
              هل لديك سيارة مصدومة، تالفة، متعطلة، أو قديمة في{" "}
              <strong>جدة</strong> وتبحث عن خدمة{" "}
              <strong>إسقاط مركبات فوري بجدة بدون رسوم</strong>؟ في{" "}
              <strong>قيّمها كار</strong> نشتري سيارتك بأعلى تسعيرة نقدية فورية،
              ونتولى سحبها بسطحة خاصة مجانية من موقعك، ونُنهي إجراءات{" "}
              <strong>إسقاط اللوحات والمركبة عبر أبشر</strong> في نفس اليوم
              (سواء كانت الاستمارة سارية أو منتهية).
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_-5px_rgba(34,197,94,0.4)] transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>اطلب إسقاط اللوحات وتقييم سيارتك عبر واتساب</span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-bold text-white transition-all"
              >
                <Phone className="w-5 h-5 text-[#38bdf8]" />
                <span>اتصال فوري:</span>
                <span dir="ltr" className="text-[#38bdf8]">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <FileCheck2 className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    إخلاء مسؤولية رسمي عبر أبشر
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    إسقاط فوري للوحات والمركبة في نفس اليوم
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <Truck className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    سطحة مجانية لجميع أحياء جدة
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    نقل وسحب السيارة التالفة من أمام منزلك مجاناً
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <Clock className="w-7 h-7 text-[#38bdf8] shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    دفع كاش فوري خلال 15–30 دقيقة
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    أعلى سعر شراء للسيارات المصدومة والتشليح بجدة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Steps Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              خطوات إسقاط المركبات في جدة
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              كيف نشتري سيارتك التالفة ونُسقط لوحاتها فوراً في 3 خطوات؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-[#111927] p-5 sm:p-7 flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] font-extrabold text-lg mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-5 sm:p-8">
            <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <Scale className="w-4 h-4" />
              <span>لماذا يُفضل الإسقاط الفوري؟</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-5!">
              مقارنة بين إسقاط المركبة الفوري عبر أبشر وتركها مسجلة باسمك
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-right border-collapse text-sm">
                <thead>
                  <tr className="bg-[#38bdf8]/15 text-[#38bdf8]">
                    <th className="p-3.5 font-bold">وجه المقارنة</th>
                    <th className="p-3.5 font-bold">الإسقاط عبر قيّمها كار</th>
                    <th className="p-3.5 font-bold">ترك المركبة دون إسقاط</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr
                      key={row.point}
                      className="border-t border-white/10 odd:bg-white/[0.02]"
                    >
                      <td className="p-3.5 font-bold text-white">{row.point}</td>
                      <td className="p-3.5 font-semibold text-emerald-400">
                        {row.absher}
                      </td>
                      <td className="p-3.5 text-slate-400">{row.ignore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Requirements & Neighborhoods Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Requirements Box */}
            <div className="rounded-3xl border space-y-5! border-white/10 bg-[#111927] p-5 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3 sm:mb-4">
                متطلبات إسقاط اللوحات والمركبات التالفة في جدة
              </h2>
              <p className="text-sm text-slate-300 mb-5 sm:mb-6 leading-relaxed">
                لا نطلب منك أي إجراءات معقدة أو مراجعة للمرور؛ كل ما نحتاجه
                لإتمام شراء السيارة وإسقاط لوحاتها فوراً:
              </p>
              <ul className="space-y-4">
                {REQUIREMENTS.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neighborhoods Box */}
            <div className="rounded-3xl border space-y-5! border-white/10 bg-[#111927] p-5 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>تغطية ميدانية شاملة 24/7</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3! sm:mb-4!">
                  أحياء جدة المشمولة بخدمة السطحة المجانية وإسقاط المركبات
                </h2>
                <p className="text-sm text-slate-300 mb-5! sm:mb-6! leading-relaxed">
                  أينما كان موقع سيارتك المتعطلة أو المصدومة داخل مدينة جدة،
                  تصلك سطحتنا الخاصة مجاناً خلال دقائق لاستلام السيارة وإنهاء
                  إجراءات الإسقاط:
                </p>

                <div className="flex flex-wrap gap-2">
                  {JEDDAH_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <span className="text-sm text-slate-300">
                  تواصل مباشر مع قسم التقييم وإسقاط اللوحات بجدة:
                </span>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#38bdf8] px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-[#38bdf8]/90 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-10">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-5 sm:p-8 lg:p-10">
            <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>أسئلة شائعة حول إسقاط المركبات بجدة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 sm:mb-8!">
              كل ما تود معرفته عن إسقاط اللوحات الفوري في جدة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#090e17]/70 p-4 sm:p-5"
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

            {/* Internal Linking Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
              <span className="font-bold text-white">خدمات وأدلة ذات صلة في جدة:</span>
              <Link href="/tashleeh-jeddah" className="text-[#38bdf8] hover:underline">
                شراء سيارات تشليح ومصدومة بجدة
              </Link>
              <span>•</span>
              <Link href="/damaged-cars-jeddah" className="text-[#38bdf8] hover:underline">
                شراء سيارات متعطلة وأعطال المحركات
              </Link>
              <span>•</span>
              <Link href="/rear-front-damaged-cars" className="text-[#38bdf8] hover:underline">
                تثمين الصدمات الخلفية والأمامية
              </Link>
              <span>•</span>
              <Link href="/blog" className="text-[#38bdf8] hover:underline">
                شروط إسقاط المركبات عبر أبشر
              </Link>
              <span>•</span>
              <Link
                href="/blog/fast-damaged-car-valuation-jeddah"
                className="text-[#38bdf8] hover:underline"
              >
                تقييم سيارتك خلال 15 دقيقة
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}