import React from "react";
import css from "./Card.module.css";

export default function Card({ children }) {
  return <div className={css.card}>{children}</div>;
  // return (
  //   <div className="col s12 m7">
  //     <div className="card horizontal">
  //       <div className="card-stacked">
  //         <div className="card-content">{children}</div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
