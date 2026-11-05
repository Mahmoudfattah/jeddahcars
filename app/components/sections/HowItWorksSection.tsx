import { MessageCircle, BadgeCheck, Truck, ArrowLeft } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "أرسل صور وموديل سيارتك",
    description:
      "صوّر سيارتك المصدومة أو التالفة وأرسلها عبر واتساب (0508374454) مع تحديد الموديل وموقعك في جدة أو مكة أو الطائف.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "استلم أعلى تسعير فوري خلال دقائق",
    description:
      "نراجع حالة السيارة ونقدم لك عرض سعر كاش فوري وعادل مباشرة، بدون تفاوض معقد أو انتظار طويل.",
  },
  {
    number: "03",
    icon: Truck,
    title: "سطحة مجانية وإسقاط فوري للوحات",
    description:
      "نرسل سطحة خاصة مجانية لموقعك في جدة ونسلمك المبلغ فوراً مع إنهاء إجراءات إسقاط المركبات ونقل الملكية.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative overflow-hidden bg-background py-8 sm:py-12"
      dir="rtl"
    >
      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold text-[var(--brand-light)]">
            خطوات بيع سيارتك في جدة — قيّمها كار
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.3] text-[var(--foreground)] sm:text-4xl">
            ثلاث خطوات بسيطة، من التواصل إلى استلام الكاش وإسقاط اللوحات
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-[16.5%] right-[16.5%] top-9 hidden h-px bg-[var(--border)] sm:block"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center gap-4 text-center"
              >
                {/* Icon circle with number badge */}
                <div className="relative z-10">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-pale)] text-[var(--brand-light)]">
                      <Icon size={20} />
                    </div>
                  </div>

                  <span className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand)] text-[11px] font-bold text-white">
                    {step.number.replace("0", "")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>

                <p className="max-w-[260px] text-sm leading-relaxed text-[var(--foreground-secondary)]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://wa.me/966508374454"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ابدأ الآن على واتساب لتقييم سيارتك في جدة"
            className="flex w-fit items-center gap-4 rounded-full bg-white py-1.5 pl-1.5 pr-6 font-semibold !text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
          >
            <span className="text-sm text-blue-950">
              ابدأ تقييم سيارتك الآن على واتساب
            </span>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <ArrowLeft size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
