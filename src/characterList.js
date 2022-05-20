import React from 'react'
import Character from './components/Character'

export default function characterList(props){
    return (
    <div className='list-chara container'>
      { props.character.map(Ch => (
          <Character chara={Ch} key={Ch.name}/> 
      ))}
    </div>
  )
}



// div
//     h1 for name
//     drop down Option
// div drop down
//   data

