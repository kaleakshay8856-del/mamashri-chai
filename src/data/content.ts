import type {
  NavItem,
  ProductCard,
  BenefitItem,
  StepItem,
  AudienceCard,
  TestimonialItem,
  FAQItem,
} from "@/types";

// ------------------------------------------------------------------
// Navigation
// ------------------------------------------------------------------
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "आमच्याबद्दल", href: "#about" },
  { label: "आमचा प्रीमिक्स", href: "#product" },
  { label: "फायदे", href: "#benefits" },
  { label: "कोणासाठी?", href: "#audience" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ------------------------------------------------------------------
// Product  (update pack sizes / weights when final data is available)
// ------------------------------------------------------------------
export const products: ProductCard[] = [
  {
    id: "jaggery-premix-standard",
    name: "Jaggery Tea Premix",
    nameMarathi: "गुळाचा चहा प्रीमिक्स",
    packSize: "[Pack size TBD]",
    price: "₹180 – ₹355",
    description:
      "आमचा signature गुळाचा चहा प्रीमिक्स. दूध न फाटता, कमी वेळात स्वादिष्ट गुळाची चहा तयार करा. घरासाठी, ऑफिससाठी आणि Tea Stall साठी उत्तम.",
    image: "",
  },
];

// ------------------------------------------------------------------
// Benefits  (icon keys resolved in Benefits.tsx)
// ------------------------------------------------------------------
export const benefits: BenefitItem[] = [
  {
    icon: "grain",
    titleMarathi: "गुळाची नैसर्गिक गोडी",
    titleEnglish: "Natural Jaggery Sweetness",
    description:
      "साखर नाही, गुळाची शुद्ध नैसर्गिक गोडी. Traditional Indian chai चा खरा अनुभव.",
  },
  {
    icon: "zap",
    titleMarathi: "झटपट तयार",
    titleEnglish: "Quick & Convenient",
    description:
      "फक्त premix वापरा आणि काही मिनिटांत स्वादिष्ट गुळाची चहा तयार. वेळ वाचवा, चव नाही.",
  },
  {
    icon: "milk",
    titleMarathi: "दूध न फाटता चहा",
    titleEnglish: "Milk Stays Smooth",
    description:
      "आमचा विशेष Premix वापरल्याने दूध फाटण्याची समस्या नाही. दर वेळी perfect smooth चहा.",
  },
  {
    icon: "refresh",
    titleMarathi: "एकसारखी चव",
    titleEnglish: "Consistent Every Time",
    description:
      "प्रत्येक कपात एकच taste. घरी असो किंवा ऑफिसमध्ये, चव कायम consistent राहते.",
  },
  {
    icon: "home",
    titleMarathi: "घरापासून ऑफिसपर्यंत",
    titleEnglish: "Home to Office",
    description:
      "घरगुती वापरापासून ते मोठ्या ऑफिसपर्यंत सर्वांसाठी उपयुक्त. एक product, अनेक उपयोग.",
  },
  {
    icon: "box",
    titleMarathi: "Wholesale + Retail",
    titleEnglish: "Wholesale & Retail",
    description:
      "व्यक्तिगत वापरासाठी retail आणि व्यवसायासाठी wholesale — दोन्ही उपलब्ध.",
  },
];

// ------------------------------------------------------------------
// How It Works  (icon keys resolved in HowItWorks.tsx)
// ------------------------------------------------------------------
export const steps: StepItem[] = [
  {
    number: "01",
    titleMarathi: "Premix घ्या",
    titleEnglish: "Take the Premix",
    description: "मामाश्री Jaggery Tea Premix मधून आवश्यक प्रमाणात premix घ्या.",
    icon: "box",
  },
  {
    number: "02",
    titleMarathi: "दूध/पाणी तयार करा",
    titleEnglish: "Prepare with Milk or Water",
    description: "product instructions नुसार दूध किंवा पाणी तयार करा आणि premix मिसळा.",
    icon: "milk",
  },
  {
    number: "03",
    titleMarathi: "मस्त चहा तयार!",
    titleEnglish: "Your Chai is Ready!",
    description: "स्वादिष्ट, रुचकर गुळाची चहा तयार! आनंदाने प्या.",
    icon: "cup",
  },
];

// ------------------------------------------------------------------
// Audience
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// Audience  (icon keys resolved in WhoIsItFor.tsx)
// ------------------------------------------------------------------
export const audiences: AudienceCard[] = [
  { emoji: "home",      titleMarathi: "घरगुती वापर",        titleEnglish: "Households" },
  { emoji: "building",  titleMarathi: "ऑफिस",               titleEnglish: "Offices" },
  { emoji: "cup",       titleMarathi: "Tea Stalls",          titleEnglish: "Tea Stalls" },
  { emoji: "shop",      titleMarathi: "Retailers",           titleEnglish: "Retailers" },
  { emoji: "warehouse", titleMarathi: "Wholesalers",         titleEnglish: "Wholesalers" },
  { emoji: "cafe",      titleMarathi: "Cafes / Small Business", titleEnglish: "Cafes & Small Businesses" },
];

// ------------------------------------------------------------------
// Testimonials  (PLACEHOLDER — replace with real customer reviews)
// ------------------------------------------------------------------
export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    nameMarathi: "[ग्राहकाचे नाव]",
    nameEnglish: "[Customer Name]",
    location: "Sambhajinagar",
    text: "ग्राहकांचे अनुभव येथे दाखवले जातील. — [हे placeholder आहे, खरा अनुभव येथे लिहा]",
    isPlaceholder: true,
  },
  {
    id: "t2",
    nameMarathi: "[ग्राहकाचे नाव]",
    nameEnglish: "[Customer Name]",
    location: "Pune",
    text: "ग्राहकांचे अनुभव येथे दाखवले जातील. — [हे placeholder आहे, खरा अनुभव येथे लिहा]",
    isPlaceholder: true,
  },
  {
    id: "t3",
    nameMarathi: "[ग्राहकाचे नाव]",
    nameEnglish: "[Customer Name]",
    location: "Nashik",
    text: "ग्राहकांचे अनुभव येथे दाखवले जातील. — [हे placeholder आहे, खरा अनुभव येथे लिहा]",
    isPlaceholder: true,
  },
];

