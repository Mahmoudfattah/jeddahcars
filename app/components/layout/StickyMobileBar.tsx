"use client";

import { Phone, MessageCircle } from "lucide-react";

const PHONE_TEL = "tel:+966508374454";
const WHATSAPP_URL =
  "https://wa.me/966508374454?text=" +
  encodeURIComponent(
    "السلام عليكم، أرغب في تثمين سيارتي أو إسقاط لوحاتها الفوري عبر أبشر في جدة (الاستمارة منتهية أو سارية).",
  );
  
export default function StickyMobileBar() {
  const trackEvent = (
    eventName: "phone_call_click" | "whatsapp_click",
    label: string,
  ) => {
    if (
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void })
        .gtag === "function"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        eventName,
        {
          event_category: "conversion",
          event_label: label,
        },
      );
    }
  };

  return (
    <div
      dir="rtl"
      className="fixed bottom-3 inset-x-3 z-50 md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/15 bg-[#090e17]/90 p-1.5 shadow-[0_16px_36px_rgba(0,0,0,0.65)] backdrop-blur-xl">
        {/* زر الاتصال */}
        <a
          href={PHONE_TEL}
          onClick={() => trackEvent("phone_call_click", "sticky_mobile_bar")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/15 active:scale-[0.98] py-3 px-3 text-xs sm:text-sm font-bold text-[#38bdf8] transition-all"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#38bdf8] text-[#090e17]">
            <Phone className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span>اتصل للتثمين</span>
        </a>

        {/* زر الواتساب */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", "sticky_mobile_bar")}
          className="relative flex flex-[1.2] items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-500 to-emerald-400 active:scale-[0.98] py-3 px-3 text-xs sm:text-sm font-extrabold text-[#062012] shadow-[0_8px_20px_-4px_rgba(34,197,94,0.45)] transition-all"
        >
          {/* نقطة نبض حية */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#062012] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#062012]" />
          </span>
          <MessageCircle className="h-4 w-4 shrink-0 fill-[#062012]/15" />
          <span>واتساب فوري</span>
        </a>
      </div>
    </div>
  );
}
