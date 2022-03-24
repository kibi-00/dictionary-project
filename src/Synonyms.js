import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <span className="text-decoration-underline">Synonyms:</span>
        {props.synonyms.map((synonyms, index) => (
          <ul key={index}>
            <li>{synonyms}</li>
          </ul>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
