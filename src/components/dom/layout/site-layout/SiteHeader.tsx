import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import Navbar from '@/components/dom/layout/site-layout/navigation/NavBar';
import { ContactLinks } from '@/components/dom/ContactLinks';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-20 flex-row items-center justify-start border-b-2 border-b-border bg-background px-8">
      <Link
        href={'/'}
        className="flex h-fit w-fit flex-row items-center justify-start gap-4"
      >
        <h2 className="ml-8 font-orbitron text-3xl font-extrabold">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text transition-colors duration-300 hover:text-transparent">
            Ryan Milligan
          </span>
        </h2>
      </Link>

      {/* <MainNav /> */}
      <Navbar />

      <ContactLinks className="ml-auto h-8 w-20" />

      <ThemeSwitch className="ml-auto mr-4" />
    </header>
  );
}
