"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { BRAND } from "@/lib/brand";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      variants={fadeInUp}
      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full"
      style={{
        color: "var(--color-jaggery)",
        background: "rgba(196,114,10,0.1)",
        border: "1px solid rgba(196,114,10,0.25)",
      }}
    >
      {children}
    </motion.span>
  );
}

const pillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "नैसर्गिक घटक",
    sub: "Natural Ingredients",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    label: "उच्च दर्जा",
    sub: "Premium Quality",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: "महाराष्ट्राची चव",
    sub: "Maharashtra's Taste",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: "Pan-India Supply",
    sub: "Wholesale & Retail",
  },
];

export default function BrandStory() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(196,114,10,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--color-jaggery), transparent)" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/*- LEFT: Visual / decorative card- */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex items-center justify-center"
          >
            {/* Layered card background */}
            <div
              className="absolute inset-0 rounded-2xl rotate-3 opacity-30"
              style={{ background: "var(--color-cream-dark)", border: "1px solid var(--color-border-light)" }}
              aria-hidden="true"
            />
            <div
              className="relative w-full rounded-2xl p-8 sm:p-14 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #3D1A0A 0%, #2A0D04 60%, #1C1008 100%)",
                border: "1px solid rgba(196,114,10,0.25)",
                boxShadow: "0 32px 80px rgba(61,26,10,0.28)",
                minHeight: "360px",
              }}
            >
              {/* Warli dots pattern */}
              <div className="absolute inset-0 warli-bg opacity-30 rounded-2xl" aria-hidden="true" />

              {/* Logo */}
              <div className="relative flex justify-center mb-8">
                <div
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    background: "rgba(253,246,236,0.07)",
                    border: "2px solid rgba(196,114,10,0.40)",
                    boxShadow: "0 0 40px rgba(196,114,10,0.15)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.svg"
                    alt={`${BRAND.NAME_ENGLISH} logo`}
                    className="w-full h-full object-contain p-3"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative text-center mb-8">
                <span
                  className="block text-6xl leading-none mb-3 text-[var(--color-jaggery)]"
                  aria-hidden="true"
                >
                  "
                </span>
                <p
                  className="font-devanagari text-xl sm:text-3xl font-semibold leading-snug px-2"
                  style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
                >
                  चहाची परंपरा, गुळाची गोडी आणि दर्जाची हमी.
                </p>
                <span
                  className="block text-6xl leading-none mt-3 text-[var(--color-jaggery)] rotate-180 inline-block"
                  aria-hidden="true"
                >
                  "
                </span>
              </blockquote>

              {/* Decorative bottom border */}
              <div
                className="h-px rounded-full mb-6"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--color-jaggery), transparent)",
                }}
                aria-hidden="true"
              />

              {/* Brand tagline */}
              <p
                className="text-center text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--color-jaggery-pale)" }}
              >
                {BRAND.LOCATION_DISPLAY} · Since [Year TBD]
              </p>

              {/* Decorative Paithani corner motifs */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  className={`absolute ${pos} w-6 h-6 opacity-30`}
                  aria-hidden="true"
                >
                  <polygon
                    points="10,2 18,10 10,18 2,10"
                    fill="none"
                    stroke="rgba(196,114,10,0.8)"
                    strokeWidth="1.5"
                  />
                  <circle cx="10" cy="10" r="2" fill="rgba(196,114,10,0.6)" />
                </svg>
              ))}
            </div>
          </motion.div>

          {/*- RIGHT: Story text- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col"
          >
            <SectionLabel>✦ आमची गोष्ट</SectionLabel>

            <motion.h2
              variants={fadeInUp}
              id="about-heading"
              className="font-devanagari text-3xl sm:text-4xl font-bold leading-snug mb-4"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
            >
              चहाची परंपरा,{" "}
              <span style={{ color: "var(--color-jaggery)" }}>गुळाची गोडी</span>{" "}
              आणि दर्जाची हमी.
            </motion.h2>

            <motion.div variants={fadeInUp} className="divider-chai my-4 ml-0" style={{ margin: "0 0 1rem 0" }} />

            <motion.p
              variants={staggerItem}
              className="font-devanagari text-base sm:text-lg leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
            >
              मामाश्री चहावाले ही एक {BRAND.LOCATION_DISPLAY}-आधारित ब्रँड आहे
              जी उच्च दर्जाचा Jaggery Tea Premix तयार करते. आमचे ध्येय एकच आहे —
              घरच्या गुळाच्या चहाची खरी चव, आता सहज आणि झटपट.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="font-devanagari text-base leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
            >
              आमचा premix वापरून दूध न फाटता, कमी वेळात स्वादिष्ट आणि रुचकर
              गुळाची चहा तयार होते. घरगुती वापरापासून ते मोठ्या tea stalls पर्यंत
              — सर्वांसाठी हे योग्य आहे.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              We manufacture and supply our premium Jaggery Tea Premix from
              Sambhajinagar, Maharashtra — offering both wholesale and retail
              options with Pan-India delivery.
            </motion.p>

            {/* Pillars */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
            >
              {pillars.map((p) => (
                <motion.div
                  key={p.label}
                  variants={staggerItem}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-sm"
                  style={{
                    background: "rgba(196,114,10,0.06)",
                    border: "1px solid var(--color-border-light)",
                  }}
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: "rgba(196,114,10,0.12)",
                      color: "var(--color-jaggery)",
                      border: "1px solid rgba(196,114,10,0.22)",
                    }}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <p
                      className="font-devanagari text-sm font-semibold leading-tight"
                      style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
                    >
                      {p.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {p.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
              <a
                href="#product"
                className="btn-primary"
                style={{ padding: "0.65rem 1.5rem" }}
              >
                आमचा Premix पाहा →
              </a>
              <a
                href="#contact"
                className="btn-ghost"
              >
                संपर्क करा
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

