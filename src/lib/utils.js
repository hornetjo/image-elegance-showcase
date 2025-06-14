
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Remove ClassValue typing and use plain JS spread
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
