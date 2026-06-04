import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button"
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heritage-brown focus-visible:ring-offset-2 transition-[color,background-color,border-color,box-shadow,transform] duration-250";

  const variants = {
    primary:
      "bg-heritage-brown text-white hover:bg-heritage-brown-dark hover:-translate-y-[1px] hover:shadow-[0_4px_12px_0_rgba(122,78,45,0.35)] active:bg-[#4a2f17] active:translate-y-0 active:scale-[0.98] shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]",
    secondary:
      "bg-transparent border-2 border-royal-blue text-royal-blue hover:bg-royal-blue-soft hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] active:bg-[#d0e8f0]",
    outline:
      "bg-transparent border-2 border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm rounded-[10px] min-h-[44px]",
    md: "px-6 py-3.5 text-base rounded-[10px] min-h-[44px]",
    lg: "px-8 py-4 text-base rounded-[10px] min-h-[44px]"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
