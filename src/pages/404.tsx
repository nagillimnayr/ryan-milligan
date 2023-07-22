import { Button } from '@/components/gui/Button';
import Head from 'next/head';
import Link from 'next/link';

const Error404Page = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <section className="flex h-full items-center p-16 font-sans dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-9xl font-extrabold dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              {"Sorry, we couldn't find this page."}
            </p>

            <Button className="my-2 inline-flex items-center justify-center rounded px-4 py-3 font-semibold dark:bg-violet-400 dark:text-gray-900">
              <Link
                rel="noopener noreferrer"
                href="/"
                className="h-full w-full text-center"
              >
                Back to homepage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404Page;
