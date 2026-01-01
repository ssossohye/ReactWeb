import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function Modal({ className, children, open, setOpen }) {
  const css = {
    aside: tw`fixed top-0 left-0 z-50 size-full bg-light/50 p-[5vw] backdrop-blur-xl`,
    div: tw`relative size-full *:size-full *:object-contain`,
    span: tw`absolute top-5 right-10 cursor-pointer font-orbitron`
  };

  return (
    <>
      {open && (
        <aside className={twMerge(css.aside, className)}>
          <div className={css.div}>{children}</div>
          <span className={css.span} onClick={() => setOpen(false)}>
            close
          </span>
        </aside>
      )}
    </>
  );
}
