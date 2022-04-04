import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Images.css";

export default function Images(props) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (!props.info) {
      return null;
    } else {
      let apiKey = "563492ad6f91700001000001293fadf8f86d4a648ae25355ccd5ec6f";

      axios
        .get(
          `https://api.pexels.com/v1/search?query=${props.info.word}&per_page=6`,
          {
            headers: { Authorization: `${apiKey}` },
          }
        )
        .then(getImages);
    }
  }, [props.info]);

  function getImages(response) {
    setImage(response.data.photos);
  }

  if (image.length) {
    return (
      <div className="Images">
        <div className="row">
          {image.map((photo, index) => (
            <div className="col" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="Images-photo img-fluid"
                  alt={photo.alt}
                  title={photo.alt}
                ></img>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
