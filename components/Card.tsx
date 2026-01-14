import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  icon,
  href,
  className = '',
}: CardProps) {
  // Phase 3: Cards feel solid, not floating - subtle shadow, 14px radius
  const content = (
    <div className={`bg-white rounded-[14px] overflow-hidden border border-divider-grey hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col ${href ? 'cursor-pointer' : ''} ${className}`} style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)' }}>
      {image && (
        <div className="relative h-48 w-full card-image-zoom">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-[14px]"
          />
        </div>
      )}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        {icon && (
          <div className="mb-4 text-royal-blue">
            {icon}
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-playfair font-bold text-deep-navy mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-text-grey font-inter flex-1 leading-relaxed">
          {description}
        </p>
        {href && (
          <div className="mt-4 text-heritage-brown font-medium flex items-center group">
            Learn More
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-250" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
  
  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  
  return content;
}

interface ProgramCardProps {
  level: string;
  ageRange: string;
  description: string;
  features: string[];
  href: string;
}

export function ProgramCard({ level, ageRange, description, features, href }: ProgramCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-[14px] border-2 border-divider-grey hover:border-royal-blue hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] transition-all duration-300 p-8 h-full" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)' }}>
        <div className="mb-4">
          <h3 className="text-2xl md:text-[32px] font-playfair font-bold text-deep-navy mb-2 leading-tight">
            {level}
          </h3>
          <p className="text-royal-blue font-medium text-sm">{ageRange}</p>
        </div>
        <p className="text-text-grey mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-royal-blue mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-deep-navy text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

interface FacilityCardProps {
  name: string;
  description: string;
  image: string;
}

export function FacilityCard({ name, description, image }: FacilityCardProps) {
  return (
    <div className="bg-white rounded-[14px] overflow-hidden hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] transition-shadow duration-300" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)' }}>
      <div className="relative h-64 w-full card-image-zoom">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold text-deep-navy mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-text-grey text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
