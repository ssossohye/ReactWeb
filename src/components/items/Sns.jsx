import { FaFacebookSquare, FaEnvelope, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function Sns({ className }) {
  const sns = [
    { ico: FaYoutube, path: "/youtube" },
    { ico: FaFacebookSquare, path: "/facebook" },
    { ico: FaEnvelope, path: "/mail" }
  ];

  const css = {
    span: tw`flex gap-4 text-base opacity-70`
  };

  return (
    <span className={twMerge(css.span, className)}>
      {sns.map((el, idx) => {
        return (
          <Link to={el.path} key={idx}>
            <el.ico />
          </Link>
        );
      })}
    </span>
  );
}
