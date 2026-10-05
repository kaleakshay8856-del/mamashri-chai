"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, viewportOnce } from "@/lib/animations";
import { steps } from "@/data/content";
import { IconBox, IconMilk, IconCup } from "@/components/ui/Icons";

const stepIconMap: Record<string, React.ReactNode> = {
  box:  <IconBox  size={40} color="var(--color-jaggery)" />,
  milk: <IconMilk size={40} color="var(--color-jaggery)" />,
  cup:  <IconCup  size={40} color="var(--color-jaggery)" />,
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 paithani-accent opacity-40 pointer-events-none" aria-hidden="true" />

      <div
        className="absolute right-0 top-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,114,10,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14 md:mb-20"
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
            ✦ वापरण्याची पद्धत
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            id="how-heading"
            className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            फक्त{" "}
            <span style={{ color: "var(--color-jaggery)" }}>३ सोप्या पायऱ्या</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="divider-chai my-4" />

          <motion.p
            variants={fadeInUp}
            className="font-devanagari text-base max-w-md mx-auto"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
          >
            मामाश्री Jaggery Tea Premix वापरणे अत्यंत सोपे आहे.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
        >
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 pointer-events-none z-0"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-left rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-jaggery), var(--color-jaggery-light), var(--color-jaggery))",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.article
              key={step.number}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center z-10 group"
              aria-label={`Step ${step.number}: ${step.titleMarathi}`}
            >
              {/* Number circle */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-14 h-14 rounded-full flex items-center justify-center mb-5 z-10 shadow-lg group-hover:scale-110 transition-transform duration-250"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-jaggery) 0%, var(--color-jaggery-light) 100%)",
                  boxShadow: "0 6px 24px rgba(196,114,10,0.35)",
                }}
              >
                <span
                  className="text-lg font-black"
                  style={{ color: "var(--color-white-warm)" }}
                >
                  {step.number}
                </span>
                {/* Pulse ring */}
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: "2px solid rgba(196,114,10,0.5)",
                    transform: "scale(1.3)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.18, duration: 0.4 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-250"
                style={{
                  background: "rgba(196,114,10,0.10)",
                  border: "1px solid rgba(196,114,10,0.22)",
                }}
              >
                {stepIconMap[step.icon]}
              </motion.div>

              {/* Card */}
              <div
                className="w-full p-6 rounded-2xl group-hover:-translate-y-1 transition-transform duration-250"
                style={{
                  background: "var(--color-white-warm)",
                  border: "1px solid var(--color-border-light)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <h3
                  className="font-devanagari text-xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
                >
                  {step.titleMarathi}
                </h3>
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-3"
                  style={{ color: "var(--color-jaggery)" }}
                >
                  {step.titleEnglish}
                </p>
                <p
                  className="font-devanagari text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 font-devanagari" style={{ fontFamily: "var(--font-devanagari)" }}>
            <IconCup size={17} color="currentColor" />
            आजच ऑर्डर करा
          </a>
        </motion.div>
      </div>
    </section>
  );
}
