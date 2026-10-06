"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import { BRAND, WA_GENERAL_URL } from "@/lib/brand";

export default function PanIndia() {
  const stats = [
    { value: "1",   unit: "Brand", label: "एक दर्जेदार ब्रँड" },
    { value: "Pan", unit: "India", label: "संपूर्ण भारत" },
    { value: "W+R", unit: "",      label: "Wholesale + Retail" },
  ];

  return (
    <section
      id="supply"
      aria-labelledby="supply-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="absolute inset-0 paithani-accent opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Sambhajinagar poster ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <div
              className="relative rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md"
              style={{
                border: "1.5px solid rgba(196,114,10,0.30)",
                boxShadow: "0 12px 48px rgba(61,26,10,0.16)",
              }}
            >
              {/* Top label bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ background: "rgba(42,13,4,0.92)", backdropFilter: "blur(4px)" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-jaggery-pale)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "var(--color-jaggery-pale)" }}>
                  Sambhajinagar, Maharashtra
                </span>
              </div>

              {/* Poster */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sambhajinagar-map.png"
                alt="Chhatrapati Sambhajinagar Cartographic Poster — our home city"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <p
              className="font-devanagari text-xs text-center"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-muted)" }}
            >
              छत्रपती संभाजीनगर — आमचे शहर, आमची ओळख
            </p>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
              style={{
                color: "var(--color-jaggery)",
                background: "rgba(196,114,10,0.10)",
                border: "1px solid rgba(196,114,10,0.25)",
              }}
            >
              ✦ आमचा पुरवठा
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              id="supply-heading"
              className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
            >
              छत्रपती संभाजीनगरातून{" "}
              <span style={{ color: "var(--color-jaggery)" }}>संपूर्ण भारतात!</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="divider-chai my-4 ml-0"
              style={{ margin: "0 0 1rem 0" }}
            />

            <motion.p
              variants={fadeInUp}
              className="font-devanagari text-base sm:text-lg leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
            >
              मामाश्री चहावाले आमचा दर्जेदार Jaggery Tea Premix{" "}
              <strong style={{ color: "var(--color-chai-brown)" }}>Sambhajinagar, Maharashtra</strong>{" "}
              येथून संपूर्ण भारतात supply करतो. Wholesale आणि Retail — दोन्ही सेवा उपलब्ध.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              We manufacture and supply premium Jaggery Tea Premix from Sambhajinagar, Maharashtra.
              Contact us for supply details, delivery timelines, and pricing.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-2 sm:p-3 rounded-xl"
                  style={{
                    background: "rgba(196,114,10,0.07)",
                    border: "1px solid rgba(196,114,10,0.18)",
                  }}
                >
                  <p className="font-bold text-xl" style={{ color: "var(--color-jaggery)" }}>
                    {s.value}
                    <span className="text-sm ml-0.5">{s.unit}</span>
                  </p>
                  <p
                    className="font-devanagari text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-muted)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <a
                href={WA_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-devanagari text-sm"
                style={{ fontFamily: "var(--font-devanagari)" }}
              >
                Supply बद्दल चौकशी करा
              </a>
              <a href={BRAND.PHONE_HREF} className="btn-ghost text-sm">
                📞 {BRAND.PHONE_DISPLAY}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
