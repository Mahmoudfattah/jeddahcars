import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
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
  metadataBase: new URL("https://example.com"), // TODO: replace with your real domain

  title: {
    default:
      "شراء سيارات مصدومة وتالفة وتشليح في جدة | تقييم فوري وسطحة مجانية",
    template: "%s | شراء السيارات المصدومة",
  },

  description:
    "نشتري جميع أنواع السيارات التشليح والتالفة والمتعطلة والسكراب والمصدومة في جدة، مع تقييم فوري، وسحب مجاني من أمام المنزل، وإتمام إجراءات إسقاط اللوحات. تواصل معنا: 0508374454",

  keywords: [
    "شراء سيارات مصدومة جدة",
    "بيع سيارات مصدومة جدة",
    "سيارات تشليح جدة",
    "شراء سيارات تالفة جدة",
    "سيارات متعطلة جدة",
    "سيارات سكراب جدة",
  ],

  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "شراء السيارات المصدومة",
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
  return (
    <html
      lang="ar"
      dir="rtl"
      className={ibmPlexArabic.variable}
    >
      <body
        suppressHydrationWarning
        className="bg-background text-[var(--foreground)] antialiased font-arabic"
      >
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}