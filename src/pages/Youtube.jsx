import { tw } from "../globals";
import Layout from "../components/wrapper/Layout";
import { useEffect, useState } from "react";
import Spinner from "../components/items/Spinner";
import GridList from "../components/wrapper/GridList";
import Card from "../components/items/Card";

export default function Youtube() {
  const css = {
    card: tw`border-b border-dark/30 max-md:rounded-lg max-md:border-0 max-md:bg-white/20 max-md:p-6 max-md:shadow-lg`
  };

  const [youtube, setYoutube] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYoutube = async () => {
      try {
        const base_url = "https://www.googleapis.com/youtube/v3/playlistItems";
        const key = import.meta.env.VITE_YOUTUBE_KEY;
        const pid = "PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu";
        const num = 10;
        const req_url = `${base_url}?key=${key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
        const res = await fetch(req_url);
        if (!res.ok) throw new Error("유튜브 데이터 응답이 실패했습니다.");

        const data = await res.json();
        setYoutube(data.items);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchYoutube();
  }, []);

  return (
    <Layout title="youtube">
      {loading && <Spinner />}
      <GridList data={youtube} tags="section>div">
        {el => (
          <Card
            className={css.card}
            imgSrc={el.snippet.thumbnails.standard.url}
            title={el.snippet.title}
            content={el.snippet.description}
            date={el.snippet.publishedAt.split("T")[0]}
            thumbShadow={true}
            url={`/youtube/${el.id}`}
          />
        )}
      </GridList>
    </Layout>
  );
}
