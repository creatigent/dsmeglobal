import React from "react";

export default function BlogsFilter({ title, onChange, defaultChecked }) {
  return (
    <div className="blog__page__filter__entry">
      <input
        type="radio"
        className="blog__page__filter__entry__input"
        name="blog__page__filter__entry"
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <div className="blog__page__filter__entry__content">{title}</div>
    </div>
  );
}