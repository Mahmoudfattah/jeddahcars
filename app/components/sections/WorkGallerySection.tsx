import Image from "next/image";

const gallery = [
  {
    id: "tow-truck",
    src: "/سطحة-نقل-سيارة-مصدومة-جدة.png",
    alt: "شراء السيارات المصدومة في جدة مع سحب مجاني بالسطحة وإنهاء إجراءات الإسقاط",
    title: "شراء السيارات المصدومة في جدة",
    tags: [
      "سحب مجاني للسيارة المصدومة من موقعك",
      "إنهاء إجراءات الإسقاط ونقل الملكية",
      "تقييم السيارة ودفع السعر بشكل فوري",
    ],
    size: "lg",
  },
  {
    id: "side-damage",
    src: "/سيارة-مصدومة-من-الجانب-جدة.png",
    alt: "شراء سيارة مصدومة من الجانب في جدة وتقييم أضرار الحوادث بأفضل سعر",
    title: "شراء السيارات المتضررة من الحوادث",
    size: "sm",
  },
  {
    id: "front-damage-sunset",
    src: "/سيارة-مصدومة-من-الامام.png",
    alt: "شراء سيارة مصدومة من الأمام في جدة مهما كان حجم الضرر أو حالة السيارة",
    title: "شراء السيارات المصدومة من الأمام",
    size: "sm",
  },
  {
    id: "rear-damage",
    src: "/سيارة-مصدومة-من-الخلف.png",
    alt: "شراء السيارات المصدومة من الخلف في جدة مع تقييم السيارة ونقل الملكية",
    title: "شراء السيارات المصدومة من الخلف",
    size: "sm",
  },
  {
    id: "heavy-front-damage",
    src: "/سيارة-تالفة-ضرر-كبير-امامي.png",
    alt: "شراء السيارات التالفة والمصدومة بالكامل في جدة بأفضل سعر بعد التقييم",
    title: "شراء السيارات التالفة بالكامل",
    size: "sm",
  },
];

