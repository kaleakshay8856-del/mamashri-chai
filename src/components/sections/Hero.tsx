"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND, WA_GENERAL_URL } from "@/lib/brand";

/* Steam lines */
function SteamLines() {
  return (
    <svg viewBox="0 0 60 80" className="absolute -top-14 left-1/2 -translate-x-1/2 w-10 h-16 pointer-events-none" aria-hidden="true">
      <path d="M10 70 Q15 50 10 30 Q5 10 10 0" stroke="rgba(253,246,236,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" className="steam-line" />
      <path d="M30 70 Q38 48 30 28 Q22 8 30 0" stroke="rgba(253,246,236,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" className="steam-line" />
      <path d="M50 70 Q44 50 50 30 Q56 10 50 0" stroke="rgba(253,246,236,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" className="steam-line" />
    </svg>
  );
}

/* Particles */
function Particles() {
  const dots = [
    { top: "15%", left: "5%",  size: 6, delay: 0 },
    { top: "75%", left: "8%",  size: 4, delay: 1.2 },
    { top: "30%", right: "5%", size: 5, delay: 0.6 },
    { top: "80%", right: "8%", size: 3, delay: 1.8 },
  ];
  return (
    <>
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle absolute rounded-full pointer-events-none hidden sm:block"
          style={{
            top: d.top,
            left:  (d as { left?: string }).left,
            right: (d as { right?: string }).right,
            width: d.size, height: d.size,
            background: "radial-gradient(circle, rgba(232,150,15,0.65) 0%, rgba(196,114,10,0.25) 100%)",
            animationDelay: `${d.delay}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

/* Warli divider */
function WarliMotif({ compact = false }: { compact?: boolean }) {
  const count = compact ? 3 : 5;
  const total = compact ? 120 : 200;
  return (
    <svg viewBox={`0 0 ${total} 40`} className="w-full opacity-25" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <g key={i} transform={`translate(${(total / count) * i + total / count / 2}, 20)`}>
          <polygon points="0,-10 8,0 0,10 -8,0" fill="none" stroke="rgba(232,150,15,0.9)" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="2" fill="rgba(232,150,15,0.9)" />
        </g>
      ))}
      <line x1="4" y1="20" x2={total - 4} y2="20" stroke="rgba(232,150,15,0.25)" strokeWidth="0.75" strokeDasharray="4 6" />
    </svg>
  );
}

/* Tea cup illustration */
function TeaCupIllustration({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const w = size === "sm" ? "w-24" : size === "lg" ? "w-64" : "w-44 sm:w-52";
  return (
    <div className="relative flex flex-col items-center">
      <SteamLines />
      <svg viewBox="0 0 160 130" className={`${w} drop-shadow-2xl`} aria-label="Steaming jaggery tea cup" role="img">
        <ellipse cx="80" cy="122" rx="68" ry="8" fill="rgba(61,26,10,0.4)" />
        <ellipse cx="80" cy="118" rx="65" ry="7" fill="#5C2E0A" />
        <ellipse cx="80" cy="115" rx="62" ry="6" fill="#7A3C0E" />
        <path d="M28 55 Q24 100 32 112 Q55 120 80 120 Q105 120 128 112 Q136 100 132 55 Z" fill="url(#cupGrad)" />
        <ellipse cx="80" cy="55" rx="52" ry="10" fill="#A0520C" />
        <ellipse cx="80" cy="55" rx="48" ry="8" fill="#BE6210" />
        <ellipse cx="80" cy="55" rx="44" ry="7" fill="url(#teaGrad)" />
        <ellipse cx="72" cy="54" rx="12" ry="3" fill="rgba(245,196,100,0.3)" />
        <path d="M130 72 Q155 72 155 88 Q155 104 130 104" fill="none" stroke="#8B4513" strokeWidth="9" strokeLinecap="round" />
        <path d="M130 72 Q150 72 150 88 Q150 104 130 104" fill="none" stroke="#A0520C" strokeWidth="5" strokeLinecap="round" />
        <path d="M30 78 Q80 85 130 78" fill="none" stroke="rgba(196,114,10,0.5)" strokeWidth="1.5" strokeDasharray="3 4" />
        <defs>
          <linearGradient id="cupGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7A3C0E" /><stop offset="50%" stopColor="#5C2E0A" /><stop offset="100%" stopColor="#3D1A08" />
          </linearGradient>
          <radialGradient id="teaGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4720A" /><stop offset="60%" stopColor="#8B4A06" /><stop offset="100%" stopColor="#5C2E0A" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/* WhatsApp icon */
function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════ */
export default function Hero() {
  const line1 = ["गुळाच्या", "चहाची", "अस्सल", "चव,"];
  const line2 = ["आता", "प्रत्येक", "कपात."];

  return (
    <section
      id="home"
      aria-label="Hero — Mamashri Chahavale Jaggery Tea Premix"
      className="relative flex items-center overflow-hidden grain-overlay"
      style={{
        background: "linear-gradient(150deg, #1C1008 0%, #2A0D04 35%, #3D1A0A 65%, #2A1206 100%)",
        minHeight: "100dvh",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 warli-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-2xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(196,114,10,0.10) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <Particles />
      <div
        className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-jaggery), var(--color-jaggery-light), var(--color-jaggery), transparent)" }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-16 lg:pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">

          {/* TEXT COLUMN — centered on all screens below lg */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 w-full">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-5"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase"
                style={{
                  background: "rgba(196,114,10,0.14)",
                  border: "1px solid rgba(196,114,10,0.35)",
                  color: "var(--color-jaggery-pale)",
                }}
              >
                ✦ Sambhajinagar, Maharashtra ✦
              </span>
            </motion.div>

            {/* Mobile logo — hidden on lg+ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mb-6"
            >
              <div
                className="relative rounded-full overflow-hidden mx-auto"
                style={{
                  width: 100, height: 100,
                  background: "radial-gradient(circle, rgba(61,26,10,0.92) 0%, rgba(28,16,8,0.97) 100%)",
                  border: "2px solid rgba(196,114,10,0.45)",
                  boxShadow: "0 0 32px 6px rgba(196,114,10,0.22)",
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="मामाश्री चहावाले"
                  fill
                  sizes="100px"
                  className="object-contain p-2"
                  priority
                />
              </div>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-devanagari font-black leading-[1.1] tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-devanagari)",
                color: "var(--color-cream)",
                fontSize: "clamp(2rem, 7vw, 5.5rem)",
              }}
              aria-label="गुळाच्या चहाची अस्सल चव, आता प्रत्येक कपात."
            >
              <span className="block">
                {line1.map((word, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.52, delay: 0.18 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-[0.15em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block" style={{ color: "var(--color-jaggery-pale)" }}>
                {line2.map((word, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.52, delay: 0.18 + line1.length * 0.07 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-[0.15em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Warli divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="mb-4 w-48 sm:w-64"
              style={{ transformOrigin: "center" }}
            >
              <WarliMotif compact />
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-devanagari text-sm sm:text-base leading-relaxed mb-4 max-w-[90%] sm:max-w-sm"
              style={{ fontFamily: "var(--font-devanagari)", color: "rgba(253,246,236,0.72)" }}
            >
              झटपट तयार होणारी, दूध न फाटता रुचकर गुळाची चहा.
              Wholesale &amp; Retail · Pan-India Supply
            </motion.p>

            {/* Price chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.88 }}
              className="mb-5"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(196,114,10,0.18)",
                  border: "1px solid rgba(196,114,10,0.38)",
                  color: "var(--color-cream)",
                }}
              >
                <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "var(--color-jaggery-pale)" }}>
                  किंमत
                </span>
                <span className="w-px h-3 opacity-30 rounded-full" style={{ background: "var(--color-jaggery-pale)" }} aria-hidden="true" />
                {BRAND.PRICE_RANGE}
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.96 }}
              className="flex flex-col gap-3 w-full max-w-[320px] sm:flex-row sm:max-w-none sm:w-auto mb-6"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-devanagari)", padding: "0.8rem 1.8rem", fontSize: "0.95rem" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span style={{ fontFamily: "var(--font-devanagari)" }}>ऑर्डर करा</span>
              </a>
              <a
                href={WA_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all hover:opacity-90"
                style={{
                  fontFamily: "var(--font-devanagari)",
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  color: "#fff",
                  padding: "0.8rem 1.8rem",
                  fontSize: "0.95rem",
                  boxShadow: "0 3px 14px rgba(37,211,102,0.28)",
                }}
              >
                <WAIcon size={16} />
                <span style={{ fontFamily: "var(--font-devanagari)" }}>WhatsApp करा</span>
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-[320px] sm:max-w-none"
            >
              {[
                { label: "Premium Quality", icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
                { label: "दूध न फाटता",    icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2h8l1 6H7L8 2z"/><path d="M7 8c0 5 2 9 5 9s5-4 5-9"/><path d="M6 12h12"/></svg> },
                { label: "Pan-India",       icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
                { label: "Wholesale",       icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
              ].map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(253,246,236,0.06)",
                    border: "1px solid rgba(196,114,10,0.22)",
                    color: "rgba(245,196,100,0.80)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.icon}
                  {t.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* VISUAL COLUMN — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center justify-center gap-6 lg:w-[400px] xl:w-[440px] flex-shrink-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 rounded-full border border-dashed pointer-events-none"
                style={{ borderColor: "rgba(196,114,10,0.17)" }}
                aria-hidden="true"
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 210, height: 210,
                  background: "radial-gradient(circle, rgba(61,26,10,0.92) 0%, rgba(28,16,8,0.97) 100%)",
                  border: "2.5px solid rgba(196,114,10,0.35)",
                  boxShadow: "0 0 48px 6px rgba(196,114,10,0.15), 0 0 90px 14px rgba(196,114,10,0.07)",
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="मामाश्री चहावाले — Official Logo"
                  fill
                  sizes="210px"
                  className="object-contain p-5"
                  priority
                />
              </div>
            </div>
            <TeaCupIllustration size="lg" />
            <p
              className="text-[10px] italic text-center px-3 py-1 rounded-full"
              style={{ color: "rgba(253,246,236,0.26)", border: "1px dashed rgba(196,114,10,0.18)" }}
            >
              Product photo येथे जोडता येईल
            </p>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(253,246,236,0.22)" }}>scroll</span>
          <svg width="13" height="20" viewBox="0 0 16 24" fill="none" stroke="rgba(196,114,10,0.38)" strokeWidth="1.5" strokeLinecap="round">
            <rect x="2" y="1" width="12" height="20" rx="6" />
            <motion.line
              x1="8" y1="5" x2="8" y2="9"
              animate={{ y1: [5, 9, 5], y2: [9, 13, 9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-cream))" }}
        aria-hidden="true"
      />
    </section>
  );
}
