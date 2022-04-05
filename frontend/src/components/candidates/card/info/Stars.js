import React from "react";

export default function Stars({ popularity }) {
  const STARTS = {
    empty: "☆",
    full: "★",
  };

  const MAX_STARTS = 10;

  const startsFull = popularity;
  const startsEmpty = MAX_STARTS - popularity;

  return (
    <span>{`${STARTS.full.repeat(startsFull)}${STARTS.empty.repeat(
      startsEmpty
    )}`}</span>
  );
}
