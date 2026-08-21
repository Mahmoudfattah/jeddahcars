"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "من نحن", href: "#about" },
  { label: "كيف تعمل الخدمة", href: "#how-it-works" },
  { label: "سيارات مصدومة", href: "#cars" },
];

const NAV_OFFSET = 90;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  /* =========================================================
     SCROLL TO SECTION
  ========================================================= */
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

  /* =========================================================
     ACTIVE SECTION OBSERVER
  ========================================================= */
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
          if (window.location.hash) {
            const cleanUrl = `${window.location.pathname}` + `${window.location.search}`;
            window.history.replaceState(null, "", cleanUrl);
          }
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-15% 0px -45% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     TOP OF PAGE
  ========================================================= */
  useEffect(() => {
    const handleTopOfPage = () => {
      if (window.scrollY < 120) {
        setActiveHash("");
        if (window.location.hash) {
          const cleanUrl = `${window.location.pathname}` + `${window.location.search}`;
          window.history.replaceState(null, "", cleanUrl);
        }
      }
    };

    handleTopOfPage();
    window.addEventListener("scroll", handleTopOfPage, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleTopOfPage);
    };
  }, []);

  /* =========================================================
     MOBILE MENU
  ========================================================= */
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  /* =========================================================
     ESCAPE KEY
  ========================================================= */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL (Prevent Layout Shift/Jump)
  ========================================================= */
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      return;
    }

    // 1. Calculate the exact width of the scrollbar
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // 2. Lock the scroll
    document.body.style.overflow = "hidden";

    // 3. Add right padding to compensate for the missing scrollbar
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Cleanup function when the menu closes
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  /* =========================================================
     GO HOME
  ========================================================= */
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setActiveHash("");
    window.history.replaceState(null, "", "/");
    closeMenu();
  };

  /* =========================================================
     CONTACT
  ========================================================= */
  const goContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "#contact");
    closeMenu();
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header
        className="
          fixed
          top-2.5
          md:top-4
          left-0
          z-50
          w-full
          px-3
          md:px-0
          pointer-events-none
        "
      >
        <div className="container-custom pointer-events-auto">
          {/* =================================================
              DESKTOP
          ================================================= */}
          <div
            className="
              hidden
              md:flex
              w-full
              items-center
              justify-between
              min-h-[58px]
            "
          >
            {/* LOGO */}
            <div className="flex-1 flex justify-start">
              <Link
                href="/"
                onClick={goHome}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  px-3
                  py-2
                  transition-all
                  duration-300
                  hover:bg-white/30
                  hover:backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/60
                    bg-white/40
                    backdrop-blur-xl
                    shadow-sm
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Image
                    src="/logocut.png"
                    alt="شراء السيارات المصدومة"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                  />
                </div>

                <span
                  className="
                    whitespace-nowrap
                    text-base
                    font-bold
                    text-navy
                  "
                >
                  شراء السيارات المصدومة
                </span>
              </Link>
            </div>

            {/* =================================================
                DESKTOP APPLE GLASS NAV
            ================================================= */}
            <nav
              className="
                relative
                flex
                shrink-0
                items-center
                gap-1
                rounded-full
                border
                border-white/70
                bg-white/25
                p-1.5
                backdrop-blur-2xl
                backdrop-saturate-150
                shadow-[0_8px_30px_rgba(15,23,42,0.08)]
              "
            >
              {/* glass reflection */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-b
                  from-white/50
                  via-white/15
                  to-transparent
                "
              />

              {NAV_LINKS.map((link) => {
                const isActive = activeHash === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`
                      relative
                      z-10
                      rounded-full
                      px-5
                      py-2.5
                      text-[15px]
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? `
                            bg-white
                            text-brand
                            font-bold
                            shadow-[0_2px_12px_rgba(15,23,42,0.08)]
                          `
                          : `
                            text-slate-700
                            hover:bg-white/45
                            hover:text-brand
                          `
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="flex-1 flex justify-end">
              <Link
                href="#contact"
                onClick={goContact}
                className="
                  btn-primary
                  rounded-full
                  px-8
                  py-3
                  whitespace-nowrap
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* =================================================
              MOBILE NAVBAR (Fully Rounded Pill)
          ================================================= */}
          <div
            className="
              relative
              z-50
              flex
              md:hidden
              h-[56px]
              w-full
              items-center
              rounded-full
              border
              border-white/80
              bg-white/85
              px-2
              shadow-[0_8px_28px_rgba(15,23,42,0.12)]
              backdrop-blur-xl
              backdrop-saturate-150
            "
          >
            {/* subtle glass highlight adapted for full radius */}
            <span
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-1/2
                rounded-t-full
                bg-gradient-to-b
                from-white/80
                to-transparent
              "
            />

            {/* LEFT — MENU */}
            <div className="relative z-10 flex w-1/3 items-center justify-start">
              <button
                type="button"
                onClick={toggleMenu}
                aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={isOpen}
                className={`
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  -mr-1
                  transition-all
                  duration-300
                  ease-in-out
                  active:scale-90
                  ${
                    isOpen
                      ? "border-[#1e83ae] bg-[#1e83ae] text-white shadow-[0_4px_14px_rgba(30,131,174,0.25)]"
                      : "border-slate-200 bg-white text-[#1e83ae] shadow-sm"
                  }
                `}
              >
                {isOpen ? (
                  <X size={19} strokeWidth={2.5} />
                ) : (
                  <Menu size={19} strokeWidth={2.5} />
                )}
              </button>
            </div>

            {/* CENTER — LOGO */}
            <div className="relative z-10 flex w-1/3 items-center justify-center">
              <Link
                href="/"
                onClick={goHome}
                aria-label="الرئيسية"
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_3px_12px_rgba(15,23,42,0.08)]
                  transition-transform
                  duration-300
                  ease-in-out
                  active:scale-90
                "
              >
                <Image
                  src="/logocut.webp"
                  alt="شراء السيارات المصدومة"
                  width={31}
                  height={31}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            {/* RIGHT — CONTACT */}
            <div className="relative z-10 flex w-1/3 items-center justify-end">
              <Link
                href="#contact"
                onClick={goContact}
                className="
                  btn-primary
                  flex
                  h-[40px]
                  min-w-[72px]
                  items-center
                  justify-center
                  rounded-full
                  px-4
                  -ml-1
                  text-[12px]
                  font-bold
                  whitespace-nowrap
                  shadow-[0_4px_14px_rgba(30,131,174,0.18)]
                  transition-all
                  duration-300
                  ease-in-out
                  active:scale-95
                "
              >
                تواصل
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* =======================================================
          MOBILE MENU (Smooth Animated Dropdown)
      ======================================================= */}
      <div
        className={`
          fixed
          inset-0
          z-[40]
          md:hidden
          transition-all
          duration-300
          ease-in-out
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={closeMenu}
          className={`
            absolute
            inset-0
            h-full
            w-full
            cursor-default
            bg-slate-950/30
            backdrop-blur-[2px]
            transition-opacity
            duration-300
            ease-in-out
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Compact Mobile Menu */}
        <div
          className={`
            absolute
            left-4
            right-4
            top-[76px]
            overflow-hidden
            rounded-[24px]
            border
            border-slate-200/90
            bg-white
            shadow-[0_20px_55px_rgba(15,23,42,0.22)]
            origin-top
            transition-all
            duration-300
            ease-in-out
            ${
              isOpen
                ? "translate-y-0 scale-100 opacity-100 visible"
                : "-translate-y-4 scale-95 opacity-0 invisible"
            }
          `}
          dir="rtl"
        >
          {/* Menu header */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-100
              px-5
              py-3.5
            "
          >
            <span className="text-[13px] font-bold text-slate-500">
              القائمة الرئيسية
            </span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#1e83ae]
              "
            />
          </div>

          {/* NAV LINKS */}
          <nav className="p-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    closeMenu();
                  }}
                  className={`
                    relative
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    rounded-[16px]
                    px-4
                    text-right
                    text-[15px]
                    leading-6
                    transition-all
                    duration-200
                    ease-out
                    mb-1
                    ${
                      isActive
                        ? "bg-[#eaf6fb] !text-[#1e83ae] font-bold"
                        : "bg-transparent !text-slate-800 font-semibold hover:bg-slate-50 active:bg-slate-100"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute
                      right-3
                      h-1.5
                      w-1.5
                      rounded-full
                      transition-opacity
                      duration-300
                      ${
                        isActive
                          ? "bg-[#1e83ae] opacity-100"
                          : "bg-slate-300 opacity-0"
                      }
                    `}
                  />

                  <span className="w-full pr-4">
                    {link.label.trim()}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CONTACT CTA */}
          <div className="px-3 pb-3">
            <Link
              href="#contact"
              onClick={goContact}
              className="
                btn-primary
                flex
                h-[52px]
                w-full
                items-center
                justify-center
                rounded-[16px]
                text-[15px]
                font-bold
                shadow-[0_5px_16px_rgba(30,131,174,0.18)]
                transition-all
                duration-300
                ease-in-out
                active:scale-[0.98]
                hover:shadow-[0_8px_20px_rgba(30,131,174,0.25)]
              "
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}