// Shared TypeScript types

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCard {
  id: string;
  name: string;
  nameMarathi: string;
  packSize: string; // e.g. "200g" — update with real data
  price: string;
  description: string;
  image?: string;
}

export interface BenefitItem {
  icon: string;
  titleMarathi: string;
  titleEnglish: string;
  description: string;
}

export interface StepItem {
  number: string;
  titleMarathi: string;
  titleEnglish: string;
  description: string;
  icon: string;
}

export interface AudienceCard {
  emoji: string;
  titleMarathi: string;
  titleEnglish: string;
}

export interface TestimonialItem {
  id: string;
  nameMarathi: string;
  nameEnglish: string;
  location: string;
  text: string;
  isPlaceholder: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
