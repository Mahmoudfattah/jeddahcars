"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "من نحن", href: "#about" },
  { label: "كيف تعمل الخدمة", href: "#how-it-works" },
  { label: "المدن التي نخدمها", href: "#cities" },
];

const NAV_OFFSET = 110;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  /* =====================================================
     HASH SCROLL + ACTIVE STATE
  ====================================================== */
  const scrollToSection = (hash: string) => {
    const id = hash.replace("#", "");
    if (!id) return;

    const section = document.getElementById(id);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveHash(hash);
    window.history.replaceState(null, "", hash);
  };

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => {
      if (!link.href.startsWith("#")) return null;
      return document.getElementById(link.href.slice(1));
    }).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const activeSection = visibleEntries[0].target as HTMLElement;
          const nextHash = `#${activeSection.id}`;
          setActiveHash(nextHash);
          if (window.location.hash !== nextHash) {
            window.history.replaceState(null, "", nextHash);
          }
        } else if (window.scrollY < 120) {
          setActiveHash("");
          const cleanUrl = `${window.location.pathname}${window.location.search}`;
          if (window.location.pathname + window.location.search !== cleanUrl) {
            window.history.replaceState(null, "", cleanUrl);
          }
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-15% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleTopOfPage = () => {
      if (window.scrollY < 120) {
        setActiveHash("");
        const cleanUrl = `${window.location.pathname}${window.location.search}`;
        if (window.location.hash) {
          window.history.replaceState(null, "", cleanUrl);
        }
      }
    };

    handleTopOfPage();
    window.addEventListener("scroll", handleTopOfPage, { passive: true });
    return () => window.removeEventListener("scroll", handleTopOfPage);
  }, []);

  /* =====================================================
     MOBILE MENU LOGIC
  ====================================================== */
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) closeMenu();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================================
     JSX
  ====================================================== */
  return (
    <>
      <header className="sticky top-4 md:top-6 z-50 px-4 md:px-0 pointer-events-none">
        <div className="container-custom pointer-events-auto">
          
          {/* ==========================================
              DESKTOP NAVBAR
              ========================================== */}
          <div className="hidden items-center justify-between md:flex">
            {/* الشعار */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveHash("");
                window.history.replaceState(null, "", "/");
              }}
            >
              <Image
                src="/logocut.webp"
                alt="شراء السيارات المصدومة"
                width={48}
                height={48}
                priority
                className="object-contain drop-shadow-sm"
              />
              <span className="font-bold text-navy text-base">
                شراء السيارات المصدومة
              </span>
            </Link>

            {/* روابط المنتصف (الكبسولة الزجاجية) */}
            <nav className="flex items-center justify-center rounded-full bg-slate-200/50 p-1.5 backdrop-blur-md border border-white/60">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (!link.href.startsWith("#")) return;
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`rounded-full px-5 py-2 text-base font-medium transition-all duration-300 ${
                    activeHash === link.href
                      ? "bg-white text-brand shadow-sm font-bold"
                      : "text-slate-600 hover:text-brand hover:bg-white/40"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* زر التواصل المستقل */}
            <div className="flex justify-end">
              <Link 
                href="#contact" 
                className="btn-primary rounded-full px-8 py-3 shadow-md"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* ==========================================
              MOBILE NAVBAR
              ========================================== */}
          <div className="flex items-center justify-between rounded-full bg-slate-200/50 p-2 backdrop-blur-md border border-white/60 md:hidden relative z-50">
            
            {/* اليمين: زر تواصل مصغر */}
            <div className="w-1/3 flex justify-start">
              <Link 
                href="#contact" 
                onClick={closeMenu}
                className="btn-primary rounded-full px-4 py-2 text-xs shadow-sm whitespace-nowrap"
              >
                تواصل
              </Link>
            </div>

            {/* المنتصف: الشعار */}
            <div className="w-1/3 flex justify-center">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveHash("");
                  window.history.replaceState(null, "", "/");
                  closeMenu();
                }}
              >
                <Image
                  src="/logocut.webp"
                  alt="الشعار"
                  width={36}
                  height={36}
                  priority
                  className="object-contain drop-shadow-sm"
                />
              </Link>
            </div>

            {/* اليسار: أيقونة القائمة */}
            <div className="w-1/3 flex justify-end">
              <button
                type="button"
                onClick={toggleMenu}
                aria-label="تبديل القائمة"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-navy shadow-sm border border-white/50"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ==========================================
          MOBILE DROPDOWN MENU (APPLE STYLE)
          ========================================== */}
      {isOpen && (
        <div className="fixed inset-0 z-[40] bg-surface/95 backdrop-blur-xl md:hidden flex flex-col pt-28 px-6 pb-10 overflow-y-auto">
          <nav className="flex flex-col w-full mt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                  closeMenu();
                }}
                className={`border-b border-border py-5 text-2xl font-bold transition-colors ${
                  activeHash === link.href
                    ? "text-brand"
                    : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}