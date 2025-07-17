// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           maxLength={"5"}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       {name}
//       <label >
//         Enter your age:
//         <input type="number"
//         value={age}
//         onChange={(e)=> {if (e.target.value.length<=5){
//           setAge(e.target.value)} }}/>
//       </label>
//       {age}
//     </form>
//   )
// }
// export default App