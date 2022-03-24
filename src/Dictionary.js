import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for the meaning of ${keyword}`);
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
