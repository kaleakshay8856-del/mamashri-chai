"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInRight, fadeInUp, viewportOnce } from "@/lib/animations";
import { BRAND, WA_GENERAL_URL } from "@/lib/brand";
import { IconPhone, IconWhatsApp, IconMapPin, IconCart, IconCheckCircle } from "@/components/ui/Icons";

interface FormState {
  name: string;
  phone: string;
  city: string;
  requirement: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
  requirement?: string;
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "नाव आवश्यक आहे.";
  if (!values.phone.trim()) {
    errors.phone = "फोन नंबर आवश्यक आहे.";
  } else if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\s+/g, ""))) {
    errors.phone = "कृपया valid 10-digit Indian mobile number द्या.";
  }
  if (!values.city.trim()) errors.city = "City आवश्यक आहे.";
  if (!values.requirement) errors.requirement = "Requirement निवडा.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    city: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const errs = validate(form);
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      // Build WhatsApp message from form
      const msg = `नमस्कार मामाश्री चहावाले,\n\nनाव: ${form.name}\nफोन: ${form.phone}\nCity: ${form.city}\nगरज: ${form.requirement}\nMessage: ${form.message || "—"}`;
      window.open(`${BRAND.WHATSAPP_HREF}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
      setSubmitted(true);
      setForm({ name: "", phone: "", city: "", requirement: "", message: "" });
    },
    [form]
  );

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 ${
      errors[field]
        ? "ring-2 ring-red-400 bg-red-50"
        : "focus:ring-[var(--color-jaggery)] bg-[var(--color-white-warm)] border border-[var(--color-border-light)]"
    }`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 md:py-28 overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(155deg, #1C1008 0%, #2A0D04 50%, #3D1A0A 100%)",
      }}
    >
      <div className="absolute inset-0 warli-bg opacity-15 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-jaggery), var(--color-jaggery-light), var(--color-jaggery), transparent)" }}
        aria-hidden="true"
      />

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
              color: "var(--color-jaggery-pale)",
              background: "rgba(196,114,10,0.15)",
              border: "1px solid rgba(196,114,10,0.3)",
            }}
          >
            ✦ संपर्क करा
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            id="contact-heading"
            className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-cream)" }}
          >
            तुमच्या पुढच्या कपाची{" "}
            <span style={{ color: "var(--color-jaggery-pale)" }}>सुरुवात इथून करा.</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-14 h-0.5 rounded-full mx-auto my-4"
            style={{ background: "linear-gradient(90deg, var(--color-jaggery), var(--color-jaggery-light))" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT: Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Big call CTA */}
            <motion.a
              variants={staggerItem}
              href={BRAND.PHONE_HREF}
              className="group flex items-center gap-4 p-5 rounded-2xl mb-4 transition-all duration-220 hover:scale-[1.01]"
              style={{
                background: "rgba(253,246,236,0.06)",
                border: "1px solid rgba(196,114,10,0.25)",
              }}
              aria-label={`Call us at ${BRAND.PHONE_DISPLAY}`}
            >
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(196,114,10,0.2)" }}
              >
                <IconPhone size={22} color="var(--color-jaggery-pale)" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold mb-0.5" style={{ color: "rgba(253,246,236,0.5)" }}>
                  Call Now
                </p>
                <p className="text-xl font-bold" style={{ color: "var(--color-cream)" }}>
                  {BRAND.PHONE_DISPLAY}
                </p>
              </div>
            </motion.a>

            {/* WhatsApp CTA */}
            <motion.a
              variants={staggerItem}
              href={WA_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl mb-6 transition-all duration-220 hover:scale-[1.01]"
              style={{
                background: "rgba(37,211,102,0.10)",
                border: "1px solid rgba(37,211,102,0.3)",
              }}
              aria-label={`WhatsApp us at ${BRAND.WHATSAPP_DISPLAY}`}
            >
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,211,102,0.2)" }}
              >
                <IconWhatsApp size={22} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold mb-0.5" style={{ color: "rgba(37,211,102,0.7)" }}>
                  WhatsApp
                </p>
                <p className="text-xl font-bold" style={{ color: "var(--color-cream)" }}>
                  {BRAND.WHATSAPP_DISPLAY}
                </p>
              </div>
            </motion.a>

            {/* Large action buttons */}
            <motion.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <a
                href={BRAND.PHONE_HREF}
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-base font-bold transition-all hover:scale-[1.02]"
                style={{
                  background: "var(--color-jaggery)",
                  color: "var(--color-white-warm)",
                  boxShadow: "0 4px 20px rgba(196,114,10,0.35)",
                }}
              >
                <IconPhone size={18} color="currentColor" />
                Call Now
              </a>
              <a
                href={WA_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-base font-bold transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={staggerItem}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "rgba(253,246,236,0.04)", border: "1px solid rgba(196,114,10,0.15)" }}
            >
              <IconMapPin size={20} color="var(--color-jaggery-pale)" />
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--color-cream)" }}>
                  {BRAND.LOCATION_DISPLAY}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(253,246,236,0.5)" }}>
                  Wholesale &amp; Retail · Pan-India Supply
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Inquiry form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div
              className="relative p-6 sm:p-8 rounded-3xl overflow-hidden"
              style={{
                background: "var(--color-cream)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
              }}
            >
              {/* Paithani corners */}
              {["top-3 left-3", "top-3 right-3"].map((pos, i) => (
                <svg key={i} viewBox="0 0 20 20" className={`absolute ${pos} w-5 h-5 opacity-20`} aria-hidden="true">
                  <polygon points="10,1 19,10 10,19 1,10" fill="none" stroke="rgba(196,114,10,0.9)" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="2" fill="rgba(196,114,10,0.6)" />
                </svg>
              ))}

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(196,114,10,0.12)", border: "1px solid rgba(196,114,10,0.3)" }}>
                    <IconCheckCircle size={32} color="var(--color-jaggery)" />
                  </div>
                  <h3
                    className="font-devanagari text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
                  >
                    धन्यवाद!
                  </h3>
                  <p
                    className="font-devanagari text-sm"
                    style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-text-secondary)" }}
                  >
                    तुमचा message WhatsApp वर पाठवला आहे. आम्ही लवकरच reply करू!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost mt-5 text-sm"
                  >
                    नवा message पाठवा
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="font-devanagari text-lg font-bold mb-5"
                    style={{ fontFamily: "var(--font-devanagari)", color: "var(--color-chai-brown)" }}
                  >
                    चौकशी करा
                  </h3>

                  <form onSubmit={handleSubmit} noValidate aria-label="Inquiry form" className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        पूर्ण नाव <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="तुमचे नाव"
                        className={inputClass("name")}
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-devanagari)" }}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        Mobile Number <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={inputClass("phone")}
                        style={{ color: "var(--color-text-primary)" }}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        City <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="तुमचे शहर"
                        className={inputClass("city")}
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-devanagari)" }}
                        aria-describedby={errors.city ? "city-error" : undefined}
                        aria-invalid={!!errors.city}
                      />
                      {errors.city && (
                        <p id="city-error" className="text-red-500 text-xs mt-1" role="alert">{errors.city}</p>
                      )}
                    </div>

                    {/* Requirement */}
                    <div>
                      <label htmlFor="requirement" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        गरज (Requirement) <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <select
                        id="requirement"
                        name="requirement"
                        value={form.requirement}
                        onChange={handleChange}
                        className={inputClass("requirement")}
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-devanagari)" }}
                        aria-describedby={errors.requirement ? "req-error" : undefined}
                        aria-invalid={!!errors.requirement}
                      >
                        <option value="">-- निवडा --</option>
                        <option value="Retail Order">Retail Order (घरगुती/ऑफिस)</option>
                        <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                        <option value="Tea Stall Supply">Tea Stall Supply</option>
                        <option value="Retail Shop Supply">Retail Shop Supply</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      {errors.requirement && (
                        <p id="req-error" className="text-red-500 text-xs mt-1" role="alert">{errors.requirement}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="कोणतीही अतिरिक्त माहिती..."
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--color-jaggery)] bg-[var(--color-white-warm)] border border-[var(--color-border-light)] resize-none"
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-devanagari)" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-base font-bold transition-all duration-220 hover:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                        color: "#fff",
                        boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="font-devanagari" style={{ fontFamily: "var(--font-devanagari)" }}>
                        WhatsApp वर पाठवा
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
