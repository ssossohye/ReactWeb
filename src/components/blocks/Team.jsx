import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";
import teamInfo from "../../assets/data/teamInfo.json";
import memberData from "../../assets/data/memberData.json";
import memberInfo from "../../assets/data/memberInfo.json";
import InfoBox from "../wrapper/InfoBox";
import GridList from "../wrapper/GridList";
import Card from "../items/Card";

export default function Team({ className }) {
  const css = {
    section: tw`mt-10 flex flex-wrap justify-between`,
    team_info: tw`mb-20 w-7/10 max-md:w-full [&>h1]:text-4xl [&>p]:text-lg`,
    grid: tw`w-6/10 max-lg:w-full`,
    member_info: tw`w-3/10 content-start pt-20 max-lg:mb-20 max-lg:w-full`
  };

  return (
    <section className={twMerge(css.section, className)}>
      <InfoBox title={teamInfo.title} content={teamInfo.content} className={css.team_info} />
      <GridList data={memberData} className={twMerge(css.grid, "[&>li]:mb-0")}>
        {member => <Card imgSrc={`/${member.pic}`} title={member.name} content={member.position} />}
      </GridList>
      <InfoBox title={memberInfo.title} content={memberInfo.content} className={css.member_info} />
    </section>
  );
}
