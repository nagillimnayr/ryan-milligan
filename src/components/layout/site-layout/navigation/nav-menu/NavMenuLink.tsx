import { cn } from '@/lib/cn';
import type { LinkProps } from '@/components/props/Props';
import Link from 'next/link';
import { Button } from '@/components/gui/Button';

const NavMenuLink = ({ children, className, href }: LinkProps) => {
  return (
    <Button variant={'outline'} className={className} asChild>
      <Link href={href} className={cn('h-full w-full')}>
        {children}
      </Link>
    </Button>
  );
};

export default NavMenuLink;
