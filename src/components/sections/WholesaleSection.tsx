"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight, fadeInUp, viewportOnce } from "@/lib/animations";
import { BRAND, WA_WHOLESALE_URL } from "@/lib/brand";
import { IconCup, IconShop, IconBuilding, IconCafe, IconBox, IconWarehouse } from "@/components/ui/Icons";

const wholesaleTargets = [
  { icon: <IconCup       size={28} color="var(--color-jaggery-pale)" />, label: "Tea Stalls" },
  { icon: <IconShop      size={28} color="var(--color-jaggery-pale)" />, label: "Retail Stores" },
  { icon: <IconBuilding  size={28} color="var(--color-jaggery-pale)" />, label: "Offices" },
  { icon: <IconCafe      size={28} color="var(--color-jaggery-pale)" />, label: "Cafes" },
  { icon: <IconBox       size={28} color="var(--color-jaggery-pale)" />, label: "Distributors" },
  { icon: <IconWarehouse size={28} color="var(--color-jaggery-pale)" />, label: "Small Businesses" },
];

const whyWholesale = [
  "मोठ्या प्रमाणात supply उपलब्ध",
  "Competitive wholesale pricing",
  "Reliable & consistent quality",
  "Sambhajinagar + Pan-India delivery",
  "Flexible order quantities",
  "Dedicated business support",
];

export default function WholesaleSection() {
  return (
    <section
      id="wholesale"
      aria-labelledby="wholesale-heading"
      className="relative py-20 md:py-28 overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(155deg, #2A0D04 0%, #3D1A0A 50%, #1C1008 100%)",
      }}
    >
      {/* Warli bg */}
      <div className="absolute inset-0 warli-bg opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,114,10,0.10) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/*- LEFT: Text- */}
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
              ✦ Wholesale / B2B
            </motion.span>

            <motion.h2
              variants={fadeInLeft}
              id="wholesale-heading"
              className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
            >
              व्यवसायासाठी{" "}
              <span style={{ color: "var(--color-jaggery-pale)" }}>मोठ्या प्रमाणात</span>{" "}
              पुरवठा हवा आहे?
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-14 h-0.5 rounded-full mb-5"
              style={{ background: "linear-gradient(90deg, var(--color-jaggery), var(--color-jaggery-light))" }}
            />

            <motion.p
              variants={fadeInUp}
              className="font-devanagari text-base sm:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-devanagari)", color: "rgba(253,246,236,0.80)" }}
            >
              मामाश्री चहावाले Tea Stalls, Retailers, Offices, Cafes आणि
              Distributors यांच्यासाठी wholesale supply देतो. दर्जेदार
              Jaggery Tea Premix — आता तुमच्या व्यवसायासाठी.
            </motion.p>

            {/* Why wholesale list */}
            <motion.ul
              variants={staggerContainer}
              className="space-y-2.5 mb-7"
              role="list"
            >
              {whyWholesale.map((item) => (
                <motion.li
                  key={item}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(196,114,10,0.25)" }}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5L4.5 7.5L8 3" stroke="#E8960F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    className="font-devanagari text-sm"
                    style={{ fontFamily: item.match(/[\u0900-\u097F]/) ? "var(--font-devanagari)" : undefined, color: "rgba(253,246,236,0.80)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <a
                href={WA_WHOLESALE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-220 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 18px rgba(37,211,102,0.25)",
                }}
                aria-label="Wholesale WhatsApp inquiry"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-devanagari" style={{ fontFamily: "var(--font-devanagari)" }}>
                  Wholesale चौकशी करा
                </span>
              </a>
              <a
                href={BRAND.PHONE_HREF}
                className="btn-outline text-sm font-devanagari"
                style={{ fontFamily: "var(--font-devanagari)" }}
              >
                📞 Call करा
              </a>
            </motion.div>
          </motion.div>

          {/*- RIGHT: Target cards- */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {wholesaleTargets.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-200"
                  style={{
                    background: "rgba(253,246,236,0.04)",
                    borderColor: "rgba(196,114,10,0.20)",
                  }}
                >
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: "rgba(196,114,10,0.12)", border: "1px solid rgba(196,114,10,0.22)" }}>
                    {t.icon}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "rgba(253,246,236,0.80)" }}>
                    {t.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 p-5 rounded-2xl"
              style={{
                background: "rgba(196,114,10,0.12)",
                border: "1px solid rgba(196,114,10,0.28)",
              }}
            >
              <p
                className="font-devanagari text-sm font-semibold mb-2"
                style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
              >
                📞 Wholesale Inquiry:
              </p>
              <p className="text-lg font-bold" style={{ color: "var(--color-jaggery-pale)" }}>
                {BRAND.PHONE_DISPLAY}
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(253,246,236,0.55)" }}>
                WhatsApp: {BRAND.WHATSAPP_DISPLAY}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