export default function WorkGallerySection() {
  return (
    <section
      className="bg-background py-4 font-sans"
      aria-labelledby="gallery-title"
      id="cars"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">

        {/* =========================
            SECTION HEADER
        ========================= */}
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
            flex
            flex-col
            items-center
            gap-3
            sm:gap-4
            mb-8
            sm:mb-10
            md:mb-12
          "
        >
          <span className="text-xs sm:text-sm font-semibold text-[var(--brand-light)]">
            شراء السيارات المصدومة في جدة
          </span>

          <h2
            id="gallery-title"
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-extrabold
              text-[var(--foreground)]
              leading-[1.35]
              px-2
            "
          >
            سيارات مصدومة وتالفة اشتريناها في جدة
          </h2>

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-[var(--foreground-secondary)]
              leading-7
              sm:leading-relaxed
              max-w-2xl
              px-1
            "
          >
            نماذج حقيقية لسيارات مصدومة وتالفة قمنا بتقييمها وشرائها في جدة،
            مهما كان نوع الضرر، مع سحب مجاني وإنهاء إجراءات الإسقاط ونقل الملكية.
          </p>
        </div>

        {/* 
          Desktop layout remains the same:
          LEFT 65% / RIGHT 35%

          Mobile:
          - Full-width cards
          - Better spacing
          - Better card heights
          - Better text readability
        */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-4
            lg:gap-5
          "
          dir="ltr"
        >

          {/* =========================================================
              LEFT COLUMN - 65%
          ========================================================= */}
          <div className="w-full lg:w-[65%] flex flex-col gap-4 lg:gap-5">

            {/* =========================
                LARGE FEATURED CARD
            ========================= */}
            <article
              className="
                relative
                w-full
                h-[360px]
                sm:h-[420px]
                md:h-[470px]
                lg:h-[500px]
                rounded-[10px]
                overflow-hidden
                group
              "
            >
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                sizes="(max-width: 1024px) 100vw, 65vw"
              />

              {/* Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#12131c]/95
                  via-[#12131c]/30
                  to-transparent
                "
              />

              {/* Brand */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span
                  className="
                    text-white/90
                    font-bold
                    text-[9px]
                    sm:text-[11px]
                    tracking-[0.15em]
                    uppercase
                    drop-shadow-md
                  "
                >
                 
                </span>
              </div>

              {/* Main Text */}
              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  left-5
                  sm:bottom-7
                  sm:right-7
                  sm:left-auto
                  md:bottom-8
                  md:right-8
                  max-w-[90%]
                  sm:max-w-[75%]
                "
                dir="rtl"
              >
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-bold
                    text-white
                    mb-2
                    sm:mb-3
                    leading-[1.4]
                    drop-shadow-md
                  "
                >
                  {gallery[0].title}
                </h3>

                <div
                  className="
                    flex
                    flex-col
                    gap-1
                    sm:gap-1.5
                    text-gray-200
                    text-xs
                    sm:text-sm
                    md:text-base
                    leading-6
                  "
                >
                  {gallery[0].tags?.map((tag) => (
                    <p
                      key={tag}
                      className="drop-shadow-sm"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            {/* =========================
                BOTTOM TWO CARDS
            ========================= */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                lg:gap-5
              "
            >

              {/* Side Damage */}
              <article
                className="
                  relative
                  w-full
                  sm:w-1/2
                  h-[190px]
                  sm:h-[220px]
                  rounded-[10px]
                  overflow-hidden
                  group
                "
              >
                <Image
                  src={gallery[1].src}
                  alt={gallery[1].alt}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/40
                    group-hover:bg-black/50
                    transition-colors
                    duration-300
                  "
                />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span
                    className="
                      text-white/80
                      font-bold
                      text-[9px]
                      sm:text-[10px]
                      tracking-[0.15em]
                      uppercase
                    "
                  >
                   
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
                  <h3
                    className="
                      text-white
                      font-semibold
                      text-base
                      sm:text-lg
                      leading-7
                      drop-shadow-lg
                      text-center
                    "
                    dir="rtl"
                  >
                    {gallery[1].title}
                  </h3>
                </div>
              </article>

              {/* Front Damage */}
              <article
                className="
                  relative
                  w-full
                  sm:w-1/2
                  h-[190px]
                  sm:h-[220px]
                  rounded-[10px]
                  overflow-hidden
                  group
                "
              >
                <Image
                  src={gallery[2].src}
                  alt={gallery[2].alt}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/40
                    group-hover:bg-black/50
                    transition-colors
                    duration-300
                  "
                />

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span
                    className="
                      text-white/80
                      font-bold
                      text-[9px]
                      sm:text-[10px]
                      tracking-[0.15em]
                      uppercase
                    "
                  >
                   
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
                  <h3
                    className="
                      text-white
                      font-semibold
                      text-base
                      sm:text-lg
                      leading-7
                      drop-shadow-lg
                      text-center
                    "
                    dir="rtl"
                  >
                    {gallery[2].title}
                  </h3>
                </div>
              </article>

            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN - 35%
          ========================================================= */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4 lg:gap-5">

            {/* =========================
                REAR DAMAGE
            ========================= */}
            <article
              className="
                relative
                w-full
                h-[240px]
                sm:h-[260px]
                lg:h-auto
                lg:flex-1
                lg:min-h-0
                rounded-[10px]
                overflow-hidden
                group
              "
            >
              <Image
                src={gallery[3].src}
                alt={gallery[3].alt}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                sizes="(max-width: 1024px) 100vw, 35vw"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/40
                  group-hover:bg-black/50
                  transition-colors
                  duration-300
                "
              />

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <span
                  className="
                    text-white/80
                    font-bold
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.15em]
                    uppercase
                  "
                >
                 
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-5">
                <h3
                  className="
                    text-white
                    font-semibold
                    text-base
                    sm:text-lg
                    leading-7
                    drop-shadow-lg
                    text-center
                  "
                  dir="rtl"
                >
                  {gallery[3].title}
                </h3>
              </div>
            </article>

            {/* =========================
                HEAVY DAMAGE
            ========================= */}
            <article
              className="
                relative
                w-full
                h-[240px]
                sm:h-[260px]
                lg:h-auto
                lg:flex-1
                lg:min-h-0
                rounded-[10px]
                overflow-hidden
                group
              "
            >
              <Image
                src={gallery[4].src}
                alt={gallery[4].alt}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                sizes="(max-width: 1024px) 100vw, 35vw"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/40
                  group-hover:bg-black/50
                  transition-colors
                  duration-300
                "
              />

              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span
                  className="
                    text-white/80
                    font-bold
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.15em]
                    uppercase
                  "
                >
                 
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-5">
                <h3
                  className="
                    text-white
                    font-semibold
                    text-base
                    sm:text-lg
                    leading-7
                    drop-shadow-lg
                    text-center
                  "
                  dir="rtl"
                >
                  {gallery[4].title}
                </h3>
              </div>
            </article>

            {/* =========================
                CONTACT CTA
            ========================= */}
            <a
              href="/contact"
              aria-label="تواصل معنا لتقييم وشراء سيارتك المصدومة في جدة"
              className="
                w-full
                min-h-[60px]
                sm:min-h-[65px]
                px-5
                py-3
                bg-[#5B58FF]
                hover:bg-[#4946e6]
                active:bg-[#403dd4]
                transition-colors
                duration-300
                rounded-[10px]
                flex
                items-center
                justify-center
                text-center
                shadow-[0_4px_30px_rgba(91,88,255,0.4)]
                hover:shadow-[0_4px_35px_rgba(91,88,255,0.6)]
                touch-manipulation
              "
              dir="rtl"
            >
              <span
                className="
                  text-white
                  font-semibold
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-6
                "
              >
                تواصل معنا لتقييم وشراء سيارتك
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}