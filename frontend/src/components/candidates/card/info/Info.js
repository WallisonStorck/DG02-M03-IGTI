import React from "react";
import Name from "./Name";
import Votes from "./Votes";

export default function Info(props) {
  const { name, votes } = props;

  return (
    <>
      <Name>{name}</Name>
      <Votes>{votes}</Votes>
    </>
  );
}
