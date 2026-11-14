// app/blog/page.tsx (مشروع qeemahcar.com)
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  FileCheck2,
  Truck,
  HelpCircle,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، قرأت مقال شروط إسقاط المركبات عبر أبشر في مدونة قيّمها كار وأرغب في بيع سيارتي وإسقاط لوحاتها بجدة",
  );

export const metadata: Metadata = {
  title:
    "مدونة قيّمها كار | شروط وطريقة إسقاط المركبات التالفة والمصدومة عبر أبشر في جدة",
  description:
    "الدليل الرسمي المحدث لعام 2026 حول شروط وطريقة إسقاط المركبات واللوحات التالفة والمصدومة فوراً عبر منصة أبشر في جدة بدون رسوم أو غرامات تأخير، مع شراء السيارة كاش فوري: 0508374454.",
  keywords: [
    "شروط اسقاط المركبات ابشر جدة",
    "طريقة اسقاط لوحات سيارة تالفة في جدة",
    "اسقاط مركبات فوري بجده",
    "هل يشترط الفحص الدوري لاسقاط اللوحات",
    "اسقاط سيارة استمارتها منتهية جدة",
    "مدونة قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/blog",
  },
  openGraph: {
    title:
      "شروط وطريقة إسقاط المركبات التالفة عبر أبشر في جدة خطوة بخطوة | مدونة قيّمها كار",
    description:
      "تعرف على خطوات وشروط إسقاط اللوحات والمركبات التالفة والمصدومة فوراً في جدة عبر منصة أبشر مع استلام أعلى سعر كاش وسحب مجاني بالسطحة.",
    url: "https://qeemahcar.com/blog",
    siteName: "قيّمها كار لشراء السيارات المصدومة والتشليح",
    locale: "ar_SA",
    type: "article",
  },
};

const GUIDE_SECTIONS = [
  {
    title:
      "1. لماذا يُعد الإسقاط الفوري للوحات خطوة ضرورية عند بيع سيارتك التالفة؟",
    content:
      "عندما تتعرض السيارة لحادث مروري جسيم أو عطل يمنعها من السير في جدة، فإن تركها مسجلة باسمك في نظام المرور يعرضك لتراكم رسوم تجديد رخصة السير (الاستمارة) والمسؤولية القانونية عن المركبة. لذلك فإن التعامل مع جهة معتمدة مثل «قيّمها كار» يضمن لك شراء السيارة نقداً بأعلى سعر مع إتمام إسقاط المركبة واللوحات فوراً من حسابك في منصة أبشر في نفس اليوم.",
  },
  {
    title:
      "2. الشروط الرسمية لإسقاط المركبات التالفة والمصدومة في جدة عبر أبشر",
    content:
      "تتميز إجراءات إسقاط المركبات التالفة والتشليح في جدة بمرونتها الكبيرة؛ حيث لا يُشترط وجود فحص دوري ساري المفعول، كما نقوم في «قيّمها كار» بإنهاء الإجراءات حتى لو كانت الاستمارة منتهية الصلاحية. كل ما يلزم هو أن تكون المركبة خالية من القيود الأمنية، وأن يكون مالك المركبة (أو المفوض) قادراً على تزويدنا برمز التحقق المرسل من منصة أبشر لحظة تسليم المركبة واستلام المبلغ كاش.",
  },
  {
    title:
      "3. الفرق بين بيع السيارة المصدومة من الخلف أو الأمام كـ «تشليح» وبين إصلاحها",
    content:
      "كثير من أصحاب السيارات في جدة يتساءلون عند وقوع صدمة خلفية أو أمامية قوية: هل أصلحها أم أبيعها تشليح؟ إذا تضررت قاعدة الشاصي الخلفية أو الأمامية أو فتحت الوسائد الهوائية (الإيرباق)، فإن قيمة السيارة السوقية بعد الإصلاح تنخفض بشدة مع ارتفاع تكلفة الورشة وقطع الغيار. في هذه الحالة، يمنحك البيع الفوري في «قيّمها كار» أعلى عائد مالي نقدي خلال 15 إلى 30 دقيقة مع سطحة مجانية من موقعك.",
  },
];

const STEPS_LIST = [
  "إرسال صور السيارة المصدومة أو التالفة وصورة الاستمارة عبر واتساب (0508374454).",
  "الحصول على تسعير وتثمين فوري ومجاني خلال 15 دقيقة بأعلى سعر في سوق جدة.",
  "وصول السطحة الخاصة مجاناً إلى موقعك في أي حي من أحياء جدة (الحمدانية، بريمان، أبحر، الصفا، المروة، الخمرة...).",
  "استلام قيمة السيارة كاملة كاش فوري أو تحويل بنكي مباشر لحسابك.",
  "تأكيد رمز أبشر لإتمام إسقاط المركبة واللوحات رسمياً واستلام إشعار إخلاء المسؤولية.",
];

