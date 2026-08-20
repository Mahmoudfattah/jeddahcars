// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero1() {
  const videoRef = useRef(null);

//   const isMobile = useMediaQuery({ maxWidth: 767 });

//   useGSAP(() => {
//     const heroSplit = SplitText.create(".h1", {
//       type: "chars,words",
//     });
//     const paragraphSplit = SplitText.create(".p", {
//       type: "lines",
//     });

//     heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

//     gsap.from(heroSplit.chars, {
//       yPercent: 100,
//       duration: 1,
//       ease: "expo.out",
//       stagger: 0.06,
//     });
//     gsap.from(paragraphSplit.lines, {
//       opacity: 0,
//       yPercent: 100,
//       duration: 1,
//       ease: "expo.out",
//       stagger: 0.06,
//       delay: 1,
//     });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: "#hero",
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
      
//         },
//       })
//       .to(
//         ".leaf-right",
//         {
//           x: 200,
//         },
//         0,
//       )
//       .to(
//         ".leaf-left",
//         {
//           x: -200,
//         },
//         0,
//       );
     

//       const startValue = isMobile ? 'top 50%' : 'center 60%'
//       const endValue = isMobile ? '120% top ' : 'bottom top'


//       let tl = gsap.timeline({
//         scrollTrigger:{
//             trigger:videoRef.current,
//             start: startValue,
//             end : endValue,
//             scrub:true,
        
//             pin: true

//         }
//       })

//       videoRef.current.onloadedmetadata = ()=>{
//         tl.to(videoRef.current,{
//             	currentTime: videoRef.current.duration,
//         })
//       }
    


//   });

  return (
    <>
      <section
        id="hero"
        className=" relative z-10 min-h-dvh w-full border border-transparent"
      >
        <h1 className="mt-40 text-center text-8xl leading-none font-modern-negra md:mt-32 md:text-[20vw] h1">
          MOJITO
        </h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="absolute  leaf-left  -bottom-20 left-0 w-1/3 md:top-20 md:bottom-auto md:w-fit xl:top-36 2xl:top-52"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="absolute leaf-right right-0 top-1/2 w-24 md:bottom-0 md:w-fit xl:top-0 2xl:top-12"
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
          "
          >
            {/* LEFT CONTENT */}
            <div className="hidden space-y-5 md:block p">
              <p>Cool. Crisp. Classic.</p>

              <p className="max-w-xl text-6xl font-modern-negra text-yellow">
                Sip the Spirit <br />
                of Summer
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full space-y-5 text-lg md:max-w-xs lg:max-w-2xs">
              <p className="text-left p">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>

              <a
                href="#cocktails"
                className="font-semibold opacity-80 hover:text-yellow 2xl:text-start"
              >
                View cocktails
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
