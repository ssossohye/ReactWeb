import { useEffect, useState } from "react";
import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function ToggleTheme({ className }) {
  const css = {
    div: tw`h-4 w-9 cursor-pointer rounded-full border-b border-b-white/50 bg-dark/5 p-0.5 text-[0px] shadow-inner shadow-dark/10`,
    span: tw`inline-block size-3 rounded-full bg-dark/50 transition-all duration-500`
  };

  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark ? document.documentElement.setAttribute("data-mode", "dark") : document.documentElement.removeAttribute("data-mode");
  }, [dark]);

  return (
    <div className={twMerge(css.div, className)} onClick={() => setDark(prev => !prev)}>
      <span className={twMerge(css.span, dark ? "translate-x-0" : "translate-x-5")}></span>
    </div>
  );
}
