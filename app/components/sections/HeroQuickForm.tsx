"use client";

import { useState } from "react";
import {
  MessageCircle,
  ShieldCheck,
  MapPin,
  Clock,
  Car,
  Phone,
  Check,
  ArrowUpLeft,
  FileCheck2,
  Banknote,
} from "lucide-react";

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

export default function HeroQuickForm() {
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
      `- الإقرار النظامي: الاستمارة منتهية أو سارية لإتمام الإجراء النظامي عبر أبشر.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      dir="rtl"
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111927]/95 p-6 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
    >
      {/* إضاءة خلفية خفيفة متناغمة مع الثيم الداكن */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-52 w-52 rounded-full bg-[#38bdf8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header & Location Pill */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
            تثمين وإسقاط فوري في جدة
          </h2>
          <p className="text-xs font-medium text-slate-400 mt-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            رد وتقييم مبدئي خلال 5 دقائق
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1.5 text-[11px] font-bold text-slate-200">
          <MapPin className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
          تشليح الندى 207 — الخمرة 3
        </span>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-4">
        {/* Service Type Visual Toggle (بديل عصري للـ Select) */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-2">
            اختر الخدمة المطلوبة
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SERVICES.map((srv) => {
              const Icon = srv.icon;
              const active = serviceType === srv.value;
              return (
                <button
                  key={srv.value}
                  type="button"
                  onClick={() => setServiceType(srv.value)}
                  className={`flex items-center gap-3 rounded-2xl border p-3 text-right transition-all duration-200 cursor-pointer ${
                    active
                      ? "border-[#38bdf8]/60 bg-[#38bdf8]/10 shadow-[0_0_20px_rgba(56,189,248,0.12)]"
                      : "border-white/10 bg-[#090e17]/80 hover:border-white/20 hover:bg-[#090e17]"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      active
                        ? "bg-[#38bdf8] text-[#090e17]"
                        : "bg-white/[0.06] text-slate-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-xs sm:text-[13px] font-bold truncate ${
                        active ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {srv.label}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {srv.sub}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Car Model */}
          <div className="group relative">
            <Car className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 transition-colors group-focus-within:text-[#38bdf8]" />
            <input
              type="text"
              required
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              placeholder="السيارة والموديل (أكسنت 2020)"
              className="w-full rounded-2xl border border-white/10 bg-[#090e17] pr-10 pl-3.5 py-3 text-sm font-medium text-white placeholder:text-slate-500 outline-none transition-all focus:border-[#38bdf8] focus:ring-4 focus:ring-[#38bdf8]/10"
            />
          </div>

          {/* Phone */}
          <div className="group relative">
            <Phone className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 transition-colors group-focus-within:text-[#38bdf8]" />
            <input
              type="tel"
              dir="ltr"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05XXXXXXXX"
              className="w-full rounded-2xl border border-white/10 bg-[#090e17] pr-10 pl-3.5 py-3 text-sm font-medium text-right text-white placeholder:text-slate-500 outline-none transition-all focus:border-[#38bdf8] focus:ring-4 focus:ring-[#38bdf8]/10"
            />
          </div>
        </div>

        {/* Custom Checkbox */}
        <label className="flex items-center gap-2.5 pt-1 text-xs font-medium text-slate-300 cursor-pointer select-none group">
          <div className="relative flex items-center justify-center shrink-0">
            <input
              type="checkbox"
              required
              checked={validReg}
              onChange={(e) => setValidReg(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`h-5 w-5 rounded-lg border transition-all flex items-center justify-center ${
                validReg
                  ? "border-[#38bdf8] bg-[#38bdf8]"
                  : "border-white/20 bg-[#090e17] group-hover:border-white/40"
              }`}
            >
              {validReg && (
                <Check className="w-3.5 h-3.5 text-[#090e17]" strokeWidth={3} />
              )}
            </div>
          </div>
          <span className="leading-snug">
            أقر بأن رخصة السير (الاستمارة) سارية أو منتهية لإتمام المبايعة أو
            الإسقاط عبر <strong className="font-bold text-white">أبشر</strong>
          </span>
        </label>

        {/* Submit CTA */}
        <button
          type="submit"
          className="group relative w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-l from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 py-3.5 px-6 text-sm sm:text-base font-extrabold text-[#062012] shadow-[0_12px_30px_-5px_rgba(34,197,94,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-[#062012]/10" />
          <span>أرسل بيانات السيارة للتثمين عبر واتساب</span>
          <ArrowUpLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Subtle Trust Footer */}
        <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] font-semibold text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>إسقاط ومبايعة نظامية 100% عبر أبشر — بدون أي التزام</span>
        </div>
      </form>
    </div>
  );
}
