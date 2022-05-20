// Write your Character component here
import React from 'react';

export default function character(props){
    const { chara, setChara } = props;
// need data -> name, gender, height, eye_color, birth_year
return (
  <div className="charaContainer">
    <div className="charaTitle">
      <h1>Name: {chara.name}</h1>
    </div>
    <div className="charaExtend off">
      <h3>Gender: {chara.gender}</h3>
      <h3>Height: {chara.height}</h3>
      <h3>Eye Color: {chara.eye_color}</h3>
      <h3>Birth Year: {chara.birth_year}</h3>
    </div>
    <button className='onOff'>More</button>
  </div>
);

}







//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     hair_color: "blond",
//     skin_color: "fair",
//     eye_color: "blue",
//     birth_year: "19BBY",
//     gender: "male",