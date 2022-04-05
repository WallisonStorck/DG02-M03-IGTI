import React from "react";
import css from "../Card.module.css";

export default function Name({ children }) {
  return <span className={css.name}>{children}</span>;
}
