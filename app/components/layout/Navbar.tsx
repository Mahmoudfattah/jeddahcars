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

    const top =
      section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

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
            const cleanUrl =
              `${window.location.pathname}` + `${window.location.search}`;

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
          const cleanUrl =
            `${window.location.pathname}` + `${window.location.search}`;

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
     LOCK BODY SCROLL
  ========================================================= */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
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

    const top =
      section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

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
              MOBILE NAVBAR
          ================================================= */}
          <div
            className="
              relative
              z-50

              flex
              md:hidden

              h-[52px]
              w-full

              items-center
              justify-between

              rounded-full

              border
              border-white/70

              bg-white/30

              px-1.5

              backdrop-blur-2xl
              backdrop-saturate-150

              shadow-[0_6px_25px_rgba(15,23,42,0.10)]
            "
          >
            {/* subtle glass highlight */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-gradient-to-b
                from-white/45
                via-white/10
                to-transparent
              "
            />

            {/* =================================================
                LEFT — CTA
            ================================================= */}
            <div
              className="
                relative
                z-10
                flex
                w-1/3
                justify-start
              "
            >
              <Link
                href="#contact"
                onClick={goContact}
                className="
                  btn-primary

                  flex
                  h-[40px]
                  items-center
                  justify-center

                  rounded-full

                  px-4
                   

                  text-[12px]
                  font-bold

                  shadow-[0_3px_12px_rgba(30,131,174,0.18)]
                   -mr-1
                  transition-transform
                  duration-200

                  active:scale-95
                "
              >
                تواصل
              </Link>
            </div>

            {/* =================================================
                CENTER — LOGO
            ================================================= */}
            <div
              className="
                relative
                z-10
                flex
                w-1/3
                justify-center
              "
            >
              <Link
                href="/"
                onClick={goHome}
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/70

                  bg-white/55

                  backdrop-blur-xl

                  shadow-sm

                  transition-transform
                  duration-200

                  active:scale-90
                "
              >
                <Image
                  src="/logocut.webp"
                  alt="الشعار"
                  width={31}
                  height={31}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            {/* =================================================
                RIGHT — MENU
            ================================================= */}
            <div
              className="
                relative
                z-10
                flex
                
                w-1/3
                justify-end
              "
            >
              <button
                type="button"
                onClick={toggleMenu}
                aria-label="تبديل القائمة"
                aria-expanded={isOpen}
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center

                  rounded-full
  -ml-1
                  border
                  border-white/70

                  bg-white/65

                  backdrop-blur-xl

                  shadow-sm

                  transition-all
                  duration-200

                  active:scale-90
                "
              >
                {isOpen ? (
                  <X size={18} strokeWidth={2.3} color="#1e83ae" />
                ) : (
                  <Menu size={18} strokeWidth={2.3} color="#1e83ae" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =======================================================
          MOBILE BACKDROP
      ======================================================= */}
      {isOpen && (
        <>
          <div
            className="
              fixed
              inset-0
              z-[35]
              md:hidden

              bg-slate-950/20
              backdrop-blur-[4px]
            "
            onClick={closeMenu}
          />

          {/* ===================================================
              COMPACT MOBILE GLASS MENU
          =================================================== */}
          <div
            className="
              fixed

              top-[70px]
              left-6
              right-6

              z-[40]

              md:hidden

              overflow-hidden

              rounded-[24px]

              border
              border-white/70

              bg-white/70

              p-2

              backdrop-blur-2xl
              backdrop-saturate-150

              shadow-[0_18px_50px_rgba(15,23,42,0.16)]
            "
          >
            {/* Glass reflection */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-b
                from-white/45
                via-white/15
                to-transparent
              "
            />

            {/* =================================================
                LINKS
            ================================================= */}
            <nav
              className="
                relative

                z-10
                flex
                flex-col
                gap-1
              "
            >
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
                      min-h-[46px]
                      items-center

                      rounded-[16px]

                      px-4

                      text-[16px]
                      font-bold

                      transition-all
                      duration-200

                      ${
                        isActive
                          ? `
                            bg-white/90
                            text-brand
                            shadow-sm
                          `
                          : `
                            text-slate-800
                            hover:bg-white/50
                          `
                      }
                    `}
                  >
                    {/* active dot */}
                    {isActive && (
                      <span
                        className="
                          absolute
                          right-3

                          h-1.5
                          w-1.5

                          rounded-full

                          bg-brand
                        "
                      />
                    )}

                    <span className="w-full text-right">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                MOBILE CTA
            ================================================= */}
            <div
              className="
                relative
                z-10

                mt-2

                border-t
                border-slate-400/20

                pt-2
              "
            >
              <Link
                href="#contact"
                onClick={goContact}
                className="
                  btn-primary
                  

                  flex
                  h-[44px]
                  w-full

                  items-center
                  justify-center

                  rounded-[16px]

                  text-[14px]
                  font-bold

                  shadow-[0_4px_16px_rgba(30,131,174,0.16)]

                  active:scale-[0.98]
                "
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
