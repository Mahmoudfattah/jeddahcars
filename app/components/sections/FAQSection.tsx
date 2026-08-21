"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: "no-registration",
    question: "هل تشترون السيارة بدون استمارة سارية؟",
    answer:
      "نعم، نشتري السيارة حتى لو كانت الاستمارة منتهية أو غير سارية. نتكفل بإنهاء إجراءات إسقاط اللوحة ونقل الملكية بالكامل ضمن الخطوات النظامية المطلوبة.",
  },
  {
    id: "evaluation-time",
    question: "كم يستغرق تقييم السيارة والحصول على سعر؟",
    answer:
      "بعد إرسال صور السيارة عبر واتساب مع تفاصيل الموديل والحالة، نعطيك تقييمًا وسعرًا واضحًا خلال دقائق. لا حاجة لموعد أو معاينة طويلة قبل معرفة السعر التقريبي.",
  },
  {
    id: "free-pickup",
    question: "هل السحب فعلًا مجاني من أي حي في جدة؟",
    answer:
      "نعم، نوفر سطحة مجانية لسحب السيارة من موقعك داخل جدة، سواء كنت في شمال المدينة أو جنوبها أو شرقها أو غربها، بعد الاتفاق على السعر مباشرة.",
  },
  {
    id: "car-condition",
    question: "هل تشترون السيارة مهما كانت درجة الضرر؟",
    answer:
      "نشتري السيارات المصدومة بجميع درجات الضرر، من ضرر بسيط قابل للإصلاح إلى تلف كامل غير قابل للتشغيل، بالإضافة إلى سيارات التشليح والسكراب.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24" dir="rtl">


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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left column (in RTL: right side) — heading + CTA, sticky on desktop */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
            <div className="inline-flex items-center gap-2 w-fit rounded-full bg-[#162032] border border-white/10 px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-sm font-bold text-[#38bdf8]">
                الأسئلة الشائعة
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.3] text-white tracking-tight">
              أسئلة يطرحها
              <br />
              عملاؤنا في جدة
            </h2>
            
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md">
              لم تجد إجابة سؤالك؟ فريقنا متواجد دائمًا للرد على كافة استفساراتك وتقييم سيارتك فوراً.
            </p>

            <a
              href="https://wa.me/9665XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group w-fit flex items-center gap-4 rounded-full bg-white 
                pl-1.5 pr-6 py-1.5 mt-2 shadow-[0_4px_20px_rgba(37,211,102,0.15)] 
                hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(37,211,102,0.25)] 
                transition-all duration-300 ease-out
              "
            >
              <span className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors">
                اسألنا على واتساب
              </span>
              <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <MessageCircle size={22} className="drop-shadow-sm" />
              </div>
            </a>
          </div>

          {/* Right column (in RTL: left side) — accordion */}
          <div className="lg:col-span-7 flex  flex-col gap-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div
                  key={faq.id}
                  className={`
                    group relative overflow-hidden cursor-pointer rounded-[24px]  border transition-all duration-500 ease-out
                    ${
                      isOpen
                        ? "border-[#38bdf8]/40 bg-[#162438] shadow-[0_8px_30px_rgba(56,189,248,0.06)]"
                        : "border-white/5 bg-[#111827] hover:bg-[#162032] hover:border-white/10"
                    }
                  `}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                    className="w-full flex items-center justify-between gap-4 text-right px-6 py-5 sm:px-8 sm:py-6 outline-none focus-visible:ring-2   focus-visible:ring-[#38bdf8]"
                  >
                    <span 
                      className={`
                        font-bold text-base sm:text-lg transition-colors duration-300 pr-1
                        ${isOpen ? "text-[#38bdf8]" : "text-white group-hover:text-slate-200"}
                      `}
                    >
                      {faq.question}
                    </span>
                    
                    <div 
                      className={`
                        flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-500
                        ${
                          isOpen 
                            ? "bg-[#38bdf8] text-white shadow-[0_4px_14px_rgba(56,189,248,0.3)] rotate-180" 
                            : "bg-white text-slate-800 group-hover:scale-105"
                        }
                      `}
                    >
                      <ChevronDown size={22} strokeWidth={2.5} />
                    </div>
                  </button>

                  <div
                    id={`faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden ">
                      <p className="px-6 pb-6 sm:px-8 sm:pb-7 pt-0 text-slate-300 text-[15px] sm:text-base leading-relaxed pr-6 border-r-2 border-transparent relative">
                        {/* Decorative line next to text when open */}
                        <span className={`absolute sm:right-6 right-2 top-1 bottom-8 w-0.5 rounded-full transition-colors duration-500 delay-100 ${isOpen ? "bg-[#38bdf8]/40" : "bg-transparent"}`}></span>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>

      {/* FAQPage schema */}
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