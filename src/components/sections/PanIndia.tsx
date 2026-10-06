"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import { BRAND, WA_GENERAL_URL } from "@/lib/brand";

/* India map SVG — simplified outline with Maharashtra highlighted */
function IndiaMapSVG() {
  return (
    <svg
      viewBox="0 0 420 500"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
      aria-label="India map showing supply from Sambhajinagar, Maharashtra to all India"
      role="img"
    >
      {/* Glow background */}
      <defs>
        <radialGradient id="mapGlow" cx="45%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(196,114,10,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="210" cy="250" rx="180" ry="200" fill="url(#mapGlow)" />

      {/* Simplified India outline */}
      <motion.path
        d="M180,30 L200,28 L220,32 L240,38 L260,50 L275,65 L285,80 L290,100 L295,120 L300,140 L305,165 L310,185 L315,200 L320,215 L318,230 L312,245 L305,260 L295,275 L280,290 L265,305 L250,318 L235,330 L220,342 L208,358 L200,374 L195,390 L192,405 L190,418 L188,430 L186,440 L185,450 L183,458 L180,462 L177,455 L175,444 L172,430 L168,415 L163,398 L158,382 L152,365 L148,350 L145,338 L135,325 L122,312 L108,298 L95,283 L82,268 L72,252 L65,235 L62,218 L65,200 L70,182 L78,165 L88,148 L100,132 L112,118 L125,105 L140,94 L155,84 L168,74 L175,60 L178,46 Z"
        fill="none"
        stroke="rgba(196,114,10,0.35)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* India interior fill */}
      <motion.path
        d="M180,30 L200,28 L220,32 L240,38 L260,50 L275,65 L285,80 L290,100 L295,120 L300,140 L305,165 L310,185 L315,200 L320,215 L318,230 L312,245 L305,260 L295,275 L280,290 L265,305 L250,318 L235,330 L220,342 L208,358 L200,374 L195,390 L192,405 L190,418 L188,430 L186,440 L185,450 L183,458 L180,462 L177,455 L175,444 L172,430 L168,415 L163,398 L158,382 L152,365 L148,350 L145,338 L135,325 L122,312 L108,298 L95,283 L82,268 L72,252 L65,235 L62,218 L65,200 L70,182 L78,165 L88,148 L100,132 L112,118 L125,105 L140,94 L155,84 L168,74 L175,60 L178,46 Z"
        fill="rgba(61,26,10,0.3)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Maharashtra region highlight */}
      <motion.ellipse
        cx="178"
        cy="240"
        rx="38"
        ry="30"
        fill="rgba(196,114,10,0.25)"
        stroke="rgba(196,114,10,0.6)"
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.2 }}
      />

      {/* Sambhajinagar pin */}
      <motion.g
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.5 }}
        filter="url(#glow)"
      >
        {/* Pin shadow */}
        <ellipse cx="178" cy="248" rx="5" ry="2" fill="rgba(0,0,0,0.3)" />
        {/* Pin body */}
        <path
          d="M178,215 C168,215 160,223 160,233 C160,248 178,262 178,262 C178,262 196,248 196,233 C196,223 188,215 178,215Z"
          fill="var(--color-jaggery)"
          stroke="var(--color-jaggery-light)"
          strokeWidth="1"
        />
        <circle cx="178" cy="233" r="5" fill="var(--color-cream)" />
      </motion.g>

      {/* Pulse rings around pin */}
      {[1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="178"
          cy="233"
          r="0"
          fill="none"
          stroke="rgba(196,114,10,0.4)"
          strokeWidth="1.5"
          initial={{ r: 0, opacity: 0.8 }}
          animate={{ r: 20 + i * 14, opacity: 0 }}
          transition={{ duration: 2, delay: 1.6 + i * 0.5, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}

      {/* "Sambhajinagar" label */}
      <motion.text
        x="200"
        y="232"
        fontSize="9"
        fill="var(--color-jaggery-pale)"
        fontWeight="700"
        fontFamily="system-ui"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8 }}
      >
        Sambhajinagar
      </motion.text>
      <motion.text
        x="203"
        y="242"
        fontSize="7.5"
        fill="rgba(196,114,10,0.8)"
        fontFamily="system-ui"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.9 }}
      >
        Maharashtra
      </motion.text>

      {/* Supply lines radiating out */}
      {[
        { x2: 240, y2: 80, delay: 2.1 },  // North
        { x2: 320, y2: 200, delay: 2.2 },  // East
        { x2: 280, y2: 380, delay: 2.3 },  // South-East
        { x2: 130, y2: 380, delay: 2.4 },  // South-West
        { x2: 80, y2: 200, delay: 2.5 },   // West
      ].map((line, i) => (
        <motion.line
          key={i}
          x1="178"
          y1="233"
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(196,114,10,0.25)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: line.delay }}
        />
      ))}

      {/* Destination dots */}
      {[
        { cx: 240, cy: 80, label: "Delhi", delay: 2.6 },
        { cx: 310, cy: 195, label: "Kolkata", delay: 2.7 },
        { cx: 278, cy: 375, label: "Chennai", delay: 2.8 },
        { cx: 132, cy: 378, label: "Mumbai", delay: 2.9 },
        { cx: 82, cy: 198, label: "Rajasthan", delay: 3.0 },
      ].map((dot) => (
        <motion.g
          key={dot.label}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: dot.delay, duration: 0.35 }}
        >
          <circle cx={dot.cx} cy={dot.cy} r="4" fill="rgba(196,114,10,0.5)" stroke="rgba(245,196,100,0.7)" strokeWidth="1" />
          <text x={dot.cx + 6} y={dot.cy + 3} fontSize="7" fill="rgba(253,246,236,0.55)" fontFamily="system-ui">
            {dot.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

export default function PanIndia() {
  const stats = [
    { value: "1", unit: "Brand", label: "एक दर्जेदार ब्रँड" },
    { value: "Pan", unit: "India", label: "संपूर्ण भारत" },
    { value: "W+R", unit: "", label: "Wholesale + Retail" },
  ];

  return (
    <section
      id="supply"
      aria-labelledby="supply-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Subtle paithani pattern */}
      <div className="absolute inset-0 paithani-accent opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <IndiaMapSVG />
          </motion.div>

          {/* Text */}
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
              संभाजीनगरातून{" "}
              <span style={{ color: "var(--color-jaggery)" }}>संपूर्ण भारतात!</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="divider-chai my-4 ml-0" style={{ margin: "0 0 1rem 0" }} />

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

            {/* Stats row */}
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
              <a href={WA_GENERAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary font-devanagari text-sm" style={{ fontFamily: "var(--font-devanagari)" }}>
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
