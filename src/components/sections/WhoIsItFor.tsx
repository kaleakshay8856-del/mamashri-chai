"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, viewportOnce } from "@/lib/animations";
import { audiences } from "@/data/content";
import {
  IconHome, IconBuilding, IconCup,
  IconShop, IconWarehouse, IconCafe,
} from "@/components/ui/Icons";

const audienceIconMap: Record<string, React.ReactNode> = {
  home:      <IconHome      size={32} color="var(--color-jaggery)" />,
  building:  <IconBuilding  size={32} color="var(--color-jaggery)" />,
  cup:       <IconCup       size={32} color="var(--color-jaggery)" />,
  shop:      <IconShop      size={32} color="var(--color-jaggery)" />,
  warehouse: <IconWarehouse size={32} color="var(--color-jaggery)" />,
  cafe:      <IconCafe      size={32} color="var(--color-jaggery)" />,
};

export default function WhoIsItFor() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="relative py-20 md:py-28 overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream-dark) 0%, var(--color-cream) 100%)",
      }}
    >
      <div className="absolute inset-0 warli-bg opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-3"
            style={{
              color: "var(--color-jaggery)",
              background: "rgba(196,114,10,0.10)",
              border: "1px solid rgba(196,114,10,0.25)",
            }}
          >
            ✦ कोणासाठी?
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            id="audience-heading"
            className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            हा Premix{" "}
            <span style={{ color: "var(--color-jaggery)" }}>सर्वांसाठी</span> आहे
          </motion.h2>

          <motion.div variants={fadeInUp} className="divider-chai my-4" />

          <motion.p
            variants={fadeInUp}
            className="font-devanagari text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
          >
            घरगुती वापरापासून ते मोठ्या व्यवसायापर्यंत — मामाश्री Jaggery Tea Premix
            प्रत्येकाच्या गरजा पूर्ण करतो.
          </motion.p>
        </motion.div>

        {/* Audience cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
        >
          {audiences.map((a) => (
            <motion.article
              key={a.titleEnglish}
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.22 },
              }}
              className="group relative flex flex-col items-center text-center p-3 sm:p-5 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: "var(--color-white-warm)",
                border: "1px solid var(--color-border-light)",
                boxShadow: "var(--shadow-card)",
              }}
              aria-label={`${a.titleMarathi} — ${a.titleEnglish}`}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(196,114,10,0.06), rgba(196,114,10,0.02))",
                }}
                aria-hidden="true"
              />

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--color-jaggery), var(--color-jaggery-light))" }}
                aria-hidden="true"
              />

              {/* SVG icon */}
              <motion.div
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-250"
                style={{
                  background: "rgba(196,114,10,0.08)",
                  border: "1px solid rgba(196,114,10,0.18)",
                }}
              >
                {audienceIconMap[a.emoji]}
              </motion.div>

              <h3
                className="font-devanagari text-sm font-bold mb-1 leading-snug"
                style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
              >
                {a.titleMarathi}
              </h3>
              <p className="text-[11px] font-medium" style={{ color: "var(--color-text-muted)" }}>
                {a.titleEnglish}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Highlight callout */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 p-6 sm:p-8 rounded-2xl text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(196,114,10,0.10), rgba(196,114,10,0.05))",
            border: "1px solid rgba(196,114,10,0.22)",
          }}
        >
          <p
            className="font-devanagari text-lg sm:text-xl font-bold mb-1"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            तुमच्या गरजेनुसार Retail किंवा Wholesale — दोन्ही उपलब्ध!
          </p>
          <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
            Individual orders to bulk business supply — we've got you covered.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="btn-primary font-devanagari text-sm" style={{ fontFamily: "var(--font-devanagari)" }}>
              ऑर्डर करा
            </a>
            <a href="#wholesale" className="btn-ghost text-sm font-devanagari" style={{ fontFamily: "var(--font-devanagari)" }}>
              Wholesale चौकशी
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
