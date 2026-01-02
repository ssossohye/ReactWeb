import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";
import { FaPlus } from "react-icons/fa";

export default function FoldingBox({ className, children, title, tag = "article", index, openIndex, setOpenIndex }) {
  const css = {
    article: tw`glass w-full cursor-pointer`,
    h1: tw`flex w-full items-center justify-between px-8 py-3 font-raleway text-sm font-semibold`,
    icon: tw`inline-block rotate-0 text-dark/40 transition-all delay-200 duration-400`,
    icon_active: tw`scale-130 rotate-135 text-point/60`,
    div: tw`h-0 w-full overflow-hidden px-8 py-0 transition-all *:opacity-0`,
    div_active: tw`h-auto py-3 *:opacity-100`
  };

  const Tag = tag;
  const isOpen = openIndex === index;

  const handleClick = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <Tag className={twMerge(css.article, className)}>
      <h1 className={css.h1} onClick={handleClick}>
        {title} <FaPlus className={twMerge(css.icon, isOpen && css.icon_active)} />
      </h1>
      <div className={twMerge(css.div, isOpen && css.div_active)}>{children}</div>
    </Tag>
  );
}
