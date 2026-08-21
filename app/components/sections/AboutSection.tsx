'use client';

import {
  ArrowLeft,
  BadgeCheck,
  CarFront,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      dir="rtl"
      aria-labelledby="about-title"
      className="
        relative
        overflow-hidden
        bg-background
        py-2
      "
    >
      {/* ============================================================
          BACKGROUND DECORATION
      ============================================================ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-96
          w-96
          rounded-full
          bg-[var(--brand)]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[var(--brand-light)]/5
          blur-3xl
        "
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* ========================================================
              RIGHT COLUMN: Heading, Paragraphs, & Image Underneath
          ======================================================== */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <span
              className="
                mb-3
                w-fit
                text-sm
                font-bold
                tracking-wide
                text-[var(--brand-light)]
              "
            >
              من نحن
            </span>

            {/* Heading */}
            <h2
              id="about-title"
              className="
                max-w-2xl
                text-3xl
                font-extrabold
                leading-[1.2]
                tracking-tight
                text-[var(--foreground)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              شريكك الموثوق لبيع سيارتك{" "}
              <span className="text-[var(--brand-light)]">بسهولة واطمئنان</span>
            </h2>

            {/* Main Paragraphs */}
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-[1.9]
                text-[var(--foreground-secondary)]
                sm:text-lg
              "
            >
              نحن متخصصون في شراء السيارات المصدومة والتالفة وسيارات التشليح، ونهدف إلى جعل عملية بيع سيارتك أبسط وأوضح من البداية حتى استلامها.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-base
                leading-[1.9]
                text-[var(--foreground-secondary)]
                sm:text-lg
              "
            >
              نعتمد على تقييم عادل وواضح لحالة السيارة، وتواصل مباشر مع العميل، مع توفير خدمة السحب المجاني وإنهاء الإجراءات النظامية اللازمة دون تعقيد أو رسوم غير معلنة.
            </p>

            {/* Image placed directly under the text on the right column */}
            <div
              className="
                mt-8
                relative
                w-full
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--border)]
                bg-[var(--surface)]
                shadow-2xl
              "
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src="ChatGPT Image 21 أغسطس 2026، 05_02_16 م.png"
                  alt="شراء السيارات المصدومة والتالفة في جدة ومكة والطائف"
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

                {/* Dark overlay */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                {/* Bottom visual content */}
                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    left-5
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        mb-1
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      نعمل لخدمتك
                    </p>
                    <p
                      className="
                        text-lg
                        font-bold
                        text-white
                        sm:text-xl
                      "
                    >
                      جدة • مكة • الطائف
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      backdrop-blur-md
                    "
                  >
                    <MapPin size={20} />
                  </div>
                </div>
              </div>
            </div>

         
          </div>

          {/* ========================================================
              LEFT COLUMN: Tree-Leaf (Timeline) Layout
          ======================================================== */}
          <div className="relative flex flex-col justify-center lg:py-8">
            <div className="mb-6 lg:mb-8">
              <span className="text-xs font-bold tracking-wider text-[var(--brand-light)] uppercase">
                مميزات التعامل معنا
              </span>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mt-1">
                لماذا يختارنا العملاء؟
              </h3>
            </div>

            {/* Tree Branch / Timeline Container */}
            <div className="relative px-2 sm:px-0">
              {/* Central Trunk / Stem Line */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-6
                  sm:right-1/2
                  top-4
                  bottom-4
                  w-0.5
                  bg-gradient-to-b
                  from-[var(--brand)]/10
                  via-[var(--brand)]/50
                  to-[var(--brand)]/10
                  transform
                  sm:translate-x-1/2
                "
              />

              <div className="space-y-8 relative">
                {/* Leaf Item 1 (Right Branch) */}
                <div className="relative flex items-center sm:justify-start">
                  <div className="w-full sm:w-[calc(50%-2rem)] sm:ml-auto pr-12 sm:pr-0">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--surface)]/80
                        p-5
                        shadow-lg
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--brand)]/40
                      "
                    >
                      <div
                        className="
                          mb-3
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[var(--brand)]/10
                          text-[var(--brand-light)]
                        "
                      >
                        <BadgeCheck size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[var(--foreground)]">
                        تقييم عادل
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[var(--foreground-muted)]">
                        نقيّم السيارة حسب حالتها وقيمتها الفعلية.
                      </p>
                    </div>
                  </div>
                  {/* Node Dot */}
                  <div className="absolute right-6 sm:right-1/2 transform translate-x-1/2 w-4 h-4 rounded-full bg-[var(--brand)] border-4 border-background shadow-md hidden sm:block" />
                </div>

                {/* Leaf Item 2 (Left Branch) */}
                <div className="relative flex items-center sm:justify-end">
                  <div className="w-full sm:w-[calc(50%-2rem)] sm:mr-auto pr-12 sm:pr-0">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--surface)]/80
                        p-5
                        shadow-lg
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--brand)]/40
                      "
                    >
                      <div
                        className="
                          mb-3
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[var(--brand)]/10
                          text-[var(--brand-light)]
                        "
                      >
                        <ShieldCheck size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[var(--foreground)]">
                        إجراءات واضحة
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[var(--foreground-muted)]">
                        نوضح لك خطوات البيع دون تعقيد أو رسوم مخفية.
                      </p>
                    </div>
                  </div>
                  {/* Node Dot */}
                  <div className="absolute right-6 sm:right-1/2 transform translate-x-1/2 w-4 h-4 rounded-full bg-[var(--brand)] border-4 border-background shadow-md hidden sm:block" />
                </div>

                {/* Leaf Item 3 (Right Branch) */}
                <div className="relative flex items-center sm:justify-start">
                  <div className="w-full sm:w-[calc(50%-2rem)] sm:ml-auto pr-12 sm:pr-0">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--surface)]/80
                        p-5
                        shadow-lg
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--brand)]/40
                      "
                    >
                      <div
                        className="
                          mb-3
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[var(--brand)]/10
                          text-[var(--brand-light)]
                        "
                      >
                        <CarFront size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[var(--foreground)]">
                        سحب مجاني
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[var(--foreground-muted)]">
                        نوفر السحب بالسطحة حسب نطاق الخدمة.
                      </p>
                    </div>
                  </div>
                  {/* Node Dot */}
                  <div className="absolute right-6 sm:right-1/2 transform translate-x-1/2 w-4 h-4 rounded-full bg-[var(--brand)] border-4 border-background shadow-md hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}