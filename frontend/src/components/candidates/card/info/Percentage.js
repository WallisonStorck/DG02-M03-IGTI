import React from "react";
import CountUp from "react-countup";

import { formatPercentage } from "../../../helpers/formatters";

export default function Percentage({ value, previous }) {
  return (
    // <span style={{ fontSize: "1.2rem" }}>{formatPercentage(children)}</span>
    <CountUp
      start={previous}
      end={value}
      duration={0.5}
      decimals={2}
      decimal=","
      suffix="%"
    >
      {({ countUpRef }) => (
        <div>
          <span
            style={{ fontSize: "1.2rem" }}
            ref={countUpRef}
            // ref={formatPercentage(countUpRef)}
          />
        </div>
      )}
    </CountUp>
  );
}