export default function QeemahCarBlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://qeemahcar.com/blog#article-1",
        headline:
          "شروط وطريقة إسقاط المركبات التالفة والمصدومة عبر منصة أبشر في جدة خطوة بخطوة (دليل 2026)",
        description:
          "الدليل الكامل لشروط وخطوات إسقاط لوحات السيارات التالفة والمصدومة والتشليح في جدة عبر أبشر بدون رسوم، مع شراء السيارة كاش فوري وسحبها بسطحة مجانية.",
        datePublished: "2026-11-12T10:00:00+03:00",
        dateModified: "2026-11-12T10:00:00+03:00",
        author: {
          "@type": "Organization",
          name: "فريق خبراء التثمين وإسقاط المركبات — قيّمها كار",
          url: "https://qeemahcar.com/",
        },
        publisher: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://qeemahcar.com/blog",
        },
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
            name: "المدونة ودليل إسقاط المركبات بجدة",
            item: "https://qeemahcar.com/blog",
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
              المدونة ودليل إسقاط المركبات بجدة
            </span>
          </nav>
        </div>

        {/* Article Container */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#38bdf8] mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-3.5 py-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>مدونة قيّمها كار — الدليل الرسمي المحدث</span>
              </span>
              <span className="inline-flex items-center gap-1 text-slate-400 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>نوفمبر 2026</span>
              </span>
              <span className="inline-flex items-center gap-1 text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>وقت القراءة: 3 دقائق</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-white">
              شروط وطريقة إسقاط المركبات التالفة والمصدومة عبر أبشر في جدة{" "}
              <span className="text-[#38bdf8]">
                خطوة بخطوة مع استلام أعلى سعر كاش (دليل 2026)
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              يبحث المئات من ملاك السيارات في <strong>جدة</strong> يومياً عن{" "}
              <strong>طريقة إسقاط مركبات فوري بجدة</strong> عند الرغبة في بيع
              سيارة مصدومة أو تالفة أو متعطلة تشليح دون الدخول في إجراءات معقدة
              أو رسوم إضافية. في هذا المقال الإرشادي من{" "}
              <strong>قيّمها كار</strong> نشرح لك بالتفصيل خطوات وشروط البيع
              والإسقاط الفوري في نفس اليوم.
            </p>

            {/* 3 Summary Highlights */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <FileCheck2 className="w-6 h-6 text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    إسقاط فوري مجاني 100%
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    بدون أي رسوم إدارية عند بيع سيارتك لنا في جدة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <Truck className="w-6 h-6 text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    سحب مجاني من كافة أحياء جدة
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    الحمدانية، بريمان، أبحر، الصفا، المروة، والخمرة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <ShieldCheck className="w-6 h-6 text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-bold text-white">
                    بدون فحص دوري أو استمارة سارية
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    نشتري جميع الحالات وننهي الإجراءات فوراً
                  </p>
                </div>
              </div>
            </div>

            {/* Guide Sections */}
            <div className="space-y-6 mt-8">
              {GUIDE_SECTIONS.map((sec, idx) => (
                <section
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#111927]/90 p-6 sm:p-8"
                >
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                    {sec.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                    {sec.content}
                  </p>
                </section>
              ))}
            </div>

            {/* Steps Checklist */}
            <section className="mt-8 rounded-3xl border border-[#38bdf8]/30 bg-[#38bdf8]/5 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-bold mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>خطوات التنفيذ الفوري في نفس اليوم</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                الخطوات الـ 5 لإتمام بيع سيارتك وإسقاط لوحاتها في جدة اليوم
              </h2>
              <ul className="space-y-3.5">
                {STEPS_LIST.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Internal Links Hub */}
            <section className="mt-10 pt-8 border-t border-white/10">
              <h2 className="text-lg font-extrabold text-white mb-4">
                تصفح أقسام وخدمات قيّمها كار المتخصصة في جدة:
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/isqat-markabat-jeddah"
                  className="rounded-xl bg-white/5 hover:bg-[#38bdf8]/15 border border-white/10 hover:border-[#38bdf8]/40 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-[#38bdf8] transition-all"
                >
                  خدمة إسقاط مركبات ولوحات فوري بجدة
                </Link>
                <Link
                  href="/tashleeh-jeddah"
                  className="rounded-xl bg-white/5 hover:bg-[#38bdf8]/15 border border-white/10 hover:border-[#38bdf8]/40 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-[#38bdf8] transition-all"
                >
                  شراء سيارات تشليح ومصدومة بجدة
                </Link>
                <Link
                  href="/damaged-cars-jeddah"
                  className="rounded-xl bg-white/5 hover:bg-[#38bdf8]/15 border border-white/10 hover:border-[#38bdf8]/40 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-[#38bdf8] transition-all"
                >
                  شراء سيارات متعطلة وبدون استمارة
                </Link>
                <Link
                  href="/car-valuation-jeddah"
                  className="rounded-xl bg-white/5 hover:bg-[#38bdf8]/15 border border-white/10 hover:border-[#38bdf8]/40 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-[#38bdf8] transition-all"
                >
                  تقييم وتثمين السيارات المصدومة بجدة
                </Link>
                <Link
                  href="/"
                  className="rounded-xl bg-white/5 hover:bg-[#38bdf8]/15 border border-white/10 hover:border-[#38bdf8]/40 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-[#38bdf8] transition-all"
                >
                  الصفحة الرئيسية — قيّمها كار
                </Link>
              </div>
            </section>

            {/* CTA Box */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-[#111927] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  جاهز لبيع سيارتك وإسقاط لوحاتها فوراً في جدة؟
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  تواصل معنا الآن عبر واتساب أو الاتصال المباشر نصلك بسطحة
                  مجانية خلال دقائق.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] px-6 py-3.5 text-sm font-bold text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل واتساب الآن</span>
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-[#38bdf8]" />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
