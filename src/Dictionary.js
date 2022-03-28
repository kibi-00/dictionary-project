import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function searchKeyword(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(searchKeyword);
  }

  function storeWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Type a word to find its meaning below:</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Type a word.."
                onChange={storeWord}
                className="w-100"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="w-100 search-button"
              />
            </div>
          </div>
        </form>
      </section>
      <Results info={results} />
    </div>
  );
}
