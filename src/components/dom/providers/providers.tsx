'use client'
import { ThemeProvider } from "./theme-provider";
import { Analytics } from '@vercel/analytics/react';

type ProviderProps = {
  children: React.ReactNode;
}
export default function Providers({children}: ProviderProps) {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
