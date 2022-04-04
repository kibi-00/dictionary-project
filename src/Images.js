import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Images.css";

export default function Images(props) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (!props.info) {
      return null;
    } else {
      makeCall();
    }
  }, [props.info]);

  function getImages(response) {
    setImage(response.data.photos);
  }

  function makeCall() {
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

  if (image.length) {
    return (
      <div className="Images">
        <div className="row">
          <div className="col-6">
            <img
              src={image[0].src.landscape}
              className="Images-photo d-flex w-100"
              alt="image one"
            ></img>
          </div>
          <div className="col-6">
            <img
              src={image[1].src.landscape}
              className="Images-photo d-flex w-100"
              alt="image two"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src={image[2].src.landscape}
              className="Images-photo d-flex w-100"
              alt="image one"
            ></img>
          </div>
          <div className="col-6">
            <img
              src={image[3].src.landscape}
              className="Images-photo d-flex w-100"
              alt="image two"
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
