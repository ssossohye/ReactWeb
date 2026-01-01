import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function InfoBox({ title, subTitle, content, children, className }) {
  const css = {
    article: tw`mb-14 w-full text-left`,
    strong: tw`block font-orbitron text-dark/40`,
    h1: tw`font-orbitron text-2xl font-semibold text-dark/80`,
    line: tw`mb-6 after:inline-block after:h-px after:w-14 after:bg-dark/60`,
    p: tw`break-all whitespace-pre-line text-dark/60`
  };

  return (
    <article className={twMerge(css.article, className)}>
      {subTitle && <strong className={css.strong}>{subTitle}</strong>}
      <h1 className={css.h1}>{title}</h1>
      <div className={css.line}></div>
      {content && <p className={css.p}>{content}</p>}
      {children}
    </article>
  );
}
