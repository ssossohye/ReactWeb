import { useEffect, useState } from "react";
import Layout from "../components/wrapper/Layout";
import Masonry from "../components/wrapper/Masonry";
import Spinner from "../components/items/Spinner";
import Pic from "../components/items/Pic";
import Modal from "../components/wrapper/Modal";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = idx => {
    setOpen(true);
    setIndex(idx);
  };

  useEffect(() => {
    const api_key = import.meta.env.VITE_UNSPLASH_KEY;
    const req_url = `https://api.unsplash.com/photos/?client_id=${api_key}&per_page=30`;

    const fetchPhotos = async () => {
      try {
        const res = await fetch(req_url);
        if (!res.ok) throw new Error(`Unsplash 요청 실패 : ${req_url}`);

        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Layout title="gallery">
      {loading && <Spinner />}
      <Masonry data={photos}>
        {(photo, idx) => <Pic src={photo.urls.regular} alt={photo.alt_description} onClick={() => handleClick(idx)} />}
      </Masonry>

      <Modal open={open} setOpen={setOpen}>
        <img src={photos[index]?.urls.regular} alt={photos[index]?.alt_description} />
      </Modal>
    </Layout>
  );
}
