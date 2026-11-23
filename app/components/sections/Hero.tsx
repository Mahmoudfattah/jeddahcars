"use client";

import Image from "next/image";
import {
  Truck,
  ShieldCheck,
  Clock3,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Car,
  Check,
  FileCheck2,
  Banknote,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "966508374454";

const SERVICES = [
  {
    value: "تثمين وبيع سيارة مصدومة بجدة",
    label: "بيع سيارة مصدومة / تالفة",
    sub: "شراء نقدي وسحب مجاني",
    icon: Banknote,
  },
  {
    value: "إسقاط مركبة ولوحات فوري عبر أبشر",
    label: "إسقاط مركبة ولوحات",
    sub: "إسقاط فوري معتمد بأبشر",
    icon: FileCheck2,
  },
];

export default function HeroSection() {
  const [carModel, setCarModel] = useState("");
  const [serviceType, setServiceType] = useState(SERVICES[0].value);
  const [phone, setPhone] = useState("");
  const [validReg, setValidReg] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validReg) return;

    if (
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void })
        .gtag === "function"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        "whatsapp_form_submit",
        {
          event_category: "Lead",
          event_label: `hero_form_jeddah_${serviceType}`,
        },
      );
    }

    const msg =
      `السلام عليكم، أرغب في خدمة (${serviceType}) في جدة:\n` +
      `- نوع السيارة والموديل: ${carModel}\n` +
      `- رقم الجوال: ${phone}\n` +
      `- الإقرار النظامي: الاستمارة سارية أو منتهية لإتمام الإجراء النظامي عبر أبشر.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className="relative overflow-hidden bg-background py-18 text-foreground sm:py-22"
      dir="rtl"
    >
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* ========================================================
              TEXT COLUMN + QUICK FORM
          ======================================================== */}
          <div className="order-1 flex flex-col gap-6 lg:col-span-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-[var(--brand-light)]">
                إسقاط مركبات فوري · تثمين وشراء سيارات مصدومة وتشليح — جدة فقط
              </p>

              <h1 className="text-3xl font-extrabold leading-[1.2] text-[var(--foreground)] sm:text-4xl lg:text-[42px]">
                اسقاط مركبات فوري جدة
                <br />
                ونشتري سيارتك المصدومة كاش
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[var(--foreground-secondary)]">
                نشتري جميع أنواع السيارات المصدومة والتشليح والتالفة والمتعطلة في
                كافة أحياء جدة بأعلى سعر كاش فوري، مع سطحة مجانية من أمام منزلك
                وإتمام إجراءات إسقاط اللوحات الفوري عبر أبشر (سواء كانت
                الاستمارة سارية أو منتهية).
              </p>
            </div>

            {/* ========================================================
                EMBEDDED HERO QUICK FORM
            ======================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111927]/95 p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -top-20 -left-20 h-44 w-44 rounded-full bg-[#38bdf8]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />

              {/* Header & Location Pill */}
              <div className="relative flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-white">
                    تثمين وإسقاط فوري في جدة
                  </h2>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    رد وتقييم مبدئي خلال 5 دقائق
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-[11px] font-bold text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                  خدمة ميدانية — جميع أحياء جدة
                </span>
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-3.5">
                {/* Service Type Visual Toggle */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    اختر الخدمة المطلوبة في جدة
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICES.map((srv) => {
                      const Icon = srv.icon;
                      const active = serviceType === srv.value;
                      return (
                        <button
                          key={srv.value}
                          type="button"
                          onClick={() => setServiceType(srv.value)}
                          className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-right transition-all duration-200 cursor-pointer ${
                            active
                              ? "border-[#38bdf8]/60 bg-[#38bdf8]/10 shadow-[0_0_15px_rgba(56,189,248,0.1)]"
                              : "border-white/10 bg-[#090e17]/80 hover:border-white/20 hover:bg-[#090e17]"
                          }`}
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                              active
                                ? "bg-[#38bdf8] text-[#090e17]"
                                : "bg-white/[0.06] text-slate-400"
                            }`}
                          >
                            <Icon className="w-4 h-4" strokeWidth={2.2} />
                          </div>
                          <div className="min-w-0">
                            <div
                              className={`text-xs font-bold truncate ${
                                active ? "text-white" : "text-slate-300"
                              }`}
                            >
                              {srv.label}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate mt-0.5">
                              {srv.sub}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="group relative">
                    <Car className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 transition-colors group-focus-within:text-[#38bdf8]" />
                    <input
                      type="text"
                      required
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      placeholder="السيارة والموديل (أكسنت 2020)"
                      className="w-full rounded-xl border border-white/10 bg-[#090e17] pr-10 pl-3 py-2.5 text-xs sm:text-sm font-medium text-white placeholder:text-slate-500 outline-none transition-all focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/10"
                    />
                  </div>

                  <div className="group relative">
                    <Phone className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 transition-colors group-focus-within:text-[#38bdf8]" />
                    <input
                      type="tel"
                      dir="ltr"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full rounded-xl border border-white/10 bg-[#090e17] pr-10 pl-3 py-2.5 text-xs sm:text-sm font-medium text-right text-white placeholder:text-slate-500 outline-none transition-all focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/10"
                    />
                  </div>
                </div>

                {/* Custom Checkbox */}
                <label className="flex items-center gap-2 pt-0.5 text-[11px] font-medium text-slate-300 cursor-pointer select-none group">
                  <div className="relative flex items-center justify-center shrink-0">
                    <input
                      type="checkbox"
                      required
                      checked={validReg}
                      onChange={(e) => setValidReg(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`h-4 w-4 rounded-md border transition-all flex items-center justify-center ${
                        validReg
                          ? "border-[#38bdf8] bg-[#38bdf8]"
                          : "border-white/20 bg-[#090e17] group-hover:border-white/40"
                      }`}
                    >
                      {validReg && (
                        <Check
                          className="w-3 h-3 text-[#090e17]"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                  </div>
                  <span className="leading-snug">
                    أقر بأن رخصة السير (الاستمارة) سارية أو منتهية لإتمام
                    المبايعة أو الإسقاط عبر{" "}
                    <strong className="font-bold text-white">أبشر</strong>
                  </span>
                </label>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 py-3 px-5 text-xs sm:text-sm font-extrabold text-[#062012] shadow-[0_10px_25px_-5px_rgba(34,197,94,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-[#062012]/10" />
                  <span>أرسل بيانات السيارة للتثمين عبر واتساب</span>
                </button>

                {/* Subtle Trust Footer */}
                <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[10px] font-semibold text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>
                    إسقاط ومبايعة نظامية 100% عبر أبشر — بدون أي التزام
                  </span>
                </div>
              </form>
            </div>

            {/* Bottom info panel — Jeddah zones only */}
            <div className="mt-2 hidden max-w-md flex-col gap-3 border-t border-[var(--border)] pt-4 lg:flex">
              <span className="text-sm font-semibold text-[var(--foreground)]">
                تغطية فورية لجميع مناطق جدة
              </span>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-light)]" />
                  شمال وجنوب جدة
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--sapphire-light)]" />
                  تشليح بريمان
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--slate-400)]" />
                  تشليح الخمرة والحمدانية
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              CAR COLUMN
          ======================================================== */}
          <div className="relative order-2 flex min-h-[300px] items-center justify-center sm:min-h-[380px] lg:col-span-6 lg:min-h-[520px]">
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
            <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <Image
                src="/heroImage.webp"
                alt="سيارة سيدان مصدومة ومتضررة في جدة جاهزة للتقييم والبيع وإسقاط اللوحات"
                width={900}
                height={650}
                quality={75}
                sizes="(max-width: 640px) 380px, (max-width: 1024px) 512px, 576px"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* CONDITION CARD (Top Right) */}
            <div className="absolute z-20 flex flex-col items-center right-2 top-2 gap-1 sm:right-4 sm:top-6 sm:gap-1.5">
              <span className="font-semibold text-[var(--foreground-muted)] text-[10px] sm:text-[11px]">
                الحالة
              </span>

              <div className="flex items-center border border-[var(--border)] bg-[var(--surface)]/90 shadow-[var(--shadow-md)] backdrop-blur-sm max-w-[150px] gap-2 rounded-xl px-2.5 py-1.5 sm:max-w-[190px] sm:gap-2.5 sm:rounded-2xl sm:px-3.5 sm:py-2.5">
                <div className="flex shrink-0 items-center justify-center rounded-full bg-[var(--brand-pale)] text-[var(--brand-light)] h-6 w-6 sm:h-8 sm:w-8">
                  <ShieldCheck className="w-[14px] h-[14px] sm:w-4 sm:h-4" />
                </div>
                <span className="font-medium text-[var(--foreground)] leading-tight text-[10px] sm:leading-snug sm:text-xs">
                  نقيّم أي درجة ضرر، من خدش بسيط لتلف كامل
                </span>
              </div>
            </div>

            {/* SERVICE CARD (Middle Left) */}
            <div className="absolute z-20 flex flex-col items-center left-2 top-[10%] -translate-y-1/2 gap-1 sm:left-4 sm:top-32 sm:translate-y-0 sm:gap-1.5">
              <span className="font-semibold text-[var(--foreground-muted)] text-[10px] sm:text-[11px]">
                الخدمة
              </span>

              <div className="flex items-center border border-[var(--border)] bg-[var(--surface)]/90 shadow-[var(--shadow-md)] backdrop-blur-sm max-w-[140px] gap-2 rounded-xl px-2.5 py-1.5 sm:max-w-[180px] sm:gap-2.5 sm:rounded-2xl sm:px-3.5 sm:py-2.5">
                <div className="flex shrink-0 items-center justify-center rounded-full bg-[var(--brand-pale)] text-[var(--brand-light)] h-6 w-6 sm:h-8 sm:w-8">
                  <Truck className="w-[14px] h-[14px] sm:w-4 sm:h-4" />
                </div>
                <span className="font-medium text-[var(--foreground)] leading-tight text-[10px] sm:leading-snug sm:text-xs">
                  سطحة مجانية من موقعك داخل جدة
                </span>
              </div>
            </div>

            {/* INSTANT EVALUATION (Bottom Center) */}
            <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-8 lg:left-auto lg:right-6 lg:translate-x-0">
              <div className="flex items-center border border-[var(--border)] bg-[var(--surface)]/90 shadow-[var(--shadow-md)] backdrop-blur-sm rounded-full gap-2 py-1.5 pl-3 pr-1.5 sm:gap-3 sm:py-2 sm:pl-4 sm:pr-2">
                <div className="flex shrink-0 items-center justify-center rounded-full bg-[var(--brand-pale)] text-[var(--brand-light)] h-7 w-7 sm:h-9 sm:w-9">
                  <Clock3 className="w-[14px] h-[14px] sm:w-4 sm:h-4" />
                </div>
                <span className="whitespace-nowrap font-semibold text-[var(--foreground)] text-[11px] sm:text-xs">
                  تقييم خلال دقائق
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE JEDDAH ZONES */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-[var(--foreground-muted)] lg:hidden">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-light)]" />
            شمال وجنوب جدة
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--sapphire-light)]" />
            تشليح بريمان
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--slate-400)]" />
            الخمرة والحمدانية
          </span>
        </div>
      </div>
    </section>
  );
}