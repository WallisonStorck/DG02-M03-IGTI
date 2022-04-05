import React from "react";
import css from "./Picture.module.css";

export default function Picture({ imageSource, description }) {
  return (
    <>
      <img
        className={css.picture}
        src={imageSource}
        title={description}
        alt={description}
      />
    </>
  );
}
