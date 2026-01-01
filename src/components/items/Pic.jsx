import { Link } from "react-router-dom";
import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function Pic({ className, src, url = "#", alt = "alt text", shadow = true, h_auto = true, onClick = null }) {
  const css = {
    figure: tw`relative min-h-30`,
    link: tw`relative z-10 size-full`,
    img: tw`size-full object-cover`,
    img_shadow: tw`absolute top-2 left-2 size-full object-cover blur-md dark:opacity-20`
  };

  typeof src !== "string" && console.warn("src(string): 이미지 src는 필수 입력값 입니다.");

  return (
    <figure className={twMerge(css.figure, h_auto ? "h-auto" : "h-full", className)} onClick={onClick}>
      {shadow && <img src="src" className={twMerge(css.img_shadow, h_auto && "h-auto")} />}

      <Link to={url} className={css.link}>
        <img src={src} alt={alt} className={twMerge(css.img, h_auto && "h-auto")} />
      </Link>
    </figure>
  );
}
