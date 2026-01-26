'use client';

import StoreProvider from './StoreProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
