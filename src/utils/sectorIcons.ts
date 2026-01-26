import {
  Building2,
  Phone,
  ShoppingCart,
  Plane,
  CreditCard,
  LucideIcon
} from "lucide-react";

export interface SectorIconConfig {
  icon: LucideIcon;
  color: string;
}

export const SECTOR_ICON_MAP: Record<string, SectorIconConfig> = {
  banking: {
    icon: Building2,
    color: "#348588" // teal-500 (Dark Cyan)
  },
  fintech: {
    icon: CreditCard,
    color: "#8B5CF6" // violet-500
  },
  telecommunications: {
    icon: Phone,
    color: "#3B82F6" // blue-500
  },
  "air-travel": {
    icon: Plane,
    color: "#0EA5E9" // sky-500
  },
  "retail-ecommerce": {
    icon: ShoppingCart,
    color: "#EC4899" // pink-500
  }
};

/**
 * Get icon and color configuration for a sector by its slug
 */
export function getSectorIcon(slug: string): SectorIconConfig {
  return (
    SECTOR_ICON_MAP[slug] || {
      icon: Building2,
      color: "#94A3B8" // slate-400 as fallback
    }
  );
}

/**
 * Convert hex color to Tailwind background color class
 */
export function getColorClass(hexColor: string): string {
  // Map common hex colors to Tailwind classes
  const colorMap: Record<string, string> = {
    "#348588": "bg-teal-500",
    "#3B82F6": "bg-blue-500",
    "#8B5CF6": "bg-violet-500",
    "#0EA5E9": "bg-sky-500",
    "#EC4899": "bg-pink-500",
    "#94A3B8": "bg-slate-400"
  };

  return colorMap[hexColor] || "bg-gray-500";
}
