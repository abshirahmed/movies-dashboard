import './globals.css';
import { ReactNode } from 'react';
import { AnalyticsWrapper } from '@/app/components/analytics';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
      <AnalyticsWrapper />
    </html>
  );
}
