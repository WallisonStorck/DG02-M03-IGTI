import React from "react";
import css from "./Card.module.css";

export default function Position({ children }) {
  return <p className={css.position}>{children}</p>;
}
