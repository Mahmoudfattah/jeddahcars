import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Gauge,
  Camera,
  FileCheck2,
  Banknote,
  CheckCircle2,
} from "lucide-react";
import Footer from "../../components/layout/Footer";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، قرأت مقال تقييم السيارات المصدومة والعطلانة في جدة وأرغب في تقييم سيارتي خلال 15 دقيقة",
  );

export const metadata: Metadata = {
  title:
    "كيف يتم تقييم سيارتك المصدومة أو العطلانة في جدة خلال 15 دقيقة عبر الواتساب؟ | 0508374454",
  description:
    "تعرّف على معايير تثمين وتسعير السيارات المصدومة والمتعطلة في جدة خلال 15 دقيقة عبر الواتساب، مع شراء كاش فوري وسطحة مجانية وإسقاط لوحات عبر أبشر (الاستمارة سارية أو منتهية): 0508374454.",
  keywords: [
    "تقييم سريع لسيارتك المصدومة جدة",
    "تثمين سيارة عطلانة عبر الواتساب جدة",
    "شراء سيارات مصدومة ومتعطلة في جدة",
    "قيّمها كار جدة",
  ],
  alternates: {
    canonical: "https://qeemahcar.com/blog/fast-damaged-car-valuation-jeddah",
  },
  openGraph: {
    title:
      "كيف يتم تقييم سيارتك المصدومة أو العطلانة في جدة خلال 15 دقيقة عبر الواتساب؟",
    description:
      "خطوات ومعايير التقييم الفوري للسيارات المصدومة والتالفة في جدة مع شراء نقدي وسحب مجاني وإسقاط أبشر.",
    url: "https://qeemahcar.com/blog/fast-damaged-car-valuation-jeddah",
    siteName: "قيّمها كار لشراء السيارات المصدومة وإسقاط المركبات في جدة",
    locale: "ar_SA",
    type: "article",
  },
};

const VALUATION_STEPS = [
  {
    step: "01",
    title: "إرسال الصور الأساسية عبر الواتساب",
    desc: "أرسل 4 صور واضحة للسيارة ومكان الصدمة أو العطل مع ذكر النوع والموديل عبر 0508374454.",
    icon: Camera,
  },
  {
    step: "02",
    title: "فحص القطع السليمة وتحديد السعر خلال 15 دقيقة",
    desc: "نقيّم المكينة والقير والكمبيوتر والبودي السليم وفق أسعار سوق جدة الحقيقية لتقديم أعلى سعر عادل.",
    icon: Gauge,
  },
  {
    step: "03",
    title: "المعاينة الميدانية والدفع كاش فوري",
    desc: "يصل مندوبنا مع سطحة مجانية إلى أي حي في جدة وتستلم كامل المبلغ نقداً أو تحويلاً فورياً.",
    icon: Banknote,
  },
  {
    step: "04",
    title: "إسقاط المركبة واللوحات عبر أبشر فوراً",
    desc: "ننهي إجراءات الإسقاط النظامي من حسابك في أبشر في نفس اليوم سواء كانت الاستمارة سارية أو منتهية.",
    icon: FileCheck2,
  },
];

const PRICE_BOOSTERS = [
  "سلامة المحرك (المكينة) أو ناقل الحركة (القير) حتى لو تعرض الهيكل لصدمة قوية.",
  "عدم فتح الوسائد الهوائية (الإيرباقات) أو سلامة الجزء الخلفي/الأمامي غير المتضرر.",
  "توفر الاستمارة والهوية وجاهزية رمز التحقق من منصة أبشر لإتمام الإجراء في نفس اليوم.",
  "وضوح الصور المرسلة عبر الواتساب مما يختصر وقت المعاينة ويضمن تسعيراً دقيقاً من المرة الأولى.",
];

