import React from "react";

export default function Popularity({ popularity }) {
  const STARTS = {
    empty: "☆",
    full: "★",
  };

  const MAX_STARTS = 10;

  const startsFull = STARTS.full.repeat(popularity);
  const startsEmpty = STARTS.empty.repeat(MAX_STARTS - popularity);

  return (
    <span style={{ color: "#f39c12", fontSize: "1.3rem" }}>
      {startsFull}
      {startsEmpty}
    </span>
  );
}
