import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function Spinner({ className }) {
  const css = {
    div: tw`flex w-full justify-center`,
    span: tw`inline-block size-10 animate-spin rounded-full border-3 border-point/70 border-t-transparent`
  };

  return (
    <div className={twMerge(css.div, className)}>
      <span className={css.span}></span>
    </div>
  );
}
