import SiteLayout from '@/components/layout/site-layout/SiteLayout';
import Providers from '@/components/providers/providers';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <SiteLayout>
                <Component {...pageProps} />
            </SiteLayout>
        </Providers>
    );
}
