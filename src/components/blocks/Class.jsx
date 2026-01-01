import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";
import noticeData from "../../assets/data/noticeData.json";
import classInfo from "../../assets/data/classInfo.json";
import InfoBox from "../wrapper/InfoBox";
import Table from "../items/Table";

export default function Class({ className }) {
  const css = {
    sec: tw`flex w-full flex-wrap justify-between py-20`,
    intro: tw`w-3/10 max-lg:mb-10 max-lg:w-full`,
    table: tw`w-6/10 max-lg:w-full`
  };

  return (
    <section className={twMerge(css.sec, className)}>
      <InfoBox title={classInfo.title} content={classInfo.content} className={css.intro} />
      <Table data={noticeData} className={css.table} />
    </section>
  );
}
