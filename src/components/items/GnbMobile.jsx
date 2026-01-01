import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";
import Gnb from "./Gnb";
import Sns from "./Sns";

export default function GnbMobile({ open }) {
  const css = {
    frame: tw`glass fixed top-20 right-[5vw] z-50 w-50 rounded-xl px-10 py-5 transition duration-500`,
    // 숨겨질 때 사용할 상태 (나중에 open과 함께 사용)
    off: tw`-translate-y-100 opacity-0`,

    gnb: tw`divider-y block`,

    sns: tw`mt-5`
  };

  return (
    <nav className={twMerge(css.frame, !open ? css.off : "")}>
      <Gnb className={css.gnb} />
      <Sns className={css.sns} />
    </nav>
  );
}
