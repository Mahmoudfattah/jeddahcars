import Image from "next/image";

const gallery = [
  {
    id: "tow-truck",
    src: "/سطحة-نقل-سيارة-مصدومة-جدة.webp",
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
    src: "/سيارة-مصدومة-من-الجانب-جدة.webp",
    alt: "شراء سيارة مصدومة من الجانب في جدة وتقييم أضرار الحوادث بأفضل سعر",
    title: "شراء السيارات المتضررة من الحوادث",
    size: "sm",
  },
  {
    id: "front-damage-sunset",
    src: "/سيارة-مصدومة-من-الامام.webp",
    alt: "شراء سيارة مصدومة من الأمام في جدة مهما كان حجم الضرر أو حالة السيارة",
    title: "شراء السيارات المصدومة من الأمام",
    size: "sm",
  },
  {
    id: "rear-damage",
    src: "/سيارة-مصدومة-من-الخلف.webp",
    alt: "شراء السيارات المصدومة من الخلف في جدة مع تقييم السيارة ونقل الملكية",
    title: "شراء السيارات المصدومة من الخلف",
    size: "sm",
  },
  {
    id: "heavy-front-damage",
    src: "/سيارة-تالفة-ضرر-كبير-امامي.webp",
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
      dir="rtl"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-5 md:px-6">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 text-center sm:mb-10 sm:gap-4 md:mb-12">
          <span className="text-xs font-semibold text-[var(--brand-light)] sm:text-sm">
            شراء السيارات المصدومة في جدة
          </span>

          <h2
            id="gallery-title"
            className="px-2 text-2xl font-extrabold leading-[1.35] text-[var(--foreground)] sm:text-3xl md:text-4xl"
          >
            سيارات مصدومة وتالفة اشتريناها في جدة
          </h2>

          <p className="max-w-2xl px-1 text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base sm:leading-relaxed md:text-lg">
            نماذج حقيقية لسيارات مصدومة وتالفة قمنا بتقييمها وشرائها في جدة،
            مهما كان نوع الضرر، مع سحب مجاني وإنهاء إجراءات الإسقاط ونقل
            الملكية.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-5" dir="ltr">
          {/* LEFT COLUMN - 65% */}
          <div className="flex w-full flex-col gap-4 lg:w-[65%] lg:gap-5">
            {/* LARGE FEATURED CARD */}
            <article className="group relative h-[360px] w-full overflow-hidden rounded-[10px] sm:h-[420px] md:h-[470px] lg:h-[500px]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#12131c]/95 via-[#12131c]/30 to-transparent" />

              <div
                className="absolute bottom-5 right-5 left-5 max-w-[90%] sm:bottom-7 sm:right-7 sm:left-auto sm:max-w-[75%] md:bottom-8 md:right-8"
                dir="rtl"
              >
                <h3 className="mb-2 text-xl font-bold leading-[1.4] text-white drop-shadow-md sm:mb-3 sm:text-2xl md:text-3xl">
                  {gallery[0].title}
                </h3>

                <div className="flex flex-col gap-1 text-xs leading-6 text-gray-200 sm:gap-1.5 sm:text-sm md:text-base">
                  {gallery[0].tags?.map((tag) => (
                    <p key={tag} className="drop-shadow-sm">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            {/* BOTTOM TWO CARDS */}
            <div className="flex flex-col gap-4 sm:flex-row lg:gap-5">
              <article className="group relative h-[190px] w-full overflow-hidden rounded-[10px] sm:h-[220px] sm:w-1/2">
                <Image
                  src={gallery[1].src}
                  alt={gallery[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
                  <h3
                    className="text-center text-base font-semibold leading-7 text-white drop-shadow-lg sm:text-lg"
                    dir="rtl"
                  >
                    {gallery[1].title}
                  </h3>
                </div>
              </article>

              <article className="group relative h-[190px] w-full overflow-hidden rounded-[10px] sm:h-[220px] sm:w-1/2">
                <Image
                  src={gallery[2].src}
                  alt={gallery[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
                  <h3
                    className="text-center text-base font-semibold leading-7 text-white drop-shadow-lg sm:text-lg"
                    dir="rtl"
                  >
                    {gallery[2].title}
                  </h3>
                </div>
              </article>
            </div>
          </div>

          {/* RIGHT COLUMN - 35% */}
          <div className="flex w-full flex-col gap-4 lg:w-[35%] lg:gap-5">
            <article className="group relative h-[240px] w-full overflow-hidden rounded-[10px] sm:h-[260px] lg:h-auto lg:min-h-0 lg:flex-1">
              <Image
                src={gallery[3].src}
                alt={gallery[3].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />

              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

              <div className="absolute inset-0 flex items-center justify-center p-5">
                <h3
                  className="text-center text-base font-semibold leading-7 text-white drop-shadow-lg sm:text-lg"
                  dir="rtl"
                >
                  {gallery[3].title}
                </h3>
              </div>
            </article>

            <article className="group relative h-[240px] w-full overflow-hidden rounded-[10px] sm:h-[260px] lg:h-auto lg:min-h-0 lg:flex-1">
              <Image
                src={gallery[4].src}
                alt={gallery[4].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />

              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

              <div className="absolute inset-0 flex items-center justify-center p-5">
                <h3
                  className="text-center text-base font-semibold leading-7 text-white drop-shadow-lg sm:text-lg"
                  dir="rtl"
                >
                  {gallery[4].title}
                </h3>
              </div>
            </article>

            {/* CONTACT CTA */}
            <a
              href="https://wa.me/966508374454"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا على واتساب لتقييم وشراء سيارتك المصدومة في جدة"
              className="flex min-h-[60px] w-full touch-manipulation items-center justify-center rounded-[10px] bg-[#5B58FF] px-5 py-3 text-center shadow-[0_4px_30px_rgba(91,88,255,0.4)] transition-colors duration-300 hover:bg-[#4946e6] hover:shadow-[0_4px_35px_rgba(91,88,255,0.6)] active:bg-[#403dd4] sm:min-h-[65px]"
              dir="rtl"
            >
              <span className="text-sm font-semibold leading-6 text-white sm:text-base md:text-lg">
                تواصل معنا لتقييم وشراء سيارتك
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}