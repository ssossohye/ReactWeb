import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";
import instructorData from "../../assets/data/instructorData.json";
import instructorInfo from "../../assets/data/instructorInfo.json";
import Table from "../items/Table";
import InfoBox from "../wrapper/InfoBox";

export default function Instructor({ className }) {
  const css = {
    sec: tw`flex w-full flex-wrap justify-between py-20`,
    intro: tw`w-3/10 max-lg:mb-10 max-lg:w-full`,
    table_box: tw`flex w-6/10 flex-wrap justify-between max-lg:w-full`,
    table: tw`w-[46%] max-md:mb-10 max-md:w-full`
  };

  return (
    <section className={twMerge(css.sec, className)}>
      <InfoBox title={instructorInfo.title} content={instructorInfo.content} className={css.intro} />
      <article className={css.table_box}>
        {instructorData.map((data, i) => {
          return <Table key={i} data={data} className={css.table} direction="vertical" />;
        })}
      </article>
    </section>
  );
}
