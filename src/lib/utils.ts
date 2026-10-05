import { type ClassValue, clsx } from "clsx";

/**
 * Merges Tailwind class names safely.
 * Falls back to simple string join if clsx isn't installed.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
