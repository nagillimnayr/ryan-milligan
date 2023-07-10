import { Button } from '@/components/gui/Button';
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

                    <Button
                        variant={'secondary'}
                        className="w-32 border-b-4 shadow"
                    >
                        Button
                    </Button>
                </section>
            </div>
        </section>
    );
}
