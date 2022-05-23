import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters !== [] ? (
        characters.map((character, index) => (
          <Character character={character} key={index} />
        ))
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
};

export default App;
