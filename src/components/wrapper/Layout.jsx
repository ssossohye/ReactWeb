import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";
import Breadcrumb from "../items/Breadcrumb";

export default function Layout({ title, children, className }) {
  const css = {
    main: tw`flex flex-wrap justify-between px-[10vw] pt-[20vh] pb-[5vh] max-md:pt-[15vh]`,
    main_h1: tw`font-raleway text-[7vmax] leading-none font-thin tracking-tight after:mt-5 after:mb-8 after:ml-2 after:block after:h-0.5 after:w-18 after:bg-dark after:content-[''] max-md:w-full`,
    div: tw`mt-10 mb-20 flex min-h-[40vh] w-full flex-wrap justify-between`
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className={twMerge(css.main, className)}>
      <h1 className={css.main_h1}>{title.toUpperCase()}</h1>

      {pathname !== "/" && !pathname.includes("youtube/") && <Breadcrumb />}

      <div className={css.div}>{children}</div>
    </main>
  );
}
