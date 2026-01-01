import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function Slogan({ className }) {
  const css = {
    arti: tw`relative w-6/10 text-center max-xl:w-8/10 max-xl:-translate-y-20`,
    h2: tw`font-raleway text-7xl font-extrabold max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl`,
    div: tw`mt-5`
  };

  return (
    <article className={twMerge(css.arti, className)}>
      <h2 className={css.h2}>LEADING INNOVATOR</h2>
      <h2 className={css.h2}>UI/UX DEVELOPER</h2>

      <div className={css.div}>
        <p>Join us on a journey of digital transformation</p>
        <p>We pride ourselves on our commitment to quality and innovation</p>
      </div>
    </article>
  );
}
