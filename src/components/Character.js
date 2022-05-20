// Write your Character component here
import React from 'react';
import Extend from './expanded'

export default function character(props){
    const { chara, setChara } = props;
return (
  <div className="charaContainer">
    <span className="charaTitle">
      <h1>Name: {chara.name}</h1>
    </span>
    <button>+</button>
    <Extend name={chara}/>
  </div>
);
}


//<button onClick={() => openDiv(character.name)}>change</button>