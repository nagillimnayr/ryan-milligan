import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Providers from "@/components/providers/providers";
import { cn } from "@/lib/utils";
import { roboto, roboto_condensed, roboto_flex, roboto_mono, roboto_serif, roboto_slab, orbitron, iceland, atkinson_hyperlegible } from '@/lib/fonts';


const fontVariables = [roboto.variable, roboto_condensed.variable, roboto_flex.variable, roboto_mono.variable, roboto_serif.variable, roboto_slab.variable, orbitron.variable, iceland.variable, atkinson_hyperlegible.variable]

type SiteLayoutProps = {
  children: React.ReactNode;
}
export default function SiteLayout({children}: SiteLayoutProps) {

  return(
    <Providers>
    <div className={cn(...fontVariables)}>
      <SiteHeader/>
      {children}
      <SiteFooter/>
    </div>
    </Providers>
  )
}
