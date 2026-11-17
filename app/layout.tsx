import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import StickyMobileBar from "./components/layout/StickyMobileBar";

/* Primary website font — optimized for Arabic readability */
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qeemahcar.com"),

  title: {
    default:
      "اسقاط مركبات فوري جدة ونشتري سيارتك المصدومة كاش خلال 15 دقيقة | 0508374454",
    template: "%s | قيّمها كار",
  },

  description:
    "تبي تسقط لوحات سيارتك أو تبيعها في جدة؟ نشتري السيارات المصدومة والتالفة والتشليح بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط مركبات نظامي عبر أبشر (الاستمارة منتهية أو سارية). اتصل الآن: 0508374454",

  keywords: [
    "اسقاط مركبات فوري بجده",
    "اسقاط مركبات فوري جدة",
    "اسقاط لوحات سيارات جدة",
    "بيع سيارة مصدومة جدة",
    "نشتري السيارات المصدومة جدة",
    "تشليح سيارات جدة",
    "ارقام تشليح جدة",
    "قيّمها كار",
  ],

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://qeemahcar.com",
    siteName: "قيّمها كار لشراء السيارات المصدومة والتشليح في جدة",
    title:
      "اسقاط مركبات فوري جدة ونشتري سيارتك المصدومة كاش خلال 15 دقيقة | 0508374454",
    description:
      "نشتري سيارتك المصدومة أو التالفة في جدة بأعلى سعر كاش مع سطحة مجانية وإسقاط مركبات ولوحات نظامي عبر أبشر (الاستمارة منتهية أو سارية). اتصل الآن: 0508374454",
    images: [
      {
        url: "https://qeemahcar.com/heroImage.webp",
        width: 900,
        height: 650,
        alt: "قيّمها كار لشراء السيارات المصدومة وإسقاط المركبات في جدة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "اسقاط مركبات فوري جدة ونشتري سيارتك المصدومة كاش | 0508374454",
    description:
      "نشتري سيارتك المصدومة والتشليح في جدة كاش فوري مع سطحة مجانية وإسقاط مركبات نظامي عبر أبشر — 0508374454",
    images: ["https://qeemahcar.com/heroImage.webp"],
  },

  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const jsonLd = {
   "@context": "https://schema.org",
   "@type": "AutoDealer",
   "@id": "https://qeemahcar.com/#autodealer",
   name: "قيّمها كار لشراء السيارات المصدومة وإسقاط المركبات في جدة",
   url: "https://qeemahcar.com",
   image: "https://qeemahcar.com/heroImage.webp",
   telephone: "+966508374454",
   description:
     "اسقاط مركبات فوري بجدة عبر أبشر وشراء السيارات المصدومة والتالفة والتشليح في جدة بأعلى سعر كاش فوري مع سطحة مجانية (سواء كانت الاستمارة سارية أو منتهية).",
   priceRange: "$$",
   areaServed: [{ "@type": "City", name: "جدة" }],
   address: {
     "@type": "PostalAddress",
     streetAddress:
       "تشليح الندى لعالم السيارات، رقم 207، الخمرة الصناعية الثالثة",
     addressLocality: "جدة",
     addressRegion: "منطقة مكة المكرمة",
     postalCode: "22525",
     addressCountry: "SA",
   },
   geo: {
     "@type": "GeoCoordinates",
     latitude: 21.3342,
     longitude: 39.2206,
   },
   openingHoursSpecification: {
     "@type": "OpeningHoursSpecification",
     dayOfWeek: [
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday",
       "Sunday",
     ],
     opens: "00:00",
     closes: "23:59",
   },
   sameAs: [
     "https://haraj.com.sa/users/%D8%AA%D8%B4%D9%84%D9%8A%D8%AD%20%D8%A7%D9%84%D9%86%D8%AF%D9%89%20%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/",
   ],
 };
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <body
        suppressHydrationWarning
        className="bg-background text-[var(--foreground)] antialiased font-arabic pb-14 md:pb-0"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 (GA4) + Automatic WhatsApp & Phone Call Click Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQGX3H4W5G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQGX3H4W5G');

            document.addEventListener('click', function(e) {
              var link = e.target.closest('a');
              if (!link || !link.href) return;
              if (link.href.includes('wa.me') || link.href.includes('whatsapp')) {
                gtag('event', 'whatsapp_click', {
                  event_category: 'Lead',
                  event_label: link.href
                });
              } else if (link.href.startsWith('tel:')) {
                gtag('event', 'phone_call_click', {
                  event_category: 'Lead',
                  event_label: link.href
                });
              }
            });
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "zelvqesqqg");
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <StickyMobileBar />
      </body>
    </html>
  );
}
