"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, viewportOnce } from "@/lib/animations";
import { benefits } from "@/data/content";
import {
  IconGrain, IconZap, IconMilk, IconRefresh,
  IconHome, IconBox,
} from "@/components/ui/Icons";

const iconMap: Record<string, React.ReactNode> = {
  grain:   <IconGrain   size={26} color="var(--color-jaggery-pale)" />,
  zap:     <IconZap     size={26} color="var(--color-jaggery-pale)" />,
  milk:    <IconMilk    size={26} color="var(--color-jaggery-pale)" />,
  refresh: <IconRefresh size={26} color="var(--color-jaggery-pale)" />,
  home:    <IconHome    size={26} color="var(--color-jaggery-pale)" />,
  box:     <IconBox     size={26} color="var(--color-jaggery-pale)" />,
};

export default function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="relative pt-0 pb-20 md:pb-28 overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(160deg, #1C1008 0%, #2A0D04 45%, #3D1A0A 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 warli-bg opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(196,114,10,0.10) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-10 md:mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-3"
            style={{
              color: "var(--color-jaggery-pale)",
              background: "rgba(196,114,10,0.15)",
              border: "1px solid rgba(196,114,10,0.3)",
            }}
          >
            ✦ का निवडायचे मामाश्री?
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            id="benefits-heading"
            className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
          >
            मामाश्री चहावाले चे{" "}
            <span style={{ color: "var(--color-jaggery-pale)" }}>वैशिष्ट्ये</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-14 h-0.5 mx-auto my-4 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--color-jaggery), var(--color-jaggery-light))" }}
          />

          <motion.p
            variants={fadeInUp}
            className="font-devanagari text-base max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-devanagari)", color: "rgba(253,246,236,0.70)" }}
          >
            आमचा Jaggery Tea Premix तुमच्या दैनंदिन जीवनात चहाचा अनुभव
            सोपा, रुचकर आणि consistent बनवतो.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {benefits.map((b, i) => (
            <motion.article
              key={b.titleEnglish}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="group relative p-6 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: "rgba(253,246,236,0.04)",
                border: "1px solid rgba(196,114,10,0.18)",
                backdropFilter: "blur(8px)",
              }}
              aria-label={b.titleMarathi}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "rgba(196,114,10,0.06)" }}
                aria-hidden="true"
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(196,114,10,0.15)",
                  border: "1px solid rgba(196,114,10,0.28)",
                }}
              >
                {iconMap[b.icon]}
              </motion.div>

              {/* Number accent */}
              <span
                className="absolute top-4 right-4 text-5xl font-black opacity-[0.04]"
                style={{ color: "var(--color-jaggery-pale)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3
                className="font-devanagari text-lg font-bold mb-1.5"
                style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
              >
                {b.titleMarathi}
              </h3>
              <p
                className="text-xs font-semibold tracking-wide mb-2 uppercase"
                style={{ color: "var(--color-jaggery-pale)" }}
              >
                {b.titleEnglish}
              </p>
              <p
                className="font-devanagari text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-devanagari)", color: "rgba(253,246,236,0.65)" }}
              >
                {b.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-400 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--color-jaggery), var(--color-jaggery-light))" }}
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
