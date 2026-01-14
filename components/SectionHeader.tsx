interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showDivider?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  showDivider = true
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex flex-col items-center ${
        centered ? "text-center" : ""
      }`}
    >
      <h2 className="text-4xl md:text-[44px] font-playfair font-bold text-deep-navy mb-4 leading-tight">
        {title}
      </h2>
      {showDivider && (
        <div
          className={`w-[60px] h-[3px] bg-heritage-brown mb-6 ${
            centered ? "mx-auto" : ""
          }`}
        ></div>
      )}
      {subtitle && (
        <p className="text-lg md:text-xl text-center text-text-grey mx-auto max-w-3xl leading-relaxed font-inter">
          {subtitle}
        </p>
      )}
    </div>
  );
}
