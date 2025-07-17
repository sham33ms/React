// import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client'
// // import App2 from '../Props/App2'
// import './App.css'
// import Iif from './Iif'
// import Else from './Else'

// function App() 
// {
//   var element = <div>
//          <h1 style={{color:"white", backgroundColor:"green"}}> hello from App.js </h1>
//         <p>hiii</p>
//     </div>
//     var input= <input type="text"  placeholder="Enter your name" /> 
//     const age=17;
//     if (age>18){
//       var res=Iif()}
//       else{
//       var res=Else()}
//     var out = <div> {age>18?<Iif/> : <Else/>} </div>

//     var check=<p>{age>=20?"ok":"not ok"}</p> 
//     function  fun()
//     {
//       var fuun=<h1 id='id'>hi</h1>
//       var root=ReactDOM.createRoot(document.getElementById("rot"));
//       root.render(fuun);
//     }
//       function  func()
//       {
//       var fuun=<h1></h1>
//       var root=ReactDOM.createRoot(document.getElementById("rot"));
//       root.render(fuun);
//     }
//       var arr =[1,2,3,4,5];
//       var result=arr.map((item,index)=> <li key={index} >{item*2} </li>)
//         function funct()
//         {
//         var subs = <div>Subscribed</div>;
//         var root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(subs);
//         }



//         var [count, setCount]=useState(0);
//       function cnt() 
//         {
//           setCount(count+1);
//         }
//       return (
//     <div>
//       {element}
//       {input}
//       {check}
//       {res}
//       {out}


//       <ol style={{color:"black"}}>{result}</ol>
//       {/* <App2 /> */}
//       <button onClick={cnt}>Inc </button>
//       <h1>{count}</h1>

//       <button onMouseEnter={fun} onMouseOut={func}>click</button>
//       <button onClick={funct} >Subscribe!</button>
//     </div>
//   )

// }
// export default App

// import React from 'react'
// import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'

// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//       <Link to ="/">Home</Link>
//       <Link to="/about">About</Link>
//       <button> <Link to="/">Home</Link></button>
//       <button> <Link to="/about">About</Link></button>

//       <Routes>
//         <Route path="/" element= {<Home />} />
//         <Route path="/about" element= {<About />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Perform further actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />

      <label>
        Age:
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
}

export default MyForm;
