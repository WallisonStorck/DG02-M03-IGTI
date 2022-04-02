import React from "react";

export default function Candidates(props) {
  const { candidates } = props;

  return (
    <>
      {candidates.map(({ id, name, votes }) => {
        return (
          <p key={id}>
            {name} - {votes}
          </p>
        );
      })}
    </>
  );
}
