import React from "react";
import css from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={css.container}>
      <div>
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.message}>
        <span>Loading...</span>
      </div>
    </div>
  );
}
