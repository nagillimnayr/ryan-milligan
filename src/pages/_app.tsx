import SiteLayout from '@/components/layout/site-layout/SiteLayout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}
