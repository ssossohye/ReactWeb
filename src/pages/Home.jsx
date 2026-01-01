import QuickNav from "../components/blocks/QuickNav";
import Slogan from "../components/blocks/Slogan";
import { tw } from "../globals";

export default function Home() {
  const css = {
    main: tw`relative flex h-screen w-full flex-wrap items-center justify-center overflow-hidden bg-light`,
    vid: tw`absolute top-0 left-0 size-full scale-110 object-cover opacity-60 saturate-50 dark:opacity-50`
  };

  return (
    <main className={css.main}>
      <video className={css.vid} src="./vidBg.mp4" loop muted autoPlay />
      <Slogan />
      <QuickNav />
    </main>
  );
}
