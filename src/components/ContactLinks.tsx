import { cn } from '@/helpers/cn';
import Link from 'next/link';
import { type ClassNameValue } from 'tailwind-merge';

type Props = {
  className?: ClassNameValue;
};
const ContactLinks = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'grid h-16 w-36 grid-flow-col grid-cols-2 place-items-center rounded-lg',
        className
      )}
    >
      {/** Github */}
      <Link
        href="https://github.com/nagillimnayr"
        className="aspect-square h-full overflow-hidden rounded-full transition-transform duration-300 hover:scale-110"
      >
        <span className="icon-[mdi--github] h-full w-full rounded-full transition-all duration-300 hover:text-blue-500" />
      </Link>
      {/** LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/ryan-milligan-837352205/"
        className="aspect-square h-full overflow-hidden rounded-full transition-transform duration-300 hover:scale-110 "
      >
        <span className="icon-[mdi--linkedin] h-full w-full rounded-full transition-all duration-300 hover:text-blue-500" />
      </Link>
    </div>
  );
};

export { ContactLinks };
