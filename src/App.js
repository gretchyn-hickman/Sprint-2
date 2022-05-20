import React, {useState} from 'react';
import data from './mocks/handlers'
import CharacterList from './characterList'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState(data)









  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList character={data} />
    </div>
  );
}

//  

export default App;
