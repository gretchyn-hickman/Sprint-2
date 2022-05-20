import React, {useState} from 'react';
import data from './mocks/handlers'
import CharacterList from './characterList'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState(data)


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList character={data} />
    </div>
  );
}

export default App;
