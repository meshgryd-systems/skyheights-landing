interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'cream';
  id?: string;
}

export default function SectionContainer({
  children,
  className = '',
  background = 'white',
  id,
}: SectionContainerProps) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-light-grey',
    cream: 'bg-cream',
  };
  
  // Phase 3: Max width 1240px, generous margins (luxury = space)
  return (
    <section id={id} className={`${backgrounds[background]} ${className}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-[80px]">
        {children}
      </div>
    </section>
  );
}
