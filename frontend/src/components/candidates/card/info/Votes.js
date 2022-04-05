import React from "react";
import css from "../Card.module.css";

export default function Votes({ children }) {
  return <span className={css.votes}>{children}</span>;
}
