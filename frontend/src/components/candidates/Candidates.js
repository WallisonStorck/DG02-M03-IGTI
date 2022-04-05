import React from "react";
import Card from "./card/Card";

export default function Candidates({ candidates }) {
  return (
    <>
      {candidates.map((candidate) => {
        return <Card candidate={candidate} />;
      })}
    </>
  );
}
