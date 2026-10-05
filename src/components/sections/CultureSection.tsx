"use client";
"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInLeft, fadeInUp, viewportOnce } from "@/lib/animations";
import { BRAND } from "@/lib/brand";
import { IconSeedling, IconGrain, IconCup, IconHandshake } from "@/components/ui/Icons";

const heritagePoints = [
  {
    icon: <IconSeedling  size={22} color="var(--color-jaggery-pale)" />,
    title: "महाराष्ट्राच्या मातीतून",
    desc: "Sambhajinagar च्या समृद्ध परंपरेतून जन्मलेली एक खरी Maharashtrian brand.",
  },
  {
    icon: <IconGrain     size={22} color="var(--color-jaggery-pale)" />,
    title: "गुळाची शुद्धता",
    desc: "नैसर्गिक गूळ वापरून बनवलेला premium premix — भेसळ नाही, शुद्ध चव.",
  },
  {
    icon: <IconCup       size={22} color="var(--color-jaggery-pale)" />,
    title: "चहाची संस्कृती",
    desc: "महाराष्ट्रातील चहा-प्रेमींसाठी — गुळाच्या चहाचा खरा अनुभव.",
  },
  {
    icon: <IconHandshake size={22} color="var(--color-jaggery-pale)" />,
    title: "आतिथ्याची भावना",
    desc: "मराठी आतिथ्याप्रमाणे — प्रत्येक कप मध्ये warmth आणि काळजी.",
  },
];
function WarliDecoration() {
  // Pre-computed fixed values to avoid server/client float precision mismatch
  // angle = (i/6)*2π → cx=50+cos(angle)*20, cy=60+sin(angle)*20
  const figures = [
    { cx: 70,   cy: 60    },
    { cx: 60,   cy: 77.32 },
    { cx: 40,   cy: 77.32 },
    { cx: 30,   cy: 60    },
    { cx: 40,   cy: 42.68 },
    { cx: 60,   cy: 42.68 },
  ];
  return (
    <svg viewBox="0 0 300 120" className="w-full opacity-25" aria-hidden="true">
      {figures.map((f, i) => (
        <g key={i} transform={`translate(${f.cx},${f.cy})`}>
          <circle cy="-8" r="4" fill="rgba(196,114,10,0.8)" />
          <line y1="-4" y2="4" stroke="rgba(196,114,10,0.8)" strokeWidth="1.5" />
          <line y1="-2" x2="-5" y2="2" stroke="rgba(196,114,10,0.8)" strokeWidth="1" />
          <line y1="-2" x2="5"  y2="2" stroke="rgba(196,114,10,0.8)" strokeWidth="1" />
          <line y1="4"  x2="-4" y2="10" stroke="rgba(196,114,10,0.8)" strokeWidth="1" />
          <line y1="4"  x2="4"  y2="10" stroke="rgba(196,114,10,0.8)" strokeWidth="1" />
        </g>
      ))}
      <circle cx="50" cy="60" r="10" fill="none" stroke="rgba(196,114,10,0.5)" strokeWidth="1" strokeDasharray="3 3" />
      {[120, 155, 190, 225, 260].map((x, i) => (
        <g key={i} transform={`translate(${x},60)`}>
          <polygon points="0,-12 9,0 0,12 -9,0" fill="none" stroke="rgba(196,114,10,0.7)" strokeWidth="1.5" />
          <circle r="2.5" fill="rgba(196,114,10,0.7)" />
        </g>
      ))}
      <line x1="108" y1="60" x2="285" y2="60" stroke="rgba(196,114,10,0.2)" strokeWidth="0.75" strokeDasharray="3 6" />
    </svg>
  );
}

/* Brass chai cup illustration */
function BrassCup() {
  return (
    <svg
      viewBox="0 0 140 160"
      className="w-28 sm:w-36 drop-shadow-2xl"
      aria-label="Traditional brass chai cup"
      role="img"
    >
      {/* Saucer */}
      <ellipse cx="70" cy="148" rx="60" ry="8" fill="rgba(120,80,20,0.4)" />
      <ellipse cx="70" cy="145" rx="58" ry="6" fill="#7A5010" />
      <ellipse cx="70" cy="143" rx="54" ry="5" fill="#9A6418" />
      {/* Cup body */}
      <path d="M22,60 Q18,100 26,112 Q48,122 70,122 Q92,122 114,112 Q122,100 118,60 Z" fill="url(#brassCupGrad)" />
      {/* Rim */}
      <ellipse cx="70" cy="60" rx="48" ry="9" fill="#C8920A" />
      <ellipse cx="70" cy="60" rx="44" ry="7.5" fill="#E8B020" />
      {/* Tea surface */}
      <ellipse cx="70" cy="60" rx="40" ry="6" fill="url(#brassTeaGrad)" />
      {/* Handle */}
      <path d="M116,75 Q140,75 140,90 Q140,106 116,106" fill="none" stroke="#B07818" strokeWidth="10" strokeLinecap="round" />
      <path d="M116,75 Q136,75 136,90 Q136,106 116,106" fill="none" stroke="#D4960C" strokeWidth="5" strokeLinecap="round" />
      {/* Engraved pattern on cup */}
      <path d="M25,80 Q70,87 115,80" fill="none" stroke="rgba(212,150,12,0.5)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M24,92 Q70,99 116,92" fill="none" stroke="rgba(212,150,12,0.35)" strokeWidth="1" strokeDasharray="2 4" />
      {/* Brass shine */}
      <ellipse cx="45" cy="70" rx="6" ry="12" fill="rgba(255,220,100,0.25)" transform="rotate(-15,45,70)" />
      <defs>
        <linearGradient id="brassCupGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8920A" />
          <stop offset="40%" stopColor="#9A6418" />
          <stop offset="100%" stopColor="#5C3A08" />
        </linearGradient>
        <radialGradient id="brassTeaGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C4720A" />
          <stop offset="100%" stopColor="#5C2E0A" />
        </radialGradient>
      </defs>
    </svg>
  );
}


