import { cn } from '@/lib/cn';
import NavMenuLink from './NavMenuLink';
import { type ClassNameValue } from 'tailwind-merge';

const mainLinks = [
  { href: '/projects', label: 'Projects' },
  // { href: '/experiments', label: 'Experiments' },
  { href: '/skills', label: 'Skills' },
];

// const otherLinks = [
//   { href: '/other', label: 'Other' },
//   { href: '/misc', label: 'Misc' },
//   { href: '/etc', label: 'Etc.' },
// ];

const btnStyle = `rounded-md transition-all duration-300 border-0 py-2 px-4 font-sans font-semibold h-full hover:bg-foreground/10 ui-open:bg-foreground/10`;

type Props = {
  className?: ClassNameValue;
};
const Navbar = ({ className }: Props) => {
  return (
    <nav
      className={cn(
        'relative ml-auto flex h-fit w-fit flex-row items-center justify-start gap-0 rounded-md border-2 p-1',
        className
      )}
    >
      {mainLinks.map(({ href, label }) => {
        return (
          <NavMenuLink key={href} href={href} className={btnStyle}>
            {label}
          </NavMenuLink>
        );
      })}

      {/* <NavDropdownMenu links={otherLinks} className={btnStyle}>
        <div className="inline-flex gap-3">Other</div>
      </NavDropdownMenu> */}
    </nav>
  );
};

export default Navbar;
