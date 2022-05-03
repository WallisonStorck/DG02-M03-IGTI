import React from "react";
import Info from "./info/Info";
import Name from "./info/Name";
import Percentage from "./info/Percentage";
import Popularity from "./info/Popularity";
import Votes from "./info/Votes";
import Picture from "./Picture";

export default function Candidate({
  candidate,
  previousVote,
  previousPercentage,
}) {
  const { name, votes, percentage, popularity } = candidate;

  return (
    <>
      <Picture imageSource={`${name}.jpg`} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote} />
        <Percentage value={percentage} previous={previousPercentage} />
        <Popularity popularity={popularity} />
      </Info>
    </>
  );
}
