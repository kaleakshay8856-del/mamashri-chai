"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, viewportOnce } from "@/lib/animations";
import { products } from "@/data/content";
import { BRAND, WA_GENERAL_URL } from "@/lib/brand";

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "var(--color-white-warm)",
        border: "1px solid var(--color-border-light)",
        boxShadow: "var(--shadow-card)",
      }}
      aria-label={`${product.name} — ${product.nameMarathi}`}
    >
      {/* Product image area */}
      <div
        className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #3D1A0A 0%, #2A0D04 60%, #1C1008 100%)",
        }}
      >
        {/* Warli dots bg */}
        <div className="absolute inset-0 warli-bg opacity-25" aria-hidden="true" />

        {/* Logo as product visual */}
        <div className="relative z-10 w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden flex items-center justify-center border-2 border-[rgba(196,114,10,0.35)] group-hover:border-[rgba(196,114,10,0.65)] transition-all duration-300">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(253,246,236,0.05)" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt={`${product.name} — ${BRAND.NAME_ENGLISH}`}
            className="relative z-10 w-full h-full object-contain p-4 transition-transform duration-400 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Floating jaggery pieces */}
        <div className="absolute top-4 right-4 opacity-60" aria-hidden="true">
          <svg viewBox="0 0 36 28" className="w-8 h-6">
            <path
              d="M3 22 Q0 12 8 5 Q16 0 26 3 Q36 6 34 16 Q32 26 22 28 Q10 30 3 22Z"
              fill="url(#jagGrad2)"
            />
            <defs>
              <radialGradient id="jagGrad2" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#F5C464" />
                <stop offset="100%" stopColor="#7A3C0E" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Premium badge */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
          style={{
            background: "var(--color-jaggery)",
            color: "var(--color-white-warm)",
          }}
        >
          Premium
        </span>

        {/* Pack size placeholder indicator */}
        <div
          className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium border"
          style={{
            background: "rgba(0,0,0,0.4)",
            borderColor: "rgba(196,114,10,0.4)",
            color: "rgba(253,246,236,0.7)",
          }}
        >
          📸 Photo येथे
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Name */}
        <div className="mb-2">
          <h3
            className="font-devanagari text-lg font-bold leading-snug"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            {product.nameMarathi}
          </h3>
          <p className="text-sm font-semibold" style={{ color: "var(--color-text-muted)" }}>
            {product.name}
          </p>
        </div>

        {/* Pack size */}
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3 w-fit"
          style={{
            background: "rgba(196,114,10,0.08)",
            border: "1px dashed rgba(196,114,10,0.4)",
            color: "var(--color-text-secondary)",
          }}
        >
          📦 Pack Size: <em>{product.packSize}</em>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--color-jaggery)" }}
          >
            {BRAND.PRICE_RANGE}
          </span>
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            (size अनुसार)
          </span>
        </div>

        {/* Description */}
        <p
          className="font-devanagari text-sm leading-relaxed mb-5 flex-1"
          style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
        >
          {product.description}
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {["झटपट तयार", "दूध न फाटता", "नैसर्गिक गूळ"].map((f) => (
            <span
              key={f}
              className="font-devanagari px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                fontFamily: "var(--font-devanagari)",
                background: "rgba(74,103,65,0.10)",
                color: "var(--color-green-tea)",
                border: "1px solid rgba(74,103,65,0.25)",
              }}
            >
              ✓ {f}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="#contact"
            className="btn-primary flex-1 text-center font-devanagari text-sm"
            style={{ fontFamily: "var(--font-devanagari)" }}
          >
            🛒 ऑर्डर करा
          </a>
          <a
            href={WA_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp inquiry"
            className="flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-[1.02] border"
            style={{
              background: "rgba(37,211,102,0.1)",
              borderColor: "rgba(37,211,102,0.35)",
              color: "#128C7E",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            चौकशी करा
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductShowcase() {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="relative py-20 md:py-28 overflow-hidden pattern-border-top grain-overlay"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream-dark) 0%, var(--color-cream) 100%)",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-jaggery), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            ✦ आमचा प्रीमिक्स
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            id="product-heading"
            className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
          >
            आमचा{" "}
            <span style={{ color: "var(--color-jaggery)" }}>Jaggery Tea Premix</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="divider-chai my-4" />

          <motion.p
            variants={fadeInUp}
            className="font-devanagari text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
          >
            गुळाची नैसर्गिक गोडी, झटपट तयार आणि प्रत्येक कपात एकसारखी चव.
            किंमत: <strong style={{ color: "var(--color-jaggery)" }}>{BRAND.PRICE_RANGE}</strong>
          </motion.p>
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* "More variants coming" placeholder card */}
          <motion.div
            variants={staggerItem}
            className="w-full rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-6 sm:p-10 min-h-[300px]"
            style={{ borderColor: "rgba(196,114,10,0.25)", background: "rgba(196,114,10,0.03)" }}
            aria-label="More product variants coming soon"
          >
            <span className="text-4xl mb-3" aria-hidden="true">📦</span>
            <p
              className="font-devanagari text-center font-semibold mb-1"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-muted)" }}
            >
              आणखी variants लवकरच!
            </p>
            <p className="text-sm text-center" style={{ color: "var(--color-text-muted)" }}>
              More pack sizes coming soon
            </p>
            <a
              href={WA_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-4 text-sm"
            >
              चौकशी करा
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-xs mt-8 font-medium"
          style={{ color: "var(--color-text-muted)" }}
        >
          * Exact pack sizes, weights and variants available on request. Contact us for wholesale pricing.
        </motion.p>
      </div>
    </section>
  );
}

