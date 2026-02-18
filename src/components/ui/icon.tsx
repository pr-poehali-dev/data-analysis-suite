import { icons, LucideProps } from "lucide-react";
import React from "react";

interface IconProps {
  name: string;
  fallback?: string;
  size?: number;
  className?: string;
  color?: string;
}

type IconComponent = React.ComponentType<LucideProps>;

const Icon = ({ name, fallback = "CircleAlert", size = 24, className, color }: IconProps) => {
  const iconMap = icons as Record<string, IconComponent>;
  const LucideIcon = iconMap[name] || iconMap[fallback];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} color={color} />;
};

export default Icon;