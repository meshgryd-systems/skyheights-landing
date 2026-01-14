export default function SchoolSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Skyheights Academy",
    "description": "Private co-educational school in Lugbe, Abuja offering Creche, Nursery, Primary and Secondary education with Nigerian, British, and Montessori curricula.",
    "url": "https://www.skyheightsacademy.com",
    "logo": "https://www.skyheightsacademy.com/favicon.ico",
    "image": "https://www.skyheightsacademy.com/og-image.jpg",
    "telephone": "+234-xxx-xxx-xxxx",
    "email": "info@skyheightsacademy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phase 4, Palmheights Homes, Queen Amudat Giwa Avenue",
      "addressLocality": "Lugbe",
      "addressRegion": "Abuja",
      "postalCode": "900108",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "8.8630",
      "longitude": "7.3589"
    },
    "foundingDate": "2017",
    "priceRange": "$$",
    "currenciesAccepted": "NGN",
    "paymentAccepted": "Cash, Bank Transfer",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    },
    "sameAs": [
      "https://www.facebook.com/skyheightsacademy",
      "https://www.instagram.com/skyheightsacademy",
      "https://www.twitter.com/skyheightsacad"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Abuja"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
