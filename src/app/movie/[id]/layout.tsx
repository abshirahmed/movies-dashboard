import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
}
