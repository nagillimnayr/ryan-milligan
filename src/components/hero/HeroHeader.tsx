import { cn } from "@/lib/utils";
import { orbitron } from "@/lib/fonts";

type HeroHeaderProps = {
  children: string;
  className?: string;
}
export default function HeroHeader(props: HeroHeaderProps) {

  return(
    <header className={cn(props.className, 'flex flex-row font-display')}>
    <h1 className="text-5xl font-bold">
      {props.children}
    </h1>
    </header>
  )
}
