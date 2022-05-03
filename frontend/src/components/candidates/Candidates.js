import React from "react";
import Candidate from "./card/Candidate";
import Card from "./card/Card";
import Position from "./card/Position";
import FlipMove from "react-flip-move";

export default function Candidates({
  candidates,
  previousVotes,
  previousPercentage,
}) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, i) => {
          const index = i + 1;
          const { id } = candidate;

          const previousVoteObject = previousVotes.find(
            (item) => item.id === id
          );
          const previousVote = !!previousVoteObject
            ? previousVoteObject.votes
            : 0;

          const previousPercentageObject = previousPercentage.find(
            (item) => item.id === id
          );
          const previousPercent = !!previousPercentageObject
            ? previousPercentageObject.percentage
            : 0;

          return (
            <div key={id}>
              <Card>
                <Position>{index}</Position>
                <Candidate
                  previousVote={previousVote}
                  previousPercentage={previousPercent}
                  candidate={candidate}
                />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
