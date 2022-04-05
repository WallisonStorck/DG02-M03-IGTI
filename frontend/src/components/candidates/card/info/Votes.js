import React from "react";
import { formatNumber } from "../../../helpers/formatters";

export default function Votes({ children }) {
  return <span>{formatNumber(children)}</span>;
}
