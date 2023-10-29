import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@/components/gui/Button';
import RippleEffect from '@/components/gui/RippleEffect';
import { Card } from '@/components/card/Card';
import { ContactLinks } from '@/components/ContactLinks';
import { trpc } from '@/helpers/trpc/trpc';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  return (
    <main
      className={`grid h-full w-full grid-cols-1 place-items-center items-center justify-start gap-8 px-24 pb-24 pt-16 font-sans`}
    >
      <section className="container prose flex h-96 min-h-fit flex-col items-center justify-center gap-6 rounded-xl border-2 px-12 py-8 shadow-lg shadow-blue-800/50 transition-all duration-700 delay-200 hover:scale-105 hover:border-4 hover:shadow-2xl hover:shadow-blue-800/50 hover:delay-0 prose-h1:mb-1 lg:max-w-3xl">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="flex flex-row text-center font-display">
            Hello, I&apos;m Ryan
          </h1>
          <p className="overflow-hidden text-ellipsis text-center font-sans text-lg font-medium md:w-96 lg:w-[26rem]">
            I&apos;m a computer science student who&apos;s passionate about
            programming, computer graphics, physics, and making cool stuff.
          </p>
        </div>
        <div className="flex h-fit w-full flex-row items-center justify-center gap-8">
          <Button
            variant={'default'}
            className="inline-flex items-center justify-center"
            asChild
          >
            <Link href={'/projects'} className="no-underline">
              My Projects
            </Link>

            {/* <RippleEffect /> */}
          </Button>
        </div>
      </section>

      <div className="container mx-auto mb-32 flex w-fit min-w-fit justify-between gap-8  border-2 border-transparent text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card href={'/projects'} heading="Projects" description="" />

        {/* <Card href={'/experiments'} heading="Experiments" description="" /> */}

        <Card href={'/skills'} heading="Skills" description="" />
      </div>

      <ContactLinks />
    </main>
  );
}
