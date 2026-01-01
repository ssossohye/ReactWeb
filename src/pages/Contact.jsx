import { tw } from "../globals";
import infoData from "../assets/data/contactData.json";
import mapData from "../assets/data/mapData.json";
import MailForm from "../components/items/MailForm";
import Map from "../components/items/Map";
import InfoBox from "../components/wrapper/InfoBox";
import Layout from "../components/wrapper/Layout";

export default function Contact() {
  const css = {
    section1: tw`my-24 flex w-full flex-wrap justify-between max-lg:mb-20`,
    mailForm: tw`w-1/2 border-r border-dark/30 pr-[8vw] max-lg:w-full max-lg:border-none max-lg:pr-0`,
    introBox: tw`w-1/2 pl-[8vw] max-lg:mt-20 max-lg:w-full max-lg:pl-0`,
    section2: tw`w-full`
  };
  return (
    <Layout title="contact">
      <section className={css.section1}>
        <InfoBox title="Send E-Mail" className={css.mailForm}>
          <MailForm />
        </InfoBox>
        <InfoBox className={css.introBox} title={infoData.title} content={infoData.content} />
      </section>

      <section className={css.section2}>
        <InfoBox title="Location">
          <Map latlng={mapData.latlng} />
        </InfoBox>
      </section>
    </Layout>
  );
}
