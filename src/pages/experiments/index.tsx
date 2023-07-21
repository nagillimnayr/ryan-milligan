import { Button } from '@/components/gui/Button';
import Head from 'next/head';

const ExperimentsPage = () => {
  return (
    <>
      <Head>
        <title>Experiments</title>
        <meta name="description" content="" />
      </Head>
      <div className="prose mx-auto mt-4 flex w-full flex-col items-center justify-start font-sans text-foreground prose-headings:text-center prose-headings:text-foreground">
        <h1>Experiments</h1>
        <div className="flex min-h-fit w-full flex-col items-center justify-start rounded-lg border p-6">
          <section className="flex h-fit min-h-fit w-fit min-w-fit flex-col  items-center  justify-center rounded-md border bg-muted p-8 ">
            <header className="w-full p-2">
              <h3 className="my-0">Ripple Animation</h3>
            </header>
            <Button>Button!</Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ExperimentsPage;
