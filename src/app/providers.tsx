'use client';

import { ThemeProvider } from 'next-themes';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId="G-ETKME1VC2Y" trackPageViews />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
