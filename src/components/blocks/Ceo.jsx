import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";
import ceoInfo from "../../assets/data/ceoInfo.json";
import InfoBox from "../wrapper/InfoBox";
import Pic from "../items/Pic";

export default function Ceo({ className }) {
  const css = {
    sec: tw`mb-10 flex w-full flex-wrap justify-between`,
    ceo: tw`w-6/10 pt-40 pr-40 text-right max-xl:pr-20 max-lg:pt-0 max-sm:w-full max-sm:pr-0 max-sm:text-left`,
    pic: tw`h-[37vmax] w-4/10 max-sm:h-[60vh] max-sm:w-full`
  };

  return (
    <section className={twMerge(css.sec, className)}>
      <InfoBox title={ceoInfo.title} subTitle={ceoInfo.subTitle} content={ceoInfo.content} className={css.ceo} />
      <Pic src="./david.jpg" h_auto={false} className={css.pic} />
    </section>
  );
}
