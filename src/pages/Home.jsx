import QuickNav from "../components/blocks/QuickNav";
import Slogan from "../components/blocks/Slogan";
import { tw } from "../globals";

export default function Home() {
  const css = {
    main: tw`relative z-0 flex h-screen w-full flex-wrap items-center justify-center overflow-hidden bg-light`,
    vid: tw`pointer-events-none absolute top-0 left-0 -z-10 size-full scale-110 object-cover opacity-60 saturate-50 dark:opacity-50`
  };

  return (
    <main className={css.main}>
      <video className={css.vid} src="./vidBg.mp4" loop muted autoPlay playsInline preload="auto" />
      <Slogan />
      <QuickNav />
    </main>
  );
}
