import { type URL } from "url";
import { Button } from "../ui/button";
import Link from "next/link";

type HeroCTAProps = {
  children: string;
  href: string | URL;
}
export default function HeroCTA(props: HeroCTAProps) {

  return(
    <Link href={props.href} >
      <Button >{props.children}</Button>
    </Link>

  )
}
