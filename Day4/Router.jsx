import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to ="/">Home</Link>
      <Link to="/about">About</Link>
      <button> <Link to="/">Home</Link></button>
      <button> <Link to="/about">About</Link></button>

      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element= {<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App