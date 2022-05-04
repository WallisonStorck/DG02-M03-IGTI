import React from "react";
import CountUp from "react-countup";
import { formatNumber } from "../../../helpers/formatters";

export default function Votes({ value, previous }) {
  return (
    <CountUp start={previous} end={value} duration={0.5} separator=".">
      {({ countUpRef }) => (
        <div>
          <span style={{ fontSize: "1.2rem" }} ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
}
