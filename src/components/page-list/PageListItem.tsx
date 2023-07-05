import { PageData } from '@/lib/mdx/getPageData';
import { format, parse as parseDateString } from 'date-fns';
import Link from 'next/link';

type Props = {
    pageData: PageData;
    href: string;
};
const PageListItem = ({ pageData, href }: Props) => {
    const { slug, title, date } = pageData;
    return (
        <li key={slug} className="flex flex-col justify-start">
            <Link href={href}>
                <h4>{title}</h4>
            </Link>
            <time>{format(new Date(date), 'PPpp')}</time>
        </li>
    );
};

export default PageListItem;
