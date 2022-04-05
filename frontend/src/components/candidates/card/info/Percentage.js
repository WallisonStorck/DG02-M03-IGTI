import React from "react";
import css from "../Card.module.css";

export default function Percentage({ children }) {
  return <span className={css.percentage}>{children}</span>;
}
