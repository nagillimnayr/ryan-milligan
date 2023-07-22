import Head from 'next/head';
import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="" />
      </Head>
      <section className="container prose flex w-full flex-col items-center justify-start font-sans prose-headings:my-0">
        <header className="my-8 flex w-fit items-center justify-center p-2">
          <h2 className="text-4xl">Projects</h2>
        </header>
        <div className="grid w-full grid-cols-2 grid-rows-1 place-items-center border p-6">
          <section className="flex h-60 w-48 flex-col items-center justify-start rounded-md border-2 p-2 transition-all hover:scale-110">
            <header>
              <h3 className="text-lg font-medium ">Astronomia Nova</h3>
            </header>
            <div className="aspect-square w-full rounded-md border"></div>
            <a
              href={'https://astronomia-nova.vercel.app'}
              className="text-sm hover:text-blue-500"
            >
              https://astronomia-nova.vercel.app
            </a>
          </section>
          <section className="flex h-60 w-48 flex-col items-center justify-start rounded-md border-2 p-2 transition-all hover:scale-110">
            <header>
              <h3 className="text-lg font-medium ">Foot-pedal Solitaire</h3>
            </header>
            <div className="aspect-square w-full rounded-md border"></div>
            <a
              href={'https://github.com/nagillimnayr/solitaire-footpedal'}
              className="text-sm hover:text-blue-500"
            >
              https://github.com/nagillimnayr/solitaire-footpedal
            </a>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
