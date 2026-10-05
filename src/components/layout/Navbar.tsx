"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, WA_GENERAL_URL } from "@/lib/brand";
import { navItems } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = () => setMenuOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.28, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.05 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[var(--color-chai-dark)]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{ transitionProperty: "background-color, backdrop-filter, box-shadow" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-2" : "py-3"
            }`}
          >
            {/* Logo */}
            <Link
              href="#home"
              aria-label={`${BRAND.NAME_ENGLISH} — Home`}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <motion.div
                animate={{ scale: scrolled ? 0.85 : 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    scrolled ? "w-10 h-10" : "w-12 h-12"
                  }`}
                  style={{
                    background: "rgba(253,246,236,0.1)",
                    border: "1.5px solid rgba(196,114,10,0.4)",
                  }}
                >
                  <Image
                    src="/logo.svg"
                    alt={`${BRAND.NAME_ENGLISH} logo`}
                    fill
                    sizes="(max-width: 768px) 40px, 48px"
                    className="object-contain p-1"
                    priority
                  />
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <p
                  className="font-devanagari font-bold leading-tight text-[var(--color-cream)] text-sm"
                  style={{ fontFamily: "var(--font-devanagari)" }}
                >
                  {BRAND.NAME_MARATHI}
                </p>
                <p className="text-[10px] text-[var(--color-jaggery-pale)] font-medium tracking-wider uppercase leading-none">
                  Jaggery Tea Premix
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(item.href.replace("#", ""))}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md
                    ${activeSection === item.href.replace("#", "")
                      ? "text-[var(--color-jaggery-pale)]"
                      : "text-[var(--color-cream)]/80 hover:text-[var(--color-cream)]"
                    }`}
                  style={{ fontFamily: item.label.match(/[\u0900-\u097F]/) ? "var(--font-devanagari)" : undefined }}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[var(--color-jaggery)]"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BRAND.PHONE_HREF}
                aria-label="Call us"
                className="text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors text-sm font-medium"
              >
                📞 {BRAND.PHONE_DISPLAY}
              </a>
              <a
                href={WA_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
                className="btn-primary text-sm"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  padding: "0.55rem 1.2rem",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp करा
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-jaggery)]"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-0.5 w-6 bg-[var(--color-cream)] rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                className="block h-0.5 w-6 bg-[var(--color-cream)] rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-0.5 w-6 bg-[var(--color-cream)] rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(320px,90vw)] flex flex-col"
              style={{
                background: "linear-gradient(160deg, #2A0D04 0%, #3D1A0A 60%, #1C1008 100%)",
                borderLeft: "1px solid rgba(196,114,10,0.2)",
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-[var(--color-jaggery)]/20">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--color-jaggery)]/40">
                    <Image
                      src="/logo.svg"
                      alt={BRAND.NAME_ENGLISH}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold text-[var(--color-cream)]"
                      style={{ fontFamily: "var(--font-devanagari)" }}
                    >
                      {BRAND.NAME_MARATHI}
                    </p>
                    <p className="text-[10px] text-[var(--color-jaggery-pale)] tracking-wide uppercase">
                      Jaggery Tea Premix
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-jaggery)]/20 text-[var(--color-cream)] hover:bg-[var(--color-jaggery)]/40 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-6 px-5" aria-label="Mobile navigation">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveSection(item.href.replace("#", ""));
                      }}
                      className="flex items-center gap-3 py-3.5 px-3 text-base font-medium text-[var(--color-cream)]/80 hover:text-[var(--color-cream)] hover:bg-[var(--color-jaggery)]/10 rounded-lg transition-all duration-200"
                      style={{
                        fontFamily: item.label.match(/[\u0900-\u097F]/) ? "var(--font-devanagari)" : undefined,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jaggery)] flex-shrink-0" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTAs */}
              <div className="p-5 border-t border-[var(--color-jaggery)]/20 space-y-3">
                <a
                  href={BRAND.PHONE_HREF}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-sm font-semibold text-[var(--color-cream)] bg-[var(--color-jaggery)]/20 hover:bg-[var(--color-jaggery)]/30 transition-colors border border-[var(--color-jaggery)]/30"
                  onClick={() => setMenuOpen(false)}
                >
                  📞 Call: {BRAND.PHONE_DISPLAY}
                </a>
                <a
                  href={WA_GENERAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-sm font-semibold text-white transition-colors"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp वर चौकशी करा
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

