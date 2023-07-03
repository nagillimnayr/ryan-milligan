import Link from "next/link";


export default function SiteHeader() {
  return(
      <header className="border-b-border border-b-2 h-20 flex flex-row items-center justify-start px-8 sticky top-0 z-50 bg-background">
        <Link href={'/'} className="flex flex-row w-fit h-fit items-center justify-start gap-4">
          <div className="border-2 border-border aspect-square w-10">
            
          </div>
          <h2 className="text-3xl font-extrabold font-orbitron">Site Header</h2>
        </Link>
      </header>
  )
}
