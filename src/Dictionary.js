import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(
    props.defaultKeyword
  );
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photo, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse);

    let pexelApiKey =
      "563492ad6f91700001000001f33546699b8949e2a70c6e3aaad99280";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {
      Authorization: `Bearer ${pexelApiKey}`,
    };
    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelResponse);
  }

  function handleKeyword(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>
            What word do you want to look up?
          </h2>
          <form onSubmit={handleKeyword}>
            <input
              type="search"
              onChange={updateKeyword}
              className="form-control"
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga,
            forest
          </div>
        </section>
        <Results results={results} />
        <Photos
          photos={photo}
          keyword={keyword}
        />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
