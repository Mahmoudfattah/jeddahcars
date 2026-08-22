"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: "accident-cars",
    question: "هل تشترون السيارات المصدومة من الحوادث؟",
    answer:
      "نعم، نشتري السيارات المصدومة والمتضررة من الحوادث بمختلف الحالات، سواء كانت الأضرار في الهيكل أو المحرك أو الأجزاء الخارجية. أرسل صور السيارة وبياناتها عبر واتساب للحصول على تقييم مبدئي.",
  },
  {
    id: "car-condition",
    question: "هل تشترون السيارة مهما كانت درجة الضرر؟",
    answer:
      "نشتري السيارات المصدومة والمتضررة بمختلف درجات الضرر، من الأضرار البسيطة والقابلة للإصلاح إلى السيارات المتضررة بشدة أو غير القابلة للتشغيل، بالإضافة إلى سيارات التشليح والسكراب. يتم تحديد السعر بناءً على حالة السيارة ومواصفاتها.",
  },
  {
    id: "evaluation-time",
    question: "كم يستغرق تقييم السيارة والحصول على سعر؟",
    answer:
      "بعد إرسال صور السيارة عبر واتساب مع تفاصيل الموديل وسنة الصنع وحالتها، يتم تقييم السيارة وتقديم سعر مبدئي خلال دقائق في أغلب الحالات. لا تحتاج إلى حجز موعد أو الانتظار لفترة طويلة لمعرفة السعر التقريبي.",
  },
  {
    id: "free-pickup",
    question: "هل توفرون سطحة لسحب السيارة من موقعي؟",
    answer:
      "نعم، نوفر خدمة سحب ونقل السيارات التي يتم الاتفاق على شرائها بواسطة سطحة. يتم تنسيق موقع وموعد الاستلام معك بعد الاتفاق على السعر واستكمال الإجراءات المطلوبة.",
  },
  {
    id: "no-registration",
    question: "هل تشترون السيارة بدون استمارة سارية؟",
    answer:
      "نعم، نشتري السيارات حتى لو كانت الاستمارة منتهية أو غير سارية. نساعدك في استكمال الإجراءات النظامية المطلوبة لإسقاط اللوحات ونقل الملكية، حسب حالة السيارة والأوراق المتوفرة.",
  },
  {
    id: "payment",
    question: "متى يتم دفع قيمة السيارة؟",
    answer:
      "بعد الاتفاق على السعر واستكمال إجراءات البيع ونقل الملكية أو الإجراءات النظامية المناسبة لحالة السيارة، يتم استكمال عملية الدفع وفق الاتفاق بين الطرفين.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      dir="rtl"
      aria-labelledby="faq-heading"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-1/4
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
          bottom-20
          h-80
          w-80
          rounded-full
          bg-[var(--brand-light)]/5
          blur-3xl
        "
      />

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Content + CTA */}
          <div
            className="
              flex
              flex-col
              gap-6
              lg:sticky
              lg:top-32
              lg:col-span-5
              lg:self-start
            "
          >
            {/* Section badge */}
            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-4
                py-1.5
                shadow-sm
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[var(--brand-light)]
                  animate-pulse
                "
              />

              <span
                className="
                  text-sm
                  font-bold
                  text-[var(--brand-light)]
                "
              >
                الأسئلة الشائعة
              </span>
            </div>

            {/* SEO-focused heading */}
            <h2
              id="faq-heading"
              className="
                text-3xl
                font-extrabold
                leading-[1.3]
                tracking-tight
                text-[var(--foreground)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              أسئلة شائعة عن شراء
              <br />
              السيارات المصدومة
            </h2>

            {/* Supporting content */}
            <p
              className="
                max-w-md
                text-base
                leading-relaxed
                text-[var(--foreground-muted)]
                sm:text-lg
              "
            >
              تعرف على إجابات أهم الأسئلة حول شراء السيارات المصدومة
              والمتضررة، تقييم السيارة، إجراءات البيع، وسحب ونقل السيارة.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966508374454"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا عبر واتساب لتقييم سيارتك"
              className="
                group
                mt-2
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-white
                py-1.5
                pl-1.5
                pr-6
                shadow-[0_4px_20px_rgba(37,211,102,0.15)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(37,211,102,0.25)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#25D366]
                focus-visible:ring-offset-2
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  text-slate-900
                  transition-colors
                  group-hover:text-black
                "
              >
                اسألنا على واتساب
              </span>

              <span
                aria-hidden="true"
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#25D366]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <MessageCircle
                  size={22}
                  strokeWidth={2.2}
                />
              </span>
            </a>
          </div>

          {/* FAQ Accordion */}
          <div
            className="
              flex
              flex-col
              gap-4
              lg:col-span-7
            "
          >
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    transition-all
                    duration-500
                    ease-out
                    ${
                      isOpen
                        ? `
                          border-[var(--brand)]/40
                          bg-[var(--surface-soft)]
                          shadow-[0_8px_30px_rgba(4,102,200,0.06)]
                        `
                        : `
                          border-[var(--border)]
                          bg-[var(--surface)]
                          hover:border-[var(--border-dark)]
                          hover:bg-[var(--surface-soft)]
                        `
                    }
                  `}
                >
                  {/* Question button */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenId(isOpen ? null : faq.id)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-6
                      py-5
                      text-right
                      outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--brand-light)]
                      focus-visible:ring-inset
                      sm:px-8
                      sm:py-6
                    "
                  >
                    <span
                      className={`
                        pr-1
                        text-base
                        font-bold
                        leading-relaxed
                        transition-colors
                        duration-300
                        sm:text-lg
                        ${
                          isOpen
                            ? "text-[var(--brand-light)]"
                            : "text-[var(--foreground)] group-hover:text-[var(--foreground-secondary)]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <span
                      aria-hidden="true"
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          isOpen
                            ? `
                              rotate-180
                              bg-[var(--brand)]
                              text-white
                              shadow-[0_4px_14px_rgba(4,102,200,0.3)]
                            `
                            : `
                              bg-white
                              text-slate-800
                              shadow-sm
                              group-hover:scale-105
                            `
                        }
                      `}
                    >
                      <ChevronDown
                        size={22}
                        strokeWidth={2.5}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          relative
                          px-6
                          pb-6
                          sm:px-8
                          sm:pb-7
                        "
                      >
                        {/* Accent line */}
                        <span
                          aria-hidden="true"
                          className={`
                            absolute
                            right-2
                            top-1
                            bottom-8
                            w-0.5
                            rounded-full
                            transition-all
                            duration-500
                            sm:right-6
                            ${
                              isOpen
                                ? "bg-[var(--brand)]/40"
                                : "bg-transparent"
                            }
                          `}
                        />

                        <p
                          className="
                            pr-5
                            text-[15px]
                            leading-[1.9]
                            text-[var(--foreground-secondary)]
                            sm:pr-7
                            sm:text-base
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}