import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleKeyword(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function updateKeyword(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleKeyword}>
        <input
          type="search"
          onChange={updateKeyword}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-warning"
        />
      </form>
    </div>
  );
}
