import { cn } from "@/lib/utils";
import { orbitron } from "@/lib/fonts";

type HeroHeaderProps = {
  children: string;
  className?: string;
}
export default function HeroHeader(props: HeroHeaderProps) {

  return(
    <header className={cn(props.className, 'flex flex-row font-orbitron')}>
    <h1 className="text-5xl text-primary font-bold">
      {props.children}
    </h1>
    </header>
  )
}
