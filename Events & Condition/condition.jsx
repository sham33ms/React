import React, { useState } from 'react'
export default condition
import logo from './i2.jpg'
import img from './i1.jpg'
import './App.css'

function condition() {
  const [image, setimage] = useState(false)
    var [color,setcolor]=useState(false);
  return (
    <div>
      <button onClick={()=>setcolor(!color)}>Color change</button>
      <div style={{backgroundColor:color?'red':'blue'}}>Color</div>
            <button onClick={()=>setimage(!image)}>Change the img</button>
      <div >{image ?(<img src={logo} alt="alt1"  />):(<img src={img} alt="alt2" />)}</div>
    </div>
  )
}