export default function CultureSection() {
  return (
    <section
      id="culture"
      aria-labelledby="culture-heading"
      className="relative py-20 md:py-28 overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(160deg, #1C1008 0%, #2A0D04 50%, #3D1A0A 100%)",
      }}
    >
      {/* Warli/Paithani bg pattern */}
      <div className="absolute inset-0 warli-bg opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Side accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-jaggery), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Warli decoration header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="mb-2"
        >
          <WarliDecoration />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text */}
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
                color: "var(--color-jaggery-pale)",
                background: "rgba(196,114,10,0.15)",
                border: "1px solid rgba(196,114,10,0.3)",
              }}
            >
              ✦ महाराष्ट्राची मुळे
            </motion.span>

            <motion.h2
              variants={fadeInLeft}
              id="culture-heading"
              className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
            >
              महाराष्ट्राच्या मातीतील{" "}
              <span style={{ color: "var(--color-jaggery-pale)" }}>चवीचा अनुभव.</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-14 h-0.5 rounded-full mb-5"
              style={{ background: "linear-gradient(90deg, var(--color-jaggery), var(--color-jaggery-light))" }}
            />

            <motion.p
              variants={fadeInUp}
              className="font-devanagari text-base sm:text-lg leading-relaxed mb-7"
              style={{ fontFamily: "var(--font-devanagari)", color: "rgba(253,246,236,0.80)" }}
            >
              मामाश्री चहावाले ही केवळ एक product brand नाही — हे महाराष्ट्राच्या
              समृद्ध चहा संस्कृतीचे, गुळाच्या शुद्धतेचे आणि मराठी
              आतिथ्याचे प्रतीक आहे.
            </motion.p>

            {/* Heritage points */}
            <motion.div
              variants={staggerContainer}
              className="space-y-4"
            >
              {heritagePoints.map((p) => (
                <motion.div
                  key={p.title}
                  variants={staggerItem}
                  className="flex items-start gap-4 group"
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 group-hover:border-[rgba(196,114,10,0.6)]"
                    style={{
                      background: "rgba(196,114,10,0.12)",
                      borderColor: "rgba(196,114,10,0.25)",
                    }}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3
                      className="font-devanagari font-bold mb-0.5"
                      style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="font-devanagari text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-devanagari)", color: "rgba(253,246,236,0.65)" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Outer decorative ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "1.5px dashed rgba(196,114,10,0.18)",
                margin: "2rem",
              }}
              aria-hidden="true"
            />

            {/* Background glow card */}
            <div
              className="relative w-full max-w-sm rounded-3xl p-8 sm:p-10 overflow-hidden"
              style={{
                background: "rgba(253,246,236,0.04)",
                border: "1px solid rgba(196,114,10,0.22)",
              }}
            >
              {/* Paithani pattern in bg */}
              <div className="absolute inset-0 paithani-accent opacity-30 rounded-3xl" aria-hidden="true" />

              {/* Brass cup center piece */}
              <div className="flex justify-center mb-6 relative z-10">
                <BrassCup />
              </div>

              {/* Jaggery pieces */}
              <div className="flex justify-center gap-4 mb-5 relative z-10" aria-hidden="true">
                {[1, 2, 3].map((i) => (
                  <svg key={i} viewBox="0 0 28 22" className="w-6 h-5 opacity-80">
                    <path
                      d="M2,16 Q0,8 6,3 Q12,0 20,2 Q28,4 26,12 Q24,20 16,22 Q6,24 2,16Z"
                      fill={`hsl(${28 + i * 8},75%,${35 + i * 8}%)`}
                    />
                  </svg>
                ))}
              </div>

              {/* Maharashtra quote */}
              <blockquote className="text-center relative z-10">
                <p
                  className="font-devanagari text-base font-bold mb-1"
                  style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-jaggery-pale)" }}
                >
                  "एक चहा, हजारो आठवणी."
                </p>
                <footer className="text-xs" style={{ color: "rgba(253,246,236,0.50)" }}>
                  — {BRAND.NAME_MARATHI}
                </footer>
              </blockquote>

              {/* Corner Paithani motifs */}
              {[
                "top-3 left-3",
                "top-3 right-3",
                "bottom-3 left-3",
                "bottom-3 right-3",
              ].map((pos, i) => (
                <svg key={i} viewBox="0 0 24 24" className={`absolute ${pos} w-6 h-6 opacity-20`} aria-hidden="true">
                  <polygon points="12,2 22,12 12,22 2,12" fill="none" stroke="rgba(196,114,10,0.9)" strokeWidth="1.5" />
                  <polygon points="12,6 18,12 12,18 6,12" fill="rgba(196,114,10,0.4)" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
