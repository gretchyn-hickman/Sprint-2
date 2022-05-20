import React from 'react';

export default function Extend (name) {
    console.log(name)
return (
  <div className="extend">
    <h3>Gender: {name.name.gender}</h3>
    <h3>Height: {name.name.height}</h3>
    <h3>Eye Color: {name.name.eye_color}</h3>
    <h3>Birth Year: {name.name.birth_year}</h3>
  </div>
);
}