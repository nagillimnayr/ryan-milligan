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
        <div className="container flex min-h-fit w-96 flex-col items-center justify-start rounded-lg  p-6">
          {/** Ripple Animation */}
          <section className="flex h-fit min-h-fit w-full min-w-fit flex-col  items-center  justify-center rounded-md border bg-slate-700 p-8 ">
            <header className="w-full p-2">
              <h3 className="my-0">Ripple Animation</h3>
            </header>
            <Button>Button!</Button>
          </section>
          <div className="my-4 h-0 w-full border-y" />

          {/** Animated Background */}
          <section className="flex h-fit min-h-fit w-full min-w-fit flex-col  items-center  justify-center rounded-md border bg-slate-700 p-8 ">
            <header className="w-full p-2">
              <h3 className="my-0">Animated Background Gradient</h3>
            </header>

            <div className="bg-anim-diagonal h-48 w-full border-2 bg-gradient-to-br from-sky-500 to-red-500 "></div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ExperimentsPage;
