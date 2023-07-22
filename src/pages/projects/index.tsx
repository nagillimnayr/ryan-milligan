import Head from 'next/head';
import Image from 'next/image';
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
        <div className="grid w-full grid-cols-2 grid-rows-1 place-items-center  p-6">
          <section className="flex h-80 w-60 flex-col items-center justify-start rounded-md border-2 bg-gray-200 p-2 transition-all duration-500 hover:scale-110 dark:bg-slate-700">
            <header>
              <h3 className="text-lg font-medium ">Astronomia Nova</h3>
            </header>
            <div className="relative aspect-square w-full overflow-hidden rounded-md border">
              <Image
                src={'/images/astronomia-nova.png'}
                alt="Error loading image..."
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <a
              href={'https://github.com/nagillimnayr/astronomia-nova'}
              className="text-sm hover:text-blue-500"
            >
              https://github.com/
              <wbr />
              nagillimnayr/
              <wbr />
              astronomia
              <wbr />
              -nova
            </a>
          </section>
          <section className="flex h-80 w-60 flex-col items-center justify-start rounded-md border-2 bg-gray-200 p-2 transition-all duration-500 hover:scale-110 dark:bg-slate-700">
            <header>
              <h3 className="text-lg font-medium ">Foot-pedal Solitaire</h3>
            </header>
            <div className="relative aspect-square w-full overflow-hidden rounded-md border">
              <Image
                src={'/images/solitaire.png'}
                alt="Error loading image..."
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <a
              href={'https://github.com/nagillimnayr/solitaire-footpedal'}
              className="whitespace-pre-wrap text-sm hover:text-blue-500"
            >
              https://github.com/
              <wbr />
              nagillimnayr/
              <wbr />
              solitaire
              <wbr />
              -footpedal
            </a>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
