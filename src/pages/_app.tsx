import SiteLayout from '@/components/layout/site-layout/SiteLayout';
import Providers from '@/components/providers/providers';
import { trpc } from '@/helpers/trpc/trpc';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { AppType } from 'next/app';

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Providers>
  );
};

export default trpc.withTRPC(App);
