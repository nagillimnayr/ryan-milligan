import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import MainNav from './navigation/MainNav';
import Navbar from './navigation/nav-menu/NavBar';

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 flex h-20 flex-row items-center justify-start border-b-2 border-b-border bg-background px-8">
            <Link
                href={'/'}
                className="flex h-fit w-fit flex-row items-center justify-start gap-4"
            >
                <div className="inline-flex aspect-square w-10 items-center justify-center border-2 border-border">
                    <div className="icon-[eos-icons--atom-electron]  h-full w-full rounded-full border-2" />
                </div>
                <h2 className="font-orbitron text-3xl font-extrabold">
                    Site Header
                </h2>
            </Link>

            {/* <MainNav /> */}
            <Navbar />
            <ThemeSwitch className="ml-auto mr-4" />
        </header>
    );
}
