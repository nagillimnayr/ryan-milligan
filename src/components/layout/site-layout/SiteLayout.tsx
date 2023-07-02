import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Providers from "@/components/providers/providers";

type SiteLayoutProps = {
  children: React.ReactNode;
}
export default function SiteLayout({children}: SiteLayoutProps) {

  return(
    <Providers>
      <SiteHeader/>
      {children}
      <SiteFooter/>
    </Providers>
  )
}
