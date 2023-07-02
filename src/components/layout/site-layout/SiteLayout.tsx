import { ThemeProvider } from "@/components/providers/theme-provider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Providers from "@/components/providers/providers";

type SiteLayoutProps = {
  children: React.ReactNode;
}
export default function SiteLayout({children}: SiteLayoutProps) {

  return(
  <html suppressHydrationWarning>
      <body>
    <Providers>
      <SiteHeader/>
      {children}
      <SiteFooter/>
    </Providers>
    </body>
    </html>
  )
}
