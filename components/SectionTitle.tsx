interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-deep-navy mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-grey max-w-3xl font-inter">
          {subtitle}
        </p>
      )}
    </div>
  );
}
