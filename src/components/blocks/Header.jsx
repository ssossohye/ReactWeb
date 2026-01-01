import { tw } from "../../globals";
import Logo from "../items/Logo";
import Gnb from "../items/Gnb";
import Sns from "../items/Sns";
import ToggleTheme from "../items/ToggleTheme";
import { useEffect, useState } from "react";
import ToggleMenu from "../items/ToggleMenu";
import GnbMobile from "../items/GnbMobile";

export default function Header() {
  const css = {
    header: tw`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[10vw] py-5 shadow-sm shadow-dark/10 backdrop-blur-md`,
    nav: tw`flex items-center gap-10`,
    div: tw`flex gap-30 max-xl:hidden`
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={css.header}>
        <Logo />

        <nav className={css.nav}>
          <div className={css.div}>
            <Gnb />
            <Sns />
          </div>

          <ToggleTheme />
          <ToggleMenu open={open} setOpen={setOpen} />
        </nav>
      </header>

      <GnbMobile open={open} />
    </>
  );
}
