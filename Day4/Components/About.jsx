import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    var navigate =useNavigate();
    var fun=()=>{
        navigate("/");
    }
  return (
    <div>
      this is about
      <button onClick={fun}>Home</button>
    </div>
  )
}

export default About
