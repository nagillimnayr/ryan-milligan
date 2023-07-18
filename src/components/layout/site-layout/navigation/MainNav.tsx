import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavButton from './NavButton';
import { cn } from '@/lib/cn';

const MainNav = () => {
    return (
        <div className={cn(`ml-auto flex h-full flex-row gap-0 font-display`)}>
            <NavButton href="projects" className="px-5" />
            <NavButton href="experiments" className="px-5" />
            <NavButton href="contact" className="px-5" />
        </div>
    );
};

export default MainNav;
