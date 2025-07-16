// import React from "react";

// class Class extends React.Component{
//     constructor(props){
//         this.state={
//             name:"Shameem"  
//         }
//     }}
// export default Class;


import React, { useState } from 'react'

function Statee() {
    var [count, setCount]=useState;
// function fun(){
//     setCount(count+1)
// }
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}> Click</button>
    </div>
  )
}

export default Statee

