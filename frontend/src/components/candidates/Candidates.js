import React from "react";
import Candidate from "./card/Candidate";
import Card from "./card/Card";
import Position from "./card/Position";

export default function Candidates({ children }) {
  const candidates = children;

  return (
    <>
      {candidates.map((candidate, i) => {
        const index = i + 1;

        return (
          <Card key={index}>
            <Candidate candidate={candidate} position={index} />
          </Card>
        );
      })}
    </>
  );
}
