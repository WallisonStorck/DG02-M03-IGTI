import React from "react";
import Card from "./card/Card";

export default function Candidates(props) {
  const { candidates } = props;

  return (
    <>
      {candidates.map((candidate) => {
        return <Card candidate={candidate} />;
      })}
    </>
  );
}
