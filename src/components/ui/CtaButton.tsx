// src/components/ui/CtaButton.tsx
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";

interface CtaButtonProps {
  label?: string;
  variant?: "neon" | "outline";
}

export const CtaButton = ({ label = "Contact Us", variant = "neon" }: CtaButtonProps) => {
  const baseStyles = "relative group inline-flex items-center gap-3 px-8 py-4 font-black uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden";
  
  const variants = {
    neon: "bg-brand-neon text-black shadow-[0_0_20px_rgba(131,214,77,0.3)] hover:shadow-[0_0_40px_rgba(131,214,77,0.5)]",
    outline: "border border-white/20 text-white hover:bg-white/5"
  };

  return (
    <a 
      href={siteConfig.contact.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]}`}
    >
      {/* Liquid hover effect */}
      <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      
      <Phone size={18} fill={variant === "neon" ? "black" : "none"} className="relative z-10" />
      <span className="relative z-10">{label}</span>
    </a>
  );
};