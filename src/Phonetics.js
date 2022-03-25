import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);

  return (
    <div>
      {props.phonetics.map((phonetic, index) => {
        if (index > 0) {
          return (
            <div key={index}>
              <a
                href={phonetic.audio}
                target="_blank"
                rel="noreferrer"
                className="btn btn-warning"
              >
                Listen
              </a>{" "}
              <span>{phonetic.text}</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
