"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { testimonials } from "@/data/content";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--color-jaggery)" aria-hidden="true">
          <path d="M7 1l1.64 3.32L12.5 5l-2.75 2.68.65 3.78L7 9.77l-3.4 1.69.65-3.78L1.5 5l3.86-.68Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const total = testimonials.length;

  const goNext = useCallback(() => {
    setDirection("next");
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection("prev");
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(goNext, 5500);
    return () => clearInterval(timer);
  }, [goNext]);

  const slideVariants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 paithani-accent opacity-25 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            ✦ ग्राहकांचे अनुभव
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            id="testimonials-heading"
            className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            <span style={{ color: "var(--color-jaggery)" }}>ग्राहक</span> काय म्हणतात?
          </motion.h2>

          <motion.div variants={fadeInUp} className="divider-chai my-4" />

          <motion.p
            variants={fadeInUp}
            className="text-sm italic"
            style={{ color: "var(--color-text-muted)" }}
          >
            * These are placeholder testimonials. Replace with real customer reviews.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Card */}
          <div
            className="relative overflow-hidden rounded-3xl min-h-[240px] flex items-center"
            style={{
              background: "var(--color-white-warm)",
              border: "1px solid var(--color-border-light)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Quote mark bg */}
            <span
              className="absolute top-4 left-6 text-8xl font-black leading-none pointer-events-none select-none"
              style={{ color: "rgba(196,114,10,0.06)" }}
              aria-hidden="true"
            >
              "
            </span>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full px-12 sm:px-12 py-8 sm:py-10 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  <StarRating />
                </div>

                {/* Review text */}
                <blockquote>
                  <p
                    className="font-devanagari text-base sm:text-lg leading-relaxed mb-6 italic"
                    style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
                    lang="mr"
                  >
                    "{testimonials[current].text}"
                  </p>
                  <footer>
                    <p
                      className="font-devanagari font-bold"
                      style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
                    >
                      {testimonials[current].nameMarathi}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                      {testimonials[current].location}
                    </p>
                    {testimonials[current].isPlaceholder && (
                      <p className="text-[10px] mt-1 italic" style={{ color: "rgba(140,90,40,0.5)" }}>
                        [Placeholder — replace with real review]
                      </p>
                    )}
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons — inside card on mobile, outside on sm+ */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--color-jaggery)] z-10"
            style={{
              background: "var(--color-white-warm)",
              border: "1px solid var(--color-border-light)",
              color: "var(--color-jaggery)",
            }}
          >
            ←
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--color-jaggery)] z-10"
            style={{
              background: "var(--color-white-warm)",
              border: "1px solid var(--color-border-light)",
              color: "var(--color-jaggery)",
            }}
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > current ? "next" : "prev");
                setCurrent(i);
              }}
              className="rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-jaggery)]"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "var(--color-jaggery)" : "var(--color-border-warm)",
              }}
            />
          ))}
        </div>

        {/* CTA to add reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p
            className="font-devanagari text-sm mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-muted)" }}
          >
            तुमचा अनुभव शेअर करा आणि इतरांना मदत करा!
          </p>
          <a
            href="https://wa.me/9175610721?text=नमस्कार%20मामाश्री%20चहावाले,%20मला%20माझा%20अनुभव%20शेअर%20करायचा%20आहे."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm font-devanagari"
            style={{ fontFamily: "var(--font-devanagari)" }}
          >
            अभिप्राय पाठवा →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
