import React from "react";
import css from "./Card.module.css";
import Info from "./info/Info";
import Picture from "./Picture";
import Position from "./Position";

export default function Card({ candidate }) {
  const { id, name, votes } = candidate;

  return (
    <div className={css.card}>
      <Position>{id}</Position>
      <Picture imageSource={`${id}.jpg`} description={name} />
      <Info name={name} votes={votes} />
    </div>
  );
}
