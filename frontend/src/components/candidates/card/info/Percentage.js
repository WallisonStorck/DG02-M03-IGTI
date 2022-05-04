import React from "react";
import CountUp from "react-countup";

export default function Percentage({ value, previous }) {
  return (
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
          <span style={{ fontSize: "1.2rem" }} ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
}
