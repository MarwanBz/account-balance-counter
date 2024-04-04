import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Counter } from "@/components/counter";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>  عزيزي العميل </h1>
        <div >
          <h1 className={title({ color: "violet" })}>مروان&nbsp;</h1>
        </div>
        <br />
        <h1 className={title()}>
          رصيدك المتبقي 
					<span >3040ميقا بايت</span>
        </h1>
        <Counter />
      </div>

    </section>
  );
}
