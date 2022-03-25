import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.info) {
    return (
      <div className="Results">
        <h2 className="text-capitalize mt-3">{props.info.word}</h2>
        <Phonetics phonetics={props.info.phonetics} />

        {props.info.meanings.map((meanings, index) => (
          <div key={index}>
            <Meanings meanings={meanings} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
