import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

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
      "شراء سيارات مصدومة وتشليح وسكراب في جدة | إسقاط لوحات فوري — قيمها كار",
    template: "%s | قيمها كار لشراء السيارات المصدومة والتشليح بجدة",
  },

  description:
    "نشتري جميع أنواع السيارات المصدومة والتشليح والتالفة والمتعطلة والسكراب في جدة بأعلى سعر كاش فوري، مع تقييم مجاني، سطحة مجانية من أمام المنزل، وإتمام إجراءات إسقاط اللوحات الفوري بجدة. اتصل الآن: 0508374454",

  keywords: [
    "شراء سيارات مصدومة جدة",
    "تشليح سيارات جدة",
    "اسقاط مركبات فوري بجده",
    "اسقاط لوحات سيارات جدة",
    "شراء سيارات تالفة جدة",
    "شراء سيارات سكراب ومتعطلة جدة",
    "بيع سيارة مصدومة جدة",
    "قيمها كار",
  ],

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://qeemahcar.com",
    siteName: "قيمها كار لشراء السيارات المصدومة والتشليح في جدة",
    title:
      "شراء سيارات مصدومة وتشليح وسكراب في جدة | إسقاط لوحات فوري — قيمها كار",
    description:
      "تقييم فوري وشراء جميع السيارات المصدومة والتالفة والتشليح في جدة نقداً مع سطحة مجانية وإسقاط لوحات فوري. تواصل معنا: 0508374454",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "شراء سيارات مصدومة وتشليح وسكراب في جدة | إسقاط لوحات فوري — قيمها كار",
    description:
      "شراء سيارات مصدومة وتشليح وتالفة في جدة بأعلى سعر كاش فوري مع سطحة مجانية وإسقاط لوحات — 0508374454",
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
    name: "قيمها كار لشراء السيارات المصدومة والتشليح في جدة",
    url: "https://qeemahcar.com",
    telephone: "+966508374454",
    description:
      "شراء جميع أنواع السيارات المصدومة والتشليح والتالفة والمتعطلة والسكراب في جدة مع تقييم فوري، سحب مجاني بسطحة خاصة، وإتمام إجراءات إسقاط اللوحات الفوري.",
    priceRange: "$$",
    areaServed: [{ "@type": "City", name: "جدة" }],
    address: {
      "@type": "PostalAddress",
      streetAddress: "جدة",
      addressLocality: "جدة",
      addressRegion: "منطقة مكة المكرمة",
      postalCode: "21442",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.5433,
      longitude: 39.1728,
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
  };

  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <body
        suppressHydrationWarning
        className="bg-background text-[var(--foreground)] antialiased font-arabic"
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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
