import React from "react";
import Info from "./info/Info";
import Name from "./info/Name";
import Percentage from "./info/Percentage";
import Popularity from "./info/Popularity";
import Votes from "./info/Votes";
import Picture from "./Picture";
import Position from "./Position";

export default function Candidate({ candidate, position }) {
  const { name, votes, percentage, popularity } = candidate;

  return (
    <>
      <Position>{position}</Position>
      <Picture imageSource={`${name}.jpg`} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes>{votes}</Votes>
        <Percentage>{percentage}</Percentage>
        <Popularity popularity={popularity} />
      </Info>
    </>
  );
}
