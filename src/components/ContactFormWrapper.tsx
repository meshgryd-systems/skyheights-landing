'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
  loading: () => (
    <div className="space-y-6">
      <div className="animate-pulse">
        <div className="h-10 bg-light-grey rounded mb-4"></div>
        <div className="h-10 bg-light-grey rounded mb-4"></div>
        <div className="h-32 bg-light-grey rounded mb-4"></div>
        <div className="h-12 bg-light-grey rounded w-32"></div>
      </div>
    </div>
  )
});

export default ContactForm;
