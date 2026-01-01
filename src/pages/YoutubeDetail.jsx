import { useParams } from "react-router-dom";
import { tw } from "../globals";
import Layout from "../components/wrapper/Layout";
import { useEffect, useState } from "react";

export default function YoutubeDetail() {
  const css = {
    page_title: tw`[&>h1]:text-[4vmax]`,
    figure: tw`mb-20 h-[70vh] w-full *:size-full`,
    article: tw`w-3/10 max-xl:mb-10 max-xl:w-full`,
    article_h2: tw`mb-5 font-orbitron text-3xl`,
    article_span: tw`font-orbitron text-point`,
    p: tw`overflow-hieedn w-7/10 border-l border-dark/20 pl-14 text-justify break-all whitespace-pre-line text-dark/70 max-xl:w-full max-xl:border-l-0 max-xl:pl-0`
  };

  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async id => {
      const key = import.meta.env.VITE_YOUTUBE_KEY;
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=snippet&id=${id}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("유튜브 상세 데이터 응답에 실패했습니다.");

      const data = await res.json();
      setDetail(data.items[0]);
    };

    fetchDetail(id);
  }, [id]);

  return (
    <Layout title={detail?.snippet.title || ""} className={css.page_title}>
      <figure className={css.figure}>
        <iframe src={`https://www.youtube.com/embed/${detail?.snippet.resourceId.videoId}`} />
      </figure>

      <article className={css.article}>
        <h2 className={css.article_h2}>Description</h2>
        <span className={css.article_span}>{detail?.snippet.publishedAt.split("T")[0]}</span>
      </article>

      <p className={css.p}>{detail?.snippet.description}</p>
    </Layout>
  );
}
