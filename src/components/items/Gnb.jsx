import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function Gnb({ className }) {
  const gnb = ["MEMBERS", "NOTICE", "GALLERY", "YOUTUBE", "CONTACT"];

  const css = {
    ul: tw`flex items-center gap-16 text-sm font-semibold opacity-70 max-xl:gap-12`,
    ul_li: tw`hover:text-point`
  };

  return (
    <ul className={twMerge(css.ul, className)}>
      {gnb.map((el, idx) => {
        return (
          <li key={idx} className={css.ul_li}>
            <NavLink to={`/${el.toLowerCase()}`} className={({ isActive }) => (isActive ? "text-point" : "")}>
              {el}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
