import Image from "next/image";

const gallery = [
  {
    id: "tow-truck",
    src: "/سطحة-نقل-سيارة-مصدومة-جدة.webp",
    alt: "شراء السيارات المصدومة في جدة مع سحب مجاني بالسطحة وإسقاط مركبات فوري بجدة",
    title: "شراء السيارات المصدومة وإسقاط اللوحات في جدة",
    tags: [
      "سحب مجاني للسيارة المصدومة بسطحة خاصة من موقعك بجدة",
      "إنهاء إجراءات إسقاط المركبات واللوحات الفوري ونقل الملكية",
      "تقييم فوري للسيارة ودفع المبلغ كاش في نفس اليوم",
    ],
    size: "lg",
  },
  {
    id: "side-damage",
    src: "/سيارة-مصدومة-من-الجانب-جدة.webp",
    alt: "شراء سيارة مصدومة من الجانب في جدة وتقييم أضرار الحوادث بأفضل سعر",
    title: "شراء السيارات المتضررة والغارقة في جدة",
    size: "sm",
  },
  {
    id: "front-damage-sunset",
    src: "/سيارة-مصدومة-من-الامام.webp",
    alt: "شراء سيارة مصدومة من الأمام في جدة مهما كان حجم الضرر أو حالة السيارة",
    title: "شراء السيارات المصدومة والسكراب بجدة",
    size: "sm",
  },
  {
    id: "rear-damage",
    src: "/سيارة-مصدومة-من-الخلف.webp",
    alt: "شراء سيارة مصدومة من الخلف في جدة مع تقييم فوري ونقل الملكية وإسقاط اللوحات",
    title: "شراء سيارات مصدومة من الخلف والأمام ومحروقة",
    size: "sm",
  },
  {
    id: "heavy-front-damage",
    src: "/سيارة-تالفة-ضرر-كبير-امامي.webp",
    alt: "شراء السيارات التالفة والمصدومة بالكامل تشليح في جدة بأفضل سعر كاش",
    title: "شراء سيارات التشليح والتالفة في جدة",
    size: "sm",
  },
];

export default function WorkGallerySection() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "شراء سيارات مصدومة وتشليح وإسقاط مركبات فوري بجدة",
    provider: {
      "@type": "AutoDealer",
      name: "قيّمها كار لشراء السيارات المصدومة والتشليح في جدة",
      url: "https://qeemahcar.com",
      telephone: "+966508374454",
    },
    areaServed: [
      { "@type": "City", name: "جدة" },
      { "@type": "City", name: "مكة المكرمة" },
      { "@type": "City", name: "الطائف" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات شراء السيارات المصدومة والتشليح في جدة",
      itemListElement: gallery.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title.trim(),
          description: item.alt,
        },
      })),
    },
  };

  return (
    <section
      className="bg-background py-8 font-sans"
      aria-labelledby="gallery-title"
      id="cars"
      dir="rtl"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-5 md:px-6">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 text-center sm:mb-10 sm:gap-4 md:mb-12">
          <span className="text-xs font-semibold text-[var(--brand-light)] sm:text-sm">
            قيّمها كار — شراء السيارات المصدومة والتشليح في جدة
          </span>

          <h2
            id="gallery-title"
            className="px-2 text-2xl font-extrabold leading-[1.35] text-[var(--foreground)] sm:text-3xl md:text-4xl"
          >
            سيارات مصدومة وتالفة وتشليح اشتريناها في جدة
          </h2>

          <p className="max-w-2xl px-1 text-sm leading-7 text-[var(--foreground-secondary)] sm:text-base sm:leading-relaxed md:text-lg">
            نماذج حقيقية لسيارات مصدومة (من الأمام أو الخلف أو الجانب) وسيارات
            تالفة وتشليح قمنا بتقييمها وشرائها في أحياء جدة، مع سحب مجاني
            بالسطحة وإنهاء إجراءات إسقاط المركبات الفوري ونقل الملكية.
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

                <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/55" />

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

                <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/55" />

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

              <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/55" />

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

              <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/55" />

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
              className="
                flex
                min-h-[60px]
                w-full
                touch-manipulation
                items-center
                justify-center
                rounded-[10px]
                bg-[var(--cta)]
                px-5
                py-3
                text-center
                shadow-[var(--shadow-brand)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--cta-hover)]
                hover:shadow-[0_8px_30px_rgba(15,133,250,0.45)]
                active:translate-y-0
                active:bg-[var(--cta-active)]
                sm:min-h-[65px]
              "
              dir="rtl"
            >
              <span className="text-sm font-semibold leading-6 text-[var(--cta-text)] sm:text-base md:text-lg">
                تواصل معنا لتقييم وشراء سيارتك في جدة
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
