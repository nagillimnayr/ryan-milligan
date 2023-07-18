import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/hero/HeroSection';
import HeroDescription from '@/components/hero/HeroDescription';
import HeroHeader from '@/components/hero/HeroHeader';
import HeroCTA from '@/components/hero/HeroCTA';
import { Button } from '@/components/ui/button';
import RippleEffect from '@/components/gui/RippleEffect';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-start gap-8 px-24 pb-24 pt-10 font-sans`}
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
            <section className="container flex h-96 min-h-fit flex-col items-center justify-center gap-6 rounded-xl border-2 px-12 py-8 lg:max-w-3xl ">
                <div className="flex flex-col items-center justify-center gap-2">
                    <HeroHeader>Hello World!</HeroHeader>
                    <HeroDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </HeroDescription>
                </div>
                <div className="flex h-fit w-full flex-row items-center justify-center gap-8">
                    <Button variant={'default'}>
                        Hello World
                        <RippleEffect />
                    </Button>
                </div>
            </section>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Docs{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Learn{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Learn about Next.js in an interactive course
                        with&nbsp;quizzes!
                    </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Templates{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Discover and deploy boilerplate example
                        Next.js&nbsp;projects.
                    </p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Deploy{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                    </p>
                </a>
            </div>
        </main>
    );
}
