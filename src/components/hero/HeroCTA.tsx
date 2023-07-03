import { type URL } from "url";
import { Button, type ButtonProps } from "../ui/button";
import Link from "next/link";

interface HeroCTAProps extends ButtonProps {
  href: string | URL;
}
export default function HeroCTA(props: HeroCTAProps) {

  return(
    <Button variant={props.variant} className={props.className} onClick={props.onClick}>
      <Link href={props.href} >
        {props.children}
      </Link>
    </Button>

  )
}
