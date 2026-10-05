"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import { faqs } from "@/data/content";
import { IconPhone, IconWhatsApp } from "@/components/ui/Icons";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `faq-item-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-xl"
      style={{
        background: isOpen ? "var(--color-white-warm)" : "rgba(253,246,236,0.7)",
        border: `1px solid ${isOpen ? "rgba(196,114,10,0.35)" : "var(--color-border-light)"}`,
        boxShadow: isOpen ? "0 4px 24px rgba(61,26,10,0.08)" : "none",
        transition: "border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease",
      }}
    >
      {/* Question button */}
      <button
        id={id}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-jaggery)] focus-visible:ring-inset"
      >
        <span
          className="font-devanagari font-semibold text-sm sm:text-base leading-snug flex-1"
          style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
          style={{
            background: isOpen ? "var(--color-jaggery)" : "rgba(196,114,10,0.12)",
            color: isOpen ? "var(--color-white-warm)" : "var(--color-jaggery)",
            transition: "background 0.22s ease, color 0.22s ease",
          }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      {/* Answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-5 pb-5 pt-1"
              style={{
                borderTop: "1px solid rgba(196,114,10,0.15)",
              }}
            >
              <p
                className="font-devanagari text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream) 0%, var(--color-cream-dark) 100%)",
      }}
    >
      <div className="absolute inset-0 paithani-accent opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
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
            ✦ वारंवार विचारले जाणारे प्रश्न
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            id="faq-heading"
            className="font-devanagari text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            <span style={{ color: "var(--color-jaggery)" }}>FAQ</span> — सामान्य प्रश्न
          </motion.h2>

          <motion.div variants={fadeInUp} className="divider-chai my-4" />
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <div key={i} role="listitem">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl text-center"
          style={{
            background: "rgba(196,114,10,0.07)",
            border: "1px solid rgba(196,114,10,0.18)",
          }}
        >
          <p
            className="font-devanagari font-semibold mb-1"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            अजून काही प्रश्न आहेत?
          </p>
          <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
            We're happy to answer all your queries directly.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+917028854037" className="btn-primary inline-flex items-center gap-2 text-sm font-devanagari" style={{ fontFamily: "var(--font-devanagari)" }}>
              <IconPhone size={15} color="currentColor" />
              Call करा
            </a>
            <a
              href="https://wa.me/9175610721?text=नमस्कार%20मामाश्री%20चहावाले,%20माझा%20प्रश्न%20आहे:"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 text-sm font-devanagari"
              style={{ fontFamily: "var(--font-devanagari)" }}
            >
              <IconWhatsApp size={15} />
              WhatsApp करा
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
