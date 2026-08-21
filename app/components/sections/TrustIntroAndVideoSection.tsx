'use client';

import {
  ShieldCheck,
  ArrowLeft,
  PlayCircle,
} from "lucide-react";

export default function TrustIntroAndVideoSection() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",

    name: "كيف نشتري السيارات المصدومة والتالفة في جدة؟",

    description:
      "تعرف على خطوات بيع السيارات المصدومة والتالفة وسيارات التشليح في جدة ومكة والطائف، بداية من تقييم السيارة والتسعير العادل وحتى السحب المجاني وإنهاء إجراءات نقل الملكية وإسقاط اللوحات.",

    thumbnailUrl: [
      "https://YOUR-DOMAIN.com/video-poster.jpg",
    ],

    uploadDate: "2026-08-21",

    duration: "PT35S",

    contentUrl:
      "https://YOUR-DOMAIN.com/video-optimized1.mp4",

    embedUrl:
      "https://YOUR-DOMAIN.com/jeddah#video",

    inLanguage: "ar-SA",

    isFamilyFriendly: true,

    publisher: {
      "@type": "Organization",
      name: "شراء السيارات المصدومة",
      url: "https://YOUR-DOMAIN.com",
    },
  };

  return (
    <>
      {/* ============================================================
          TRUST INTRO + VIDEO SECTION
      ============================================================ */}

      <section
        id="how-it-works"
        dir="rtl"
        aria-labelledby="trust-video-title"
        className="
          relative
          overflow-hidden
          bg-background
          py-16
          sm:py-20
          lg:py-24
        "
      >
        {/* ------------------------------------------------------------
            Subtle Background Glow
        ------------------------------------------------------------ */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -
            top-32
            right-1/4
            h-72
            w-72
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
            -
            bottom-12
            left-1/4
            h-80
            w-80
            rounded-full
            bg-[var(--brand-light)]/5
            blur-3xl
          "
        />

        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-10
              lg:grid-cols-2
              lg:gap-10
          "
          >
            {/* ========================================================
                RIGHT COLUMN — CONTENT
            ======================================================== */}

            <div className="flex flex-col gap-5">
              {/* Eyebrow */}

              <span
                className="
                  w-fit
                  text-sm
                  font-bold
                  tracking-wide
                  text-[var(--brand-light)]
                "
              >
                الثقة والاحترافية
              </span>

              {/* Heading */}

              <h2
                id="trust-video-title"
                className="
                  max-w-xl
                  text-3xl
                  font-extrabold
                  leading-[1.25]
                  text-[var(--foreground)]
                  sm:text-4xl
                  lg:text-4xl
                "
              >
                كيف نشتري سيارتك المصدومة والتالفة؟
              </h2>

              {/* Intro paragraph */}

              <p
                className="
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-[var(--foreground-secondary)]
                  sm:text-lg
                "
              >
                نشتري السيارات المصدومة والتالفة وسيارات التشليح في جدة
                ومكة والطائف، مع تقييم عادل وشفاف للسيارة وتقديم سعر مناسب
                لحالتها.
              </p>

              {/* Process paragraph */}

              <p
                className="
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-[var(--foreground-secondary)]
                  sm:text-lg
                "
              >
                نوفر لك السحب المجاني بالسطحة، ونتولى الإجراءات النظامية
                من نقل الملكية إلى إسقاط اللوحات، لتتم عملية البيع بسهولة
                وبدون رسوم مخفية.
              </p>

              {/* CTA */}

              <div className="pt-2">
                <a
                  href="/about"
                  aria-label="تعرف على خطوات شراء السيارات المصدومة والتالفة"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-4
                    rounded-full
                    bg-white
                    py-1.5
                    pl-1.5
                    pr-6
                    font-semibold
                    text-black
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-gray-200
                    hover:shadow-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[var(--brand)]
                    focus:ring-offset-2
                    focus:ring-offset-background
                  "
                >
                  <span
                    className="
                      text-sm
                      text-blue-950
                    "
                  >
                    كيف نشتري سيارتك؟
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--brand)]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  >
                    <ArrowLeft size={18} />
                  </span>
                </a>
              </div>
            </div>

            {/* ========================================================
                LEFT COLUMN — VIDEO
            ======================================================== */}

            <div className="flex w-full flex-col items-center">
              {/* Video wrapper */}

              <div
                id="video"
                className="
                  relative
                  aspect-video
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-black
                  shadow-2xl
                  sm:rounded-3xl
                "
              >
                <video
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                  controls
                  preload="metadata"
                  poster="/video-poster.jpg"
                  playsInline
                  aria-label="فيديو يوضح خطوات شراء السيارات المصدومة والتالفة في جدة ومكة والطائف"
                >
                  <source
                    src="/video-optimized1.mp4"
                    type="video/mp4"
                  />

                  <track
                    kind="captions"
                    src="/captions/car-buying-process-ar.vtt"
                    srcLang="ar"
                    label="العربية"
                    default
                  />

                  متصفحك لا يدعم تشغيل الفيديو.
                  <a
                    href="/video-optimized1.mp4"
                    className="text-blue-500 underline"
                  >
                    مشاهدة الفيديو
                  </a>
                </video>

                {/* ------------------------------------------------------
                    Floating Video Badge
                ------------------------------------------------------ */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    z-10
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]/90
                    py-1.5
                    pl-3
                    pr-1.5
                    shadow-lg
                    backdrop-blur-md
                    sm:right-4
                    sm:top-4
                    sm:gap-2.5
                    sm:py-2
                    sm:pl-3.5
                    sm:pr-2
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--brand-pale)]
                      text-[var(--brand-light)]
                      sm:h-8
                      sm:w-8
                    "
                  >
                    <PlayCircle
                      size={15}
                      className="sm:h-4 sm:w-4"
                    />
                  </span>

                  <span
                    className="
                      whitespace-nowrap
                      text-[10px]
                      font-bold
                      text-[var(--foreground)]
                      sm:text-xs
                    "
                  >
                    شرح مبسط في أقل من دقيقة
                  </span>
                </div>
              </div>

              {/* ========================================================
                  TRUST BADGE
              ======================================================== */}

              <div
                className="
                  mt-5
                  flex
                  items-start
                  justify-center
                  gap-2.5
                  px-2
                  text-center
                  sm:items-center
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--brand)]
                    text-white
                  "
                >
                  <ShieldCheck size={14} />
                </span>

                <span
                  className="
                    text-xs
                    leading-relaxed
                    text-[var(--foreground-muted)]
                    sm:text-sm
                  "
                >
                  نفس الخطوات لكل سيارة، بدون رسوم مخفية
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          VIDEO OBJECT STRUCTURED DATA
      ============================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />
    </>
  );
}