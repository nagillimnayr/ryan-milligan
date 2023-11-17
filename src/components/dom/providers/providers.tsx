'use client';
import { MachineProvider } from './machine-provider';
import { ThemeProvider } from './theme-provider';
import { Analytics } from '@vercel/analytics/react';

type ProviderProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProviderProps) {
  return (
    <MachineProvider>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        <Analytics />
      </ThemeProvider>
    </MachineProvider>
  );
}