// ------------------------------------------------------------------
// FAQ
// ------------------------------------------------------------------
export const faqs: FAQItem[] = [
  {
    question: "Jaggery Tea Premix म्हणजे काय?",
    answer:
      "Jaggery Tea Premix म्हणजे गूळ, चहा पावडर आणि इतर नैसर्गिक घटकांचे एकत्रित मिश्रण. हे premix वापरून तुम्ही झटपट स्वादिष्ट गुळाची चहा तयार करू शकता — कोणत्याही त्रासाशिवाय.",
  },
  {
    question: "Premix कसा वापरायचा?",
    answer:
      "Product packaging वर दिलेल्या instructions नुसार आवश्यक प्रमाणात premix घ्या, दूध किंवा पाण्यात मिसळा आणि चहा तयार करा. अधिक माहितीसाठी आम्हाला WhatsApp वर संपर्क करा.",
  },
  {
    question: "दूध फाटत नाही का?",
    answer:
      "हे मामाश्री चहावाले च्या premix चे एक विशेष वैशिष्ट्य आहे. आमचा premix अशा प्रकारे तयार केला आहे की दूध फाटण्याची समस्या येत नाही.",
  },
  {
    question: "किंमत किती आहे?",
    answer:
      "आमच्या Jaggery Tea Premix ची किंमत ₹180 ते ₹355 पर्यंत आहे (pack size नुसार). अचूक किंमत आणि pack variants साठी आम्हाला call करा किंवा WhatsApp वर message करा.",
  },
  {
    question: "Wholesale उपलब्ध आहे का?",
    answer:
      "होय! आम्ही Tea Stalls, Retail Stores, Offices, Cafes आणि Distributors साठी wholesale supply देतो. Wholesale inquiry साठी आमच्या WhatsApp नंबर 9175610721 वर संपर्क करा.",
  },
  {
    question: "Sambhajinagar बाहेर delivery करता का?",
    answer:
      "होय! आम्ही Sambhajinagar च्या बाहेर देखील supply करतो. Pan-India supply उपलब्ध आहे. Delivery बद्दल अधिक माहितीसाठी आम्हाला contact करा.",
  },
  {
    question: "Pan-India supply उपलब्ध आहे का?",
    answer:
      "होय! मामाश्री चहावाले संपूर्ण भारतात supply करतो. तुमचे city आणि requirement सांगा, आम्ही तुम्हाला योग्य माहिती देऊ.",
  },
  {
    question: "Business/retailers साठी bulk orders घेता का?",
    answer:
      "हो, नक्की! Retailers, wholesalers, cafes आणि businesses साठी bulk orders स्वीकारले जातात. Bulk pricing आणि terms साठी थेट 7028854037 वर call करा.",
  },
  {
    question: "Order कसा करायचा?",
    answer:
      "Order करण्यासाठी तुम्ही 7028854037 वर call करू शकता किंवा 9175610721 वर WhatsApp message पाठवू शकता. आम्ही तुम्हाला order process मार्गदर्शन करू.",
  },
];
