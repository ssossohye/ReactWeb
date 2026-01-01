import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";
import quickNavData from "../../assets/data/quickNavData.json";
import FoldingBox from "../wrapper/FoldingBox";
import Card from "../items/Card";

export default function QuickNav({ className }) {
  const css = {
    nav: tw`absolute bottom-14 z-20 grid w-8/10 grid-cols-4 items-end gap-10 max-xl:grid-cols-2 max-md:grid-cols-1 max-md:gap-3`
  };

  return (
    <nav className={twMerge(css.nav, className)}>
      {quickNavData.map((data, i) => {
        return (
          <FoldingBox key={i} title={data.title}>
            <Card imgSrc={`/${data.pic}`} url={`/${data.title.toLowerCase()}`} content={data.content} className="[&>figure]:h-30" btn />
          </FoldingBox>
        );
      })}
    </nav>
  );
}
