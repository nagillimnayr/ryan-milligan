import { roboto, roboto_condensed, roboto_flex, roboto_mono, roboto_serif, roboto_slab } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: React.ReactNode;
}
export default function PageLayout({children}: PageLayoutProps) {

  return(
    <div className={cn('w-full h-full flex flex-col justify-start font-roboto')}>
      {children}
    </div>
  )
}
