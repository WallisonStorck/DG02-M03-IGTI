import React from "react";
import css from "./Card.module.css";
import Info from "./info/Info";
import Name from "./info/Name";
import Percentage from "./info/Percentage";
import Popularity from "./info/Popularity";
import Votes from "./info/Votes";
import Picture from "./Picture";
import Position from "./Position";

export default function Card({ candidate }) {
  const { id, name, votes, percentage, popularity } = candidate;
  console.log(candidate);

  return (
    <div className={css.card}>
      <Position>{id}</Position>
      <Picture imageSource={`${name}.jpg`} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes>{votes}</Votes>
        <Percentage>{percentage}</Percentage>
        <Popularity popularity={popularity} />
      </Info>

      {/* <div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
