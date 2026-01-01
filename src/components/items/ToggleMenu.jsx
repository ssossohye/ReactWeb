import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function ToggleMenu({ className, open, setOpen }) {
  const css = {
    div: tw`relative hidden size-6 cursor-pointer max-xl:block`,
    span: tw`absolute top-1/2 block h-0.5 w-full bg-dark transition duration-500`
  };

  return (
    <div className={twMerge(css.div, className)} onClick={() => setOpen(!open)}>
      <span className={twMerge(css.span, open ? "translate-y-0 rotate-135" : "-translate-y-1.5")}></span>
      <span className={twMerge(css.span, open ? "translate-x-5 opacity-0" : "translate-x-0 opacity-100")}></span>
      <span className={twMerge(css.span, open ? "translate-y-0 -rotate-135" : "translate-y-1.5")}></span>
    </div>
  );
}
