import React from 'react'


function Child1(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <p>{props.age}</p>
    </div>
  )
}

export default Child1
