import { cn } from '@/lib/cn';
import { orbitron } from '@/lib/fonts';

type HeroHeaderProps = {
    children: string;
    className?: string;
};
export default function HeroHeader(props: HeroHeaderProps) {
    return (
        <header
            className={cn(
                props.className,
                'flex flex-row text-center font-display'
            )}
        >
            <h1 className="text-5xl font-bold">{props.children}</h1>
        </header>
    );
}
