import { React, useState } from "react";

import Axios from "axios";

import "./App.css";

import { FaSearch } from "react-icons/fa";

import { FcSpeaker } from "react-icons/fc";

function App() {
  const [data, setData] = useState("");

  const [word, setSearchWord] = useState("");

  const [useEffect] = useEffect("")

  function getMeaning() {
    Axios.get(
      `api/:userId/words/translations/:${word}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

 

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);

    audio.play();
  }

  return (
    <div className="App">
      <h1>English Dictionary</h1>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Type a word..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />

        <button
          onClick={() => {
            //getWord();
            getMeaning()
          }}
        >
          <FaSearch size="25px" />
        </button>
      </div>

      {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}
            <button
              onClick={() => {
                playAudio();
              }}
            >
              <FcSpeaker size="26px" />
            </button>
          </h2>

          <h4>Parts of speech:</h4>

          <p>{data.meanings[0].partOfSpeech}</p>

          <h4>Definition:</h4>

          <p>{data.meanings[0].definitions[0].definition}</p>
        </div>
      )}
    </div>
  );
}

export default App;
