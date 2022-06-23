import React from "react";

import { Link } from "react-router-dom";

export function ServicesCard({ data }) {
  function onClick() {
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  return (
    <Link
      onClick={onClick}
      to={data.link}
      className="container__services__right__entry"
    >
      <div className="container__services__right__entry__icon">
        <img
          src={
            "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
            data.logo
          }
          alt={data.title}
        />
      </div>
      <div className="container__services__right__entry__heading">
        {data.title}
      </div>
      <div className="container__services__right__entry__info">
        {data.shortDescription}
      </div>
    </Link>
  );
}
