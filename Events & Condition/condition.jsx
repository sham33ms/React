import React, { useState } from 'react'

function condition() {
    var [color,setcolor]=useState(false);
  return (
    <div>
      <button onClick={()=>setcolor(!color)}>Color change</button>
      <div style={{backgroundColor:color?'red':'blue'}}>Color</div>
    </div>
  )
}

export default condition
