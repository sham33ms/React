import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App2 from '../Props/App2'
import './App.css'
import Iif from './Iif'
import Else from './Else'

function App() 
{
  var element = <div>
         <h1 style={{color:"white", backgroundColor:"green"}}> hello from App.js </h1>
        <p>hiii</p>
    </div>
    var input= <input type="text"  placeholder="Enter your name" /> 
    const age=17;
    if (age>18){
      var res=Iif()}
      else{
      var res=Else()}
    var out = <div> {age>18?<Iif/> : <Else/>} </div>
  
    var check=<p>{age>=20?"ok":"not ok"}</p> 
    function  fun()
    {
      var fuun=<h1 id='id'>hi</h1>
      var root=ReactDOM.createRoot(document.getElementById("rot"));
      root.render(fuun);
    }
      function  func()
      {
      var fuun=<h1></h1>
      var root=ReactDOM.createRoot(document.getElementById("rot"));
      root.render(fuun);
    }
      var arr =[1,2,3,4,5];
      var result=arr.map((item,index)=> <li key={index} >{item*2} </li>)
        function funct()
        {
        var subs = <div>Subscribed</div>;
        var root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(subs);
        }
        

        
        var [count, setCount]=useState(0);
      function cnt() 
        {
          setCount(count+1);
        }
      return (
    <div>
      {element}
      {input}
      {check}
      {res}
      {out}
      

      <ol style={{color:"black"}}>{result}</ol>
      {/* <App2 /> */}
      <button onClick={cnt}>Inc </button>
      <h1>{count}</h1>

      <button onMouseEnter={fun} onMouseOut={func}>click</button>
      <button onClick={funct} >Subscribe!</button>
    </div>
  )

}
export default App

