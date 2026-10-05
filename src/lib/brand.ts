// ============================================================
// BRAND CONSTANTS — edit these to update the whole website
// ============================================================

export const BRAND = {
  // --- Identity ---
  NAME_MARATHI: "मामाश्री चहावाले",
  NAME_ENGLISH: "Mamashri Chahavale",
  TAGLINE_MARATHI: "गुळाच्या चहाची अस्सल चव.",
  TAGLINE_ENGLISH: "Authentic Jaggery Tea, Every Cup.",

  // --- Product ---
  PRODUCT_NAME_MARATHI: "गुळाचा चहा प्रीमिक्स",
  PRODUCT_NAME_ENGLISH: "Jaggery Tea Premix",
  PRICE_RANGE: "₹180 – ₹355",

  // --- Location ---
  CITY: "Sambhajinagar",
  STATE: "Maharashtra",
  LOCATION_DISPLAY: "Sambhajinagar, Maharashtra",
  SUPPLY_AREA: "Pan-India",

  // --- Contact ---
  PHONE: "7028854037",
  PHONE_DISPLAY: "+91 70288 54037",
  PHONE_HREF: "tel:+917028854037",

  WHATSAPP: "9175610721",
  WHATSAPP_DISPLAY: "+91 91756 10721",
  WHATSAPP_HREF: "https://wa.me/9175610721",

  GRAPHIC_CONTACT: "7828854037",

  // --- WhatsApp messages ---
  WA_GENERAL_MSG:
    "नमस्कार मामाश्री चहावाले, मला Jaggery Tea Premix बद्दल माहिती आणि किंमत जाणून घ्यायची आहे.",
  WA_WHOLESALE_MSG:
    "नमस्कार मामाश्री चहावाले, मला Jaggery Tea Premix साठी Wholesale माहिती हवी आहे.",

  // --- Social ---
  FACEBOOK_NAME: "Hari Mate Patil",
  FACEBOOK_URL: "https://www.facebook.com/", // Update with real page URL
  INSTAGRAM_URL: "", // Update when Instagram handle is available

  // --- SEO ---
  SEO_TITLE:
    "मामाश्री चहावाले | Jaggery Tea Premix | गुळाची चहा",
  SEO_DESCRIPTION:
    "मामाश्री चहावाले — दर्जेदार Jaggery Tea Premix / गुळाची चहा प्रीमिक्स. Sambhajinagar, Maharashtra येथून Wholesale आणि Retail तसेच Pan-India Supply.",
  SEO_KEYWORDS:
    "Jaggery Tea Premix, Gud Chai Premix, गुळाची चहा, गुळाची चहा प्रीमिक्स, Jaggery Tea Premix Maharashtra, Jaggery Tea Premix Sambhajinagar, Tea Premix Maharashtra, Gud Chai Premix India, Tea Premix Wholesale, Jaggery Tea Premix Wholesale",
  OG_IMAGE: "/og-image.jpg",
} as const;

// Derived WhatsApp URLs with pre-filled messages
export const WA_GENERAL_URL = `${BRAND.WHATSAPP_HREF}?text=${encodeURIComponent(BRAND.WA_GENERAL_MSG)}`;
export const WA_WHOLESALE_URL = `${BRAND.WHATSAPP_HREF}?text=${encodeURIComponent(BRAND.WA_WHOLESALE_MSG)}`;
