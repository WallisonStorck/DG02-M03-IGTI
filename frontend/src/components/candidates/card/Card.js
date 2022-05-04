import React from "react";
import css from "./Card.module.css";

export default function Card({ children }) {
  return (
    <div className="card horizontal">
      <div className={css.card}>{children}</div>
    </div>
  );
}
