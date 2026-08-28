import { ArrowRight } from "lucide-react";

export default function PrimaryButton({ children, onClick, disabled, className = "" }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-2xl py-3.5 font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
        disabled
          ? "bg-[#EADFC4] text-[#B7A883] cursor-not-allowed shadow-none"
          : "bg-gradient-navy text-cream cursor-pointer shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
      } ${className}`}
    >
      {children}
      {!disabled && <ArrowRight size={16} />}
    </button>
  );
}
