import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  // Phase 3: Refined button system - institutional, not flashy
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-250 font-inter';
  
  const variants = {
    // Primary: Brown background (authority elements - Apply, Admissions, Enquiry)
    primary: 'bg-heritage-brown text-white hover:bg-heritage-brown-dark active:bg-[#4a2f17] shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]',
    
    // Secondary: Blue border (Learn More, Explore, View Details)
    secondary: 'bg-transparent border-2 border-royal-blue text-royal-blue hover:bg-royal-blue-soft active:bg-[#d0e8f0]',
    
    // Outline: Heritage brown border
    outline: 'bg-transparent border-2 border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white',
  };
  
  const sizes = {
    sm: 'px-6 py-2.5 text-sm rounded-[10px]',
    md: 'px-6 py-3.5 text-base rounded-[10px]',
    lg: 'px-8 py-4 text-base rounded-[10px]',
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
