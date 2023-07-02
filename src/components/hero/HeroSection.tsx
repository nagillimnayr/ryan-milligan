import { Button } from "../ui/button";
// import HeroCTA from "./HeroCTA";
// import HeroDescription from "./HeroDescription";
// import HeroHeader from './HeroHeader';

type HeroProps = {
  children: React.ReactNode;
  header: string;
}
export default function HeroSection(props: HeroProps) {

  return(
    <section>
      <header>
        <h1 className="text-5xl">{props.header}</h1>
      </header>
      <p>{props.children}</p>

      <div>
      </div>

    </section>
  )
}
