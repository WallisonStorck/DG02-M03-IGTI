import React from "react";
import css from "../Card.module.css";
import Name from "./Name";
import Percentage from "./Percentage";
import Stars from "./Stars";
import Votes from "./Votes";

export default function Info(props) {
  const { name, votes, percentage, popularity } = props;

  return (
    <div className={css.info}>
      <Name>{name}</Name>
      <Votes>{votes}</Votes>
      <Percentage>{percentage}</Percentage>
      <Stars popularity={popularity} />
    </div>
  );
}
