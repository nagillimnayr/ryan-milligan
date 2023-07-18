import { Button } from '@/components/gui/Button';
import { cn } from '@/lib/cn';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UI Components',
};

export default function Page() {
    return (
        <section className="container prose flex flex-col items-center justify-start p-4 font-sans prose-headings:font-display">
            <header className="container flex flex-col items-center justify-start border-b-2">
                <h1>UI Components</h1>
            </header>
            <div className="container flex flex-col items-center justify-start gap-1 border-2 p-4">
                <section className="container flex w-96 flex-col items-center justify-center gap-4 p-4 text-lg font-semibold">
                    <Button className="w-32">Button</Button>
                    <Button
                        variant={'primary'}
                        className="w-32 outline outline-4 outline-red-500"
                    >
                        Button
                    </Button>
                    <Button variant={'secondary'} className="w-32 ring-4">
                        Button
                    </Button>

                    <Button variant={'secondary'} className="w-32 shadow">
                        Button
                    </Button>
                </section>
                <section className="container flex h-96 w-96 flex-col items-center justify-center gap-4 p-4 text-lg">
                    <div className="container flex flex-col items-center justify-center border p-4 text-center">
                        <span
                            className={cn(
                                'inline-flex bg-clip-text text-3xl font-bold text-transparent',
                                'bg-gradient-to-r from-pink-500 to-violet-500',
                                'hover:animate-pulse',
                                'select-none'
                            )}
                        >
                            Hello World
                        </span>
                    </div>
                </section>
                <section className="container flex h-96 w-96 flex-col items-center justify-center gap-4 p-4 text-lg">
                    <div className="container flex flex-col items-center justify-center border p-4 text-center">
                        <Button
                            className={cn(
                                'w-32 rounded-lg bg-amethyst-500 py-2 shadow',
                                'hover:bg-amethyst-700'
                            )}
                        >
                            Button
                        </Button>
                    </div>
                </section>
            </div>
        </section>
    );
}
