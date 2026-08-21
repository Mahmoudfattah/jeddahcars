import { MessageCircle, BadgeCheck, Truck, ArrowLeft } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "أرسل صور سيارتك",
    description:
      "صوّر سيارتك من زوايا مختلفة وأرسلها عبر واتساب مع الموديل والحالة.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "استلم السعر خلال دقائق",
    description:
      "نراجع الصور ونعطيك سعرًا واضحًا مباشرة، بدون تفاوض معقد أو انتظار طويل.",
  },
  {
    number: "03",
    icon: Truck,
    title: "السطحة تصلك وتنتهي الأوراق",
    description:
      "بعد الاتفاق، نرسل سطحة مجانية لموقعك وننهي إسقاط اللوحة ونقل الملكية.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative overflow-hidden bg-background py-4"
      dir="rtl"
    >
      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4 mb-14">
          <span className="text-sm font-semibold text-[var(--brand-light)]">
            كيف تبيع سيارتك
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] leading-[1.3]">
            ثلاث خطوات بسيطة، من التواصل إلى استلام المبلغ
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector line — desktop only, sits behind the cards */}
          <div className="hidden sm:block absolute top-9 right-[16.5%] left-[16.5%] h-px bg-[var(--border)]" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center gap-4"
              >
                {/* Icon circle with number badge */}
                <div className="relative z-10">
                  <div className="w-[72px] h-[72px] rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[var(--brand-pale)] flex items-center justify-center text-[var(--brand-light)]">
                      <Icon size={20} />
                    </div>
                  </div>
                  <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[var(--brand)] text-white text-[11px] font-bold flex items-center justify-center">
                    {step.number.replace("0", "")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="https://wa.me/9665XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-4 rounded-full bg-white text-black! font-semibold py-1.5 pl-1.5 pr-6 hover:-translate-y-1 hover:bg-gray-200 transition duration-300"
          >
            <span className="text-sm text-blue-950">ابدأ الآن على واتساب</span>
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
              <ArrowLeft size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}