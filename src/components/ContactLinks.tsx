import Link from 'next/link';

const ContactLinks = () => {
  return (
    <div className="grid h-16 w-36 grid-flow-col grid-cols-2 place-items-center rounded-lg">
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
