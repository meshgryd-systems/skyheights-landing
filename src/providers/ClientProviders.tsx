'use client';

import { useEffect, useState } from 'react';
import StoreProvider from './StoreProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <StoreProvider>{children}</StoreProvider>;
}
