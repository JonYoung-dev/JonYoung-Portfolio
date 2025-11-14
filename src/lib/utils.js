import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function createSlug(str) {
  // regex go brr
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") 
    .replace(/[^\w-]+/g, "") 
    .replace(/--+/g, "-"); 
}
