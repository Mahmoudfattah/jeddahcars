import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Truck,
  Banknote,
  FileCheck2,
} from "lucide-react";
import Footer from "../../components/layout/Footer";


const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، قرأت دليل بيع السيارات السكراب والقديمة في جدة وأرغب في بيع سيارتي وإسقاط لوحاتها",
  );

export const metadata: Metadata = {
  title:
    "دليل بيع السيارات السكراب والقديمة للتشليح في جدة مع إسقاط اللوحات عبر أبشر | 0508374454",
  description:
    "نشتري السيارات السكراب والقديمة والتالفة في جدة كاش فوري مع سطحة مجانية وإسقاط لوحات نظامي عبر أبشر (سواء الاستمارة سارية أو منتهية). تواصل مع قيّمها كار: 0508374454.",
  keywords: [
    "شراء سيارات سكراب بجدة",
    "تشليح يشتري سيارات قديمة جدة",
    "اسقاط لوحات سيارة سكراب جدة ابشر",
    "بيع سيارة متوقفة في جدة كاش",
    "قيّمها كار",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/blog/sell-scrap-old-cars-jeddah",
  },
  openGraph: {
    title:
      "دليل بيع السيارات السكراب والقديمة للتشليح في جدة مع إسقاط اللوحات عبر أبشر",
    description:
      "كيف تبيع سيارتك السكراب أو القديمة المتوقفة في جدة بأعلى سعر نقدي مع إخلاء المسؤولية المرورية عبر أبشر في نفس اليوم.",
    url: "https://qeemahcar.com/blog/sell-scrap-old-cars-jeddah",
    siteName: "قيّمها كار لشراء السيارات المصدومة وإسقاط المركبات في جدة",
    locale: "ar_SA",
    type: "article",
  },
};

const SCRAP_CONDITIONS = [
  {
    type: "السيارات المتوقفة منذ فترة طويلة",
    details:
      "سيارات مركونة أمام المنزل أو الورشة وتعرضت لتلف البطارية أو الإطارات أو البودي.",
    action: "سحب مجاني بالسطحة + دفع كاش فوري",
  },
  {
    type: "السيارات التالفة (تخبيط مكينة / قير)",
    details:
      "مركبات تتجاوز تكلفة إصلاحها الميكانيكي قيمتها الفعلية في سوق المستعمل.",
    action: "تثمين القطع السليمة بأعلى سعر في جدة",
  },
  {
    type: "سيارات الحوادث القوية والسكراب",
    details:
      "سيارات غير صالحة للسير وتحتاج إلى إسقاط فوري من نظام المرور عبر أبشر.",
    action: "إسقاط لوحات نظامي (الاستمارة سارية أو منتهية)",
  },
];

export default function SellScrapOldCarsJeddahArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://qeemahcar.com/blog/sell-scrap-old-cars-jeddah#article",
        headline:
          "دليل بيع السيارات السكراب والقديمة للتشليح في جدة مع إسقاط اللوحات عبر أبشر",
        description:
          "دليل عملي لملاك السيارات السكراب والقديمة في جدة لبيع المركبة كاش فوري وإتمام إسقاط اللوحات النظامي عبر منصة أبشر.",
        datePublished: "2026-11-26T10:00:00+03:00",
        dateModified: "2026-11-26T10:00:00+03:00",
        author: {
          "@type": "Organization",
          name: "قيّمها كار لشراء السيارات المصدومة وإسقاط المركبات في جدة",
          url: "https://qeemahcar.com",
        },
        publisher: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        mainEntityOfPage:
          "https://qeemahcar.com/blog/sell-scrap-old-cars-jeddah",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://qeemahcar.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "المدونة",
            item: "https://qeemahcar.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "دليل بيع السيارات السكراب والقديمة في جدة",
            item: "https://qeemahcar.com/blog/sell-scrap-old-cars-jeddah",
          },
        ],
      },
    ],
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#090e17] text-slate-100 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <nav
          aria-label="مسار الصفحة"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400"
        >
          <Link
            href="/"
            className="hover:text-[#38bdf8] transition-colors flex items-center gap-1"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>الرئيسية</span>
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#38bdf8] transition-colors">
            المدونة
          </Link>
          <span>/</span>
          <span className="text-[#38bdf8] font-semibold">
            بيع السيارات السكراب والقديمة في جدة
          </span>
        </nav>
      </div>

      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#38bdf8] mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-3.5 py-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>دليل السيارات السكراب — جدة</span>
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

          <h1 className="text-2xl sm:text-4xl font-extrabold leading-[1.35] text-white">
            دليل بيع السيارات السكراب والقديمة للتشليح في جدة{" "}
            <span className="text-[#38bdf8]">مع إسقاط اللوحات عبر أبشر</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
            بدلاً من بقاء سيارتك القديمة أو السكراب متوقفة في أحد أحياء{" "}
            <strong>جدة</strong> وتعرضها للتلف أو مخالفات الوقوف، نقدم لك في{" "}
            <strong>قيّمها كار</strong> حلاً فورياً يجمع بين أعلى تثمين نقدي
            وسحب مجاني بالسطحة وإسقاط مركبة رسمي عبر منصة <strong>أبشر</strong>{" "}
            في نفس اليوم، سواء كانت الاستمارة سارية أو منتهية.
          </p>

          {/* 3 Pillars */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/5 flex items-start gap-3">
              <Banknote className="w-6 h-6 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white">شراء نقدي فوري</h2>
                <p className="text-xs text-slate-400 mt-1">
                  دفع كاش أو تحويل بنكي قبل تحريك السيارة
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/5 flex items-start gap-3">
              <Truck className="w-6 h-6 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white">
                  سطحة مجانية بجدة
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  نصل إلى موقعك في جميع أحياء جدة بدون رسوم
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/5 flex items-start gap-3">
              <FileCheck2 className="w-6 h-6 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white">
                  إسقاط نظامي بأبشر
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  إخلاء مسؤولية فوري (الاستمارة سارية أو منتهية)
                </p>
              </div>
            </div>
          </div>

          {/* Table of Accepted Scrap Cases */}
          <section className="mt-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4!">
              حالات السيارات السكراب والقديمة التي نشتريها في جدة
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-right border-collapse text-sm">
                <thead>
                  <tr className="bg-[#38bdf8]/15 text-[#38bdf8]">
                    <th className="p-3.5 font-bold">حالة المركبة</th>
                    <th className="p-3.5 font-bold">الوصف</th>
                    <th className="p-3.5 font-bold">ما نقدمه في قيّمها كار</th>
                  </tr>
                </thead>
                <tbody>
                  {SCRAP_CONDITIONS.map((row) => (
                    <tr
                      key={row.type}
                      className="border-t border-white/10 odd:bg-white/[0.02] even:bg-transparent"
                    >
                      <td className="p-3.5 font-bold text-white">{row.type}</td>
                      <td className="p-3.5 text-slate-300">{row.details}</td>
                      <td className="p-3.5 font-semibold text-emerald-400">
                        {row.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Compliance Note */}
          <div className="mt-8 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed text-slate-200">
              <strong>إجراء نظامي 100%:</strong> تتم جميع عمليات الشراء والإسقاط
              عبر منصة <strong>أبشر</strong> بوجود الاستمارة (سواء كانت سارية أو
              منتهية) ورمز التحقق من المالك، لضمان إسقاط المركبة رسمياً وإخلاء
              مسؤوليتك المرورية فور التسليم.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl border border-[#38bdf8]/30 bg-gradient-to-r from-[#0f172a] to-[#132a46] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-extrabold text-white">
                تخلّص من سيارتك السكراب في جدة اليوم بأعلى سعر كاش
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                تواصل معنا اتصالاً أو عبر الواتساب لتقييم السيارة مجاناً وإرسال
                السطحة فوراً.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8] px-6 py-3 text-sm font-bold text-slate-950 hover:bg-sky-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="font-bold text-white">روابط مفيدة:</span>
            <Link href="/" className="text-[#38bdf8] hover:underline">
              اسقاط مركبات فوري جدة
            </Link>
            <span>•</span>
            <Link href="/blog" className="text-[#38bdf8] hover:underline">
              شروط إسقاط المركبات عبر أبشر
            </Link>
            <span>•</span>
            <Link
              href="/rear-front-damaged-cars"
              className="text-[#38bdf8] hover:underline"
            >
              السيارات المصدومة من الخلف والأمام
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
