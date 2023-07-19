import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@/components/gui/Button';
import RippleEffect from '@/components/gui/RippleEffect';
import { Card } from '@/components/card/Card';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            className={`flex h-full flex-col items-center justify-start gap-8 px-24 pb-24 pt-10 font-sans`}
        >
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started by editing&nbsp;
                    <code className="font-mono font-bold">
                        src/pages/index.tsx
                    </code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>
            <section className="container prose flex h-96 min-h-fit flex-col items-center justify-center gap-6 rounded-xl border-2 px-12 py-8 shadow-lg shadow-blue-800/50 transition-all duration-700 delay-200 hover:scale-105 hover:border-4 hover:shadow-2xl hover:shadow-blue-800/50 hover:delay-0 prose-h1:mb-1 lg:max-w-3xl">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="flex flex-row text-center font-display">
                        Hello World!
                    </h1>
                    <p className="overflow-hidden text-ellipsis text-center md:w-96 lg:w-96">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="flex h-fit w-full flex-row items-center justify-center gap-8">
                    <Button variant={'default'}>
                        Hello World
                        <RippleEffect />
                    </Button>
                </div>
            </section>

            <div className="container mx-auto mb-32 flex  w-[768px] justify-between gap-8  border-2 border-transparent text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <Card href={'/projects'} heading="Projects" description="" />

                <Card
                    href={'/experiments'}
                    heading="Experiments"
                    description=""
                />

                <Card href={'/other'} heading="Other" description="" />
            </div>
        </main>
    );
}
