import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CarFront,
  ArrowRight,
  Table2,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في معرفة تسعيرة سيارتي في جدة (تشليح بريمان / الخمرة)",
  );

export const metadata: Metadata = {
  title:
    "دليل تشليح بريمان والخمرة بجدة لتثمين ماركات السيارات المصدومة | قيّمها كار",
  description:
    "جدول ومعايير تثمين السيارات اليابانية (تويوتا، نيسان)، الكورية (هيونداي، كيا)، الأمريكية (فورد، جمس)، والصينية في تشليح بريمان والخمرة بجدة: 0508374454.",
  keywords: [
    "تشليح بريمان",
    "تشليح الخمرة جدة",
    "تشليح تويوتا جدة",
    "تشليح هيونداي جدة",
    "تشليح فورد جدة",
    "شراء سيارات صينية مصدومة جدة",
    "قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/scrap-car-brands-jeddah",
  },
  openGraph: {
    title:
      "دليل تشليح بريمان والخمرة بجدة لتثمين ماركات السيارات المصدومة | قيّمها كار",
    description:
      "تعرف على معايير تسعير مختلف ماركات السيارات المصدومة والتالفة في جدة مع خدمة السحب المجاني من موقعك دون عناء الذهاب للتشليح.",
    url: "https://qeemahcar.com/scrap-car-brands-jeddah",
    siteName: "قيّمها كار لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "website",
  },
};

const BRANDS_VALUATION_TABLE = [
  {
    category: "السيارات اليابانية",
    models: "تويوتا (كامري، كورولا، هايلوكس، لاندكروزر)، لكزس، نيسان، مازدا",
    keyParts: "المحركات، الجيربوكس، الدفرنس، الشاصي، القطع الكهربائية",
    demandLevel: "طلب مرتفع جداً — أعلى فئة تثمين في جدة",
  },
  {
    category: "السيارات الكورية",
    models: "هيونداي (أكسنت، إلنترا، سوناتا، توسان)، كيا (K5، أوبتيما، سيراتو، سبورتاج)",
    keyParts: "الماكينة، ناقل الحركة، الأبواب، الواجهة، المقصورة الداخلية",
    demandLevel: "طلب يومي مرتفع — تسعير فوري ومنافس",
  },
  {
    category: "السيارات الأمريكية",
    models: "فورد (تورس، إكسبلورر، فكتوريا)، جمس (يوكن، سييرا)، شيفروليه (تاهو، كابرس)",
    keyParts: "محركات 8 و6 سلندر، الشاصي، الدبل، الدفرنسات، البودي",
    demandLevel: "تثمين مميز للسيارات العائلية والدفع الرباعي",
  },
  {
    category: "السيارات الصينية والأوروبية",
    models: "شانجان، جيلي، إم جي (MG)، هافال، جيتور، مرسيدس، بي إم دبليو",
    keyParts: "القطع الخارجية، الشمعات، الشاشات، المحركات، نواقل الحركة",
    demandLevel: "شراء مباشر يغنيك عن غلاء قطع الغيار بالوكالة",
  },
];

const DIRECT_SALE_BENEFITS = [
  {
    title: "توفير عناء نقل السيارة إلى بريمان أو الخمرة",
    desc: "بدلاً من استئجار سطحة على حسابك والتنقل بين ساحات التشليح في حر جدة، نصلك لموقعك مجاناً.",
  },
  {
    title: "تسعير مباشر بدون سماسرة أو وسطاء",
    desc: "تتعامل مباشرة مع تشليح معتمد (تشليح الندى — رقم 207 بالخمرة الصناعية الثالثة) مما يضمن لك أعلى سعر صافي.",
  },
  {
    title: "إجراءات نظامية فورية عبر أبشر",
    desc: "نلتزم بسريان الوثائق النظامية وإنهاء نقل الملكية أو إسقاط اللوحات بشكل رسمي وموثق.",
  },
];

export default function ScrapCarBrandsJeddahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://qeemahcar.com/scrap-car-brands-jeddah#service",
        name: "دليل تشليح بريمان والخمرة لتثمين ماركات السيارات بجدة — قيّمها كار",
        description:
          "تثمين وشراء كافة ماركات السيارات اليابانية والكورية والأمريكية والصينية المصدومة والتالفة في جدة وتشليح بريمان والخمرة.",
        provider: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        areaServed: {
          "@type": "City",
          name: "جدة",
        },
        url: "https://qeemahcar.com/scrap-car-brands-jeddah",
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
            name: "دليل ماركات السيارات وتشليح بريمان والخمرة",
            item: "https://qeemahcar.com/scrap-car-brands-jeddah",
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
              دليل ماركات السيارات وتشليح بريمان والخمرة
            </span>
          </nav>
        </div>

        {/* Distinct Brand Guide Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-6 sm:p-10 lg:p-14 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#38bdf8] mb-5">
              <MapPin className="w-4 h-4" />
              <span>خدمة مباشرة تغطي تشليح بريمان وتشليح الخمرة وكافة أحياء جدة</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-white max-w-4xl">
              دليل تشليح بريمان والخمرة بجدة:{" "}
              <span className="text-[#38bdf8]">
                كيف يتم تسعير سيارتك المصدومة حسب ماركتها وموديلها؟
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
              يختلف تثمين المركبة المصدومة أو المتعطلة في سوق جدة باختلاف طلب السوق على قطع غيارها؛ فالسيارات{" "}
              <strong>اليابانية والكورية والأمريكية والصينية</strong> لكل منها معايير تقييم خاصة. في{" "}
              <strong>قيّمها كار</strong> نوفر لك تسعيراً مباشراً من تشليحنا المعتمد دون الحاجة لنقل سيارتك بنفسك إلى بريمان أو الخمرة.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] px-8 py-4 text-base font-bold text-white shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>أرسل نوع وموديل سيارتك للتثمين عبر واتساب</span>
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

        {/* Detailed Brand Valuation Table */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <Table2 className="w-4 h-4" />
              <span>جدول معايير التثمين في سوق جدة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              تقييم فئات وماركات السيارات في تشليح جدة
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#090e17]/80 text-xs sm:text-sm font-extrabold text-[#38bdf8]">
                    <th className="p-4">فئة السيارات</th>
                    <th className="p-4">أبرز الماركات والموديلات</th>
                    <th className="p-4">الأجزاء الأعلى قيمة عند التثمين</th>
                    <th className="p-4">مؤشر الطلب في جدة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                  {BRANDS_VALUATION_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-4 font-extrabold text-white">
                        {row.category}
                      </td>
                      <td className="p-4 text-slate-300">{row.models}</td>
                      <td className="p-4 text-slate-300">{row.keyParts}</td>
                      <td className="p-4 font-bold text-[#22c55e]">
                        {row.demandLevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Sell Directly vs Going to Burayman */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <div className="rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
              <CarFront className="w-4 h-4" />
              <span>مزايا التعامل المباشر مع قيّمها كار</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              لماذا يفضل ملاك السيارات في جدة الاتصال بنا بدلاً من الذهاب للتشليح؟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DIRECT_SALE_BENEFITS.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#090e17]/70 p-6"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#38bdf8] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-slate-300">
                روابط سريعة لخدمات قيّمها كار بجدة:
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
                  href="/rear-front-damaged-cars"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-4 py-2 text-xs sm:text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  تثمين الصدمات الخلفية والأمامية
                </Link>
                <Link
                  href="/car-valuation-jeddah"
                  className="rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 px-4 py-2 text-xs sm:text-sm font-bold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-950 transition-all"
                >
                  تقييم السيارات بجدة
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