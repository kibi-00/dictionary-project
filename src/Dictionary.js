import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function searchKeyword(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for the meaning of ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(searchKeyword);
  }

  function storeWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a word.." onChange={storeWord} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
