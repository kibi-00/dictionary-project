import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.info) {
    return (
      <div className="Results">
        <h2>{props.info.word}</h2>
        {props.info.meanings.map((meanings, index) => (
          <div key={index}>
            <Meanings meanings={meanings} />
          </div>
        ))}
        ;
      </div>
    );
  } else {
    return null;
  }
}