export default function FastValuationJeddahArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://qeemahcar.com/blog/fast-damaged-car-valuation-jeddah#article",
        headline:
          "كيف يتم تقييم سيارتك المصدومة أو العطلانة في جدة خلال 15 دقيقة عبر الواتساب؟",
        description:
          "شرح تفصيلي لمعايير وخطوات تقييم السيارات المصدومة والمتعطلة في جدة عبر الواتساب مع دفع كاش فوري وإسقاط مركبات عبر أبشر.",
        datePublished: "2026-11-19T10:00:00+03:00",
        dateModified: "2026-11-19T10:00:00+03:00",
        author: {
          "@type": "Organization",
          name: "قيّمها كار لشراء السيارات المصدومة وإسقاط المركبات في جدة",
          url: "https://qeemahcar.com",
        },
        publisher: {
          "@id": "https://qeemahcar.com/#autodealer",
        },
        mainEntityOfPage:
          "https://qeemahcar.com/blog/fast-damaged-car-valuation-jeddah",
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
            name: "تقييم السيارة المصدومة في جدة خلال 15 دقيقة",
            item: "https://qeemahcar.com/blog/fast-damaged-car-valuation-jeddah",
          },
        ],
      },
    ],
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#090e17] text-slate-100 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
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
            تقييم السيارة المصدومة والعطلانة في جدة
          </span>
        </nav>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131f33] via-[#0f172a] to-[#090e17] p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#38bdf8] mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-3.5 py-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>دليل التثمين السريع — جدة</span>
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

          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-white max-w-4xl">
            كيف يتم تقييم سيارتك المصدومة أو العطلانة في جدة{" "}
            <span className="text-[#38bdf8]">خلال 15 دقيقة عبر الواتساب؟</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-4xl">
            كثير من ملاك السيارات في <strong>جدة</strong> يترددون قبل بيع
            السيارة المصدومة أو المتعطلة خوفاً من بخس السعر أو ضياع الوقت في
            التنقل بين التشاليح. في <strong>قيّمها كار</strong> نمنحك تسعيراً
            فورياً وشفافاً خلال 15 دقيقة عبر الواتساب، مع سحب مجاني بسطحة خاصة
            وإتمام{" "}
            <Link
              href="/blog"
              className="text-[#38bdf8] underline font-semibold"
            >
              إسقاط المركبات عبر أبشر
            </Link>{" "}
            في نفس اليوم.
          </p>

          {/* 4-Step Valuation Flow */}
          <section className="mt-10 pt-8 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-6!">
              مراحل التثمين والبيع الفوري في أحياء جدة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {VALUATION_STEPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex items-start gap-4 transition-colors hover:border-[#38bdf8]/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] font-extrabold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#38bdf8]" />
                        <h3 className="text-base font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* What raises your car's valuation */}
          <section className="mt-10 rounded-2xl border border-[#38bdf8]/20 bg-[#38bdf8]/[0.06] p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4!">
              عوامل ترفع قيمة تسعير سيارتك في جدة
            </h2>
            <ul className="space-y-3">
              {PRICE_BOOSTERS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="mt-10 rounded-3xl border border-[#38bdf8]/30 bg-gradient-to-r from-[#0f172a] to-[#132a46] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-extrabold text-white">
                احصل على تقييم فوري لسيارتك في جدة الآن
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                نغطي الحمدانية، أبحر، الصفا، المروة، بريمان، قويزة، والخمرة —
                سطحة مجانية وإسقاط لوحات نظامي عبر أبشر.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تقييم فوري واتساب</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8] px-6 py-3 text-sm font-bold text-slate-950 hover:bg-sky-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="font-bold text-white">مواضيع ذات صلة:</span>
            <Link
              href="/rear-front-damaged-cars"
              className="text-[#38bdf8] hover:underline"
            >
              شراء السيارات المصدومة من الخلف والأمام بجدة
            </Link>
            <span>•</span>
            <Link href="/blog" className="text-[#38bdf8] hover:underline">
              شروط إسقاط المركبات عبر أبشر
            </Link>
          </div>مراحل التثمين والبيع الفوري في أحياء جدة
        </div>
      </article>

      <Footer />
    </div>
  );
}