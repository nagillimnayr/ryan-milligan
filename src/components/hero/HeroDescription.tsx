import { cn } from '@/lib/cn';

type HeroDescProps = {
    children: string;
    className?: string;
};
export default function HeroDescription(props: HeroDescProps) {
    return (
        <p
            className={cn(
                props.className,
                'overflow-hidden text-ellipsis text-center md:w-96 lg:w-96'
            )}
        >
            {props.children}
        </p>
    );
}
