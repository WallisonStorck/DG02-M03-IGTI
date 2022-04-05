import React from "react";
import { formatPercentage } from "../../../helpers/formatters";

export default function Percentage({ children }) {
  return <span>{formatPercentage(children)}</span>;
}
