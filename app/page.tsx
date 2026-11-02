import Footer from "./components/layout/Footer";
import AboutSection from "./components/sections/AboutSection";
import FAQSection from "./components/sections/FAQSection";
import HeroSection from "./components/sections/Hero";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import TrustIntroAndVideoSection from "./components/sections/TrustIntroAndVideoSection";
import WorkGallerySection from "./components/sections/WorkGallerySection";

const PHONE_DISPLAY = "0508374454";
const PHONE_TEL = "+966508374454";
const WHATSAPP_LINK = "https://wa.me/966508374454";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TrustIntroAndVideoSection />
      <WorkGallerySection />
      <FAQSection />
      <HowItWorksSection />

      <Footer />

      {/* Floating Contact Buttons */}

      {/* Call Button - Bottom Left */}
      <div className="fixed bottom-4 left-2 z-50">
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label={`Call us at ${PHONE_DISPLAY}`}
          title="Call Us"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0284C7] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0369A1] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.61 21.01 2.99 13.39 2.99 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
          </svg>
        </a>
      </div>

      {/* WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20BA59] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0012.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.04 24l6.28-1.65a11.9 11.9 0 005.72 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.45-8.41zM12.05 21.8h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 01-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9a9.84 9.84 0 017 2.9 9.84 9.84 0 012.9 7c-.01 5.45-4.45 9.88-9.91 9.88zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34z" />
          </svg>
        </a>
      </div>
    </>
  );
}
