import React from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";

export function PortfolioDetailsJumbotron({ data }) {
  return (
    <div
      className="portfolio__details__jubmotron"
      style={{ backgroundColor: data.theme }}
    >
      <div className="portfolio__details__jubmotron__content">
        <div className="portfolio__details__jubmotron__content__left heading">
          {data.title}
        </div>
        <div className="portfolio__details__jubmotron__content__right">
          <img
            loading="lazy"
            src={
              import.meta.env.VITE_CLOUDNAIRY_API_URL +
              replacePngWithWebp(data.banner)
            }
            alt={data.title}
            className="portfolio__details__jubmotron__content__right__img"
          />
        </div>
      </div>
    </div>
  );
}
