import { useEffect, useRef } from "react";
import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function Map({ className, latlng }) {
  const css = {
    figure: tw`min-h-[30vw] w-full bg-dark saturate-30 max-lg:min-h-[70vh] dark:invert`
  };

  const frameRef = useRef(null);

  useEffect(() => {
    if (latlng.length === 0) return console.error("latlng 배열의 위도, 경도 값을 필수 전달값입니다.");
    const [lat, lng] = latlng;
    let cleanUp;

    const initMap = () => {
      const { kakao } = window;
      const position = new kakao.maps.LatLng(lat, lng);
      const map = new kakao.maps.Map(frameRef.current, { center: position, level: 1 });
      const marker = new kakao.maps.Marker({ position });
      const mapTypeControl = new kakao.maps.MapTypeControl();
      const zoomControl = new kakao.maps.ZoomControl();

      marker.setMap(map);
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      map.setZoomable(false);

      const handleResize = () => map.setCenter(position);
      window.addEventListener("resize", handleResize);
      cleanUp = () => window.removeEventListener("resize", handleResize);
    };

    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_KEY}&autoload=false`;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => initMap());
      };
      return () => cleanUp && cleanUp();
    }
  }, [latlng]);

  return <figure className={twMerge(css.figure, className)} ref={frameRef}></figure>;
}
