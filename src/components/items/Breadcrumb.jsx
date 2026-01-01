import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/").filter(Boolean);

  return (
    <nav>
      <Link to="/">HOME</Link>
      {pathArr.map((path, idx) => {
        return (
          <React.Fragment key={idx}>
            <span>/</span>
            {idx !== pathArr.length - 1 ? <Link to={`/${path}`}>{path.toUpperCase()}</Link> : <strong>{path.toUpperCase()}</strong>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
