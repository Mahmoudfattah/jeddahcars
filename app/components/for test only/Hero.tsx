'use client'

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const videoRef = useRef(null);
  const containerRef  = useRef(null)

//   const isMobile = useMediaQuery({ maxWidth: 767 });


 useGSAP(
    () => {
      // 1. Initial Page Load Animation (Hero Entrance Timeline)
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

      // Animate the main H1 (Smooth Fade + Slide Up)
      tl.fromTo(
        ".h1",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 }
      )
        // Animate the wheels/leaves coming in from the sides
        .fromTo(
          ".leaf-right",
          { x: 80, opacity: 0, rotation: 45 },
          { x: 0, opacity: 1, rotation: 0 },
          "-=1.2"
        )
        .fromTo(
          ".leaf-left",
          { x: -80, opacity: 0, rotation: -45 },
          { x: 0, opacity: 1, rotation: 0 },
          "-=1"
        )
        // Staggered reveal for all text content (Arabic friendly)
        .fromTo(
          ".content-reveal",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 },
          "-=0.8"
        );

        

      // 2. ScrollTrigger Parallax Effects
      // Slight upward movement for the title on scroll
    //   gsap.to(".h1", {
    //     y: -100,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: "#hero",
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   });

    //    const stl = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:containerRef.current,
    //         start: 'top center',
    //         end : 'center bottom',
    //         scrub: true,
            
    //     }
    //    })

      // Parallax & slight rotation for the wheels on scroll
    

      // 3. Video Reveal on Scroll
      // Scales up and fades in smoothly as the user scrolls down
      gsap.fromTo(
        ".videoAnimation",
        { opacity: 0, scale: 0.85, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".videoAnimation",
            start: "top 90%",
            end: "top 40%",
            scrub: 1, // Add slight delay to the scrub for a smoother feel
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <>
      <section
        id="hero"
        className=" relative z-10 min-h-dvh w-full border border-transparent"
        ref={containerRef}
      >
        {/* الكلمة المفتاحية الرئيسية في ترويسة H1 */}
        <h1 className="mt-40 text-center text-2xl  font-modern-negra pt-8 md:text-[4vw] h1">
          شراء سيارات 
           مصدومة وتالف <br />
           في جدة ومكة نقداً وبأفضل سعر  
        </h1>


        <Image
          height={100}
        width={100}
          src="/wheelright.webp"
          alt="right-leaf"
          className="absolute leaf-right right-0 top-1/2 w-24 md:bottom-0 md:w-fit xl:top-10 2xl:top-12"
        />

        <Image
        height={100}
        width={100}

          src="/wheelleft.webp"
          alt="left-leaf"
          className="absolute  leaf-left  -bottom-20 left-0 w-1/3 md:top-20 md:bottom-auto md:w-fit xl:top-46 2xl:top-52"
        />

         

        <div
          className="
          container
          absolute
          left-1/2
          top-auto
          mx-auto
          flex
          -translate-x-1/2
          items-end
          justify-between
          px-5
          md:top-[30vh]
          lg:bottom-20
        "
        dir="rtl"
        >
          <div
            className="
            mx-auto
            flex
            w-full
            flex-col
            items-center
            justify-between
            gap-10
            lg:flex-row
            lg:items-end
            content-reveal
          "
          >
            {/* LEFT CONTENT (الآن يمين بسبب dir="rtl") */}
            <div className="hidden space-y-5 md:block p">
              <p>تقييم فوري. دفع كاش. إسقاط لوحات.</p>

              <p className="max-w-xl text-6xl font-modern-negra text-yellow">
                شراء السيارات <br />
                المصدومة والمعطلة
              </p>
            </div>

            {/* RIGHT CONTENT (الآن يسار) */}
            <div className="w-full space-y-5 text-lg md:max-w-xs lg:max-w-2xs content-reveal">
              {/* تم استخدام كلمات مفتاحية مثل: جدة، أفضل الأسعار، إسقاط اللوحات، نقل الملكية */}
              <p className="text-right p">
                نشتري جميع أنواع السيارات المصدومة، المستعملة، والمعطلة في جدة بأفضل الأسعار. نسهل عليك البيع من أمام باب بيتك مع تكفلنا التام بإجراءات نقل الملكية والمرور لراحتك.
              </p>

              <a
                href="#contact"
                className="font-semibold opacity-80 hover:text-yellow 2xl:text-start block"
              >
                احصل على تسعيرة لسيارتك
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className=" videoAnimation z-50 w-full">
        <video
           ref={videoRef}
          className="
         absolute
            bottom-0
            left-0
            h-1/2
            w-full
            object-cover
            object-bottom
            md:h-[80%]
            md:object-contain"
          muted
          playsInline
          preload="auto"
          src="/videos/scroll-video.mp4"
        />
      </div>
    </>
  );
}