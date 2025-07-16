// components/ui/icons.tsx

import dynamic from "next/dynamic";

// Map of icon names to their dynamic imports
export const Icons = {
  // General icons
  activity: dynamic(() => import("lucide-react").then((mod) => mod.Activity)),
  alertTriangle: dynamic(() => import("lucide-react").then((mod) => mod.AlertTriangle)),
  arrowUp: dynamic(() => import("lucide-react").then((mod) => mod.ArrowUp)),
  dollar: dynamic(() => import("lucide-react").then((mod) => mod.DollarSign)),
  download: dynamic(() => import("lucide-react").then((mod) => mod.Download)),
  trendingUp: dynamic(() => import("lucide-react").then((mod) => mod.TrendingUp)),
  users: dynamic(() => import("lucide-react").then((mod) => mod.Users)),
  
  // Add more icons as needed
  // shoppingCart: dynamic(() => import("lucide-react").then((mod) => mod.ShoppingCart)),
  // etc...
};

export type IconName = keyof typeof Icons;