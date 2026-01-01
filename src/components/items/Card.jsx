import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";
import Pic from "./Pic";
import { Link } from "react-router-dom";

export default function Card({ className, title, content, date, imgSrc, url = "#", thumbShadow = true, btn = false, tag = "article" }) {
  const css = {
    div: tw`w-full pb-5 break-all`,
    pic: tw`mb-6 block h-[12vmax] w-full max-lg:mb-5 max-lg:h-[17vmin] max-md:mb-4 max-md:h-[36vmin]`,
    h1: tw`mb-2 font-raleway text-lg font-semibold text-dark/80`,
    p: tw`mb-4 text-xs text-dark/60`,
    span: tw`block font-orbitron text-xs text-point`,
    btn: tw`btn py-1.2 rounded-xs px-5 text-xs opacity-80`
  };

  const Tag = tag;

  return (
    <Tag className={twMerge(css.div, className)}>
      {imgSrc && <Pic className={css.pic} src={imgSrc} url={url} h_auto={false} shadow={thumbShadow} />}
      {title && <h1 className={css.h1}>{title.length > 40 ? title.slice(0, 40) + "..." : title}</h1>}
      {content && <p className={css.p}>{content.length > 200 ? content.slice(0, 40) + "..." : content}</p>}
      {date && <span className={css.span}>{date}</span>}
      {btn && (
        <Link to={url} className={css.btn}>
          View Detail
        </Link>
      )}
    </Tag>
  );
}
