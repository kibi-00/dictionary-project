import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);

  return (
    <div className="Phonetics">
      {props.phonetics.map((phonetic, index) => {
        if (index > 0) {
          return (
            <div key={index} className="audio-and-text">
              <a
                href={phonetic.audio}
                target="_blank"
                rel="noreferrer"
                className="listen-button"
              >
                Listen
              </a>{" "}
              <span className="phonetic-text">{phonetic.text}</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
