import { cn } from "@/lib/utils";


type HeroDescProps = {
  children: string;
  className?: string;
}
export default function HeroDescription(props: HeroDescProps) {

  return(
    <p className={cn(props.className, 'text-primary')}>
      {props.children}
    </p>
  )
}
