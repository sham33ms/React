import React from 'react'       
import Child1 from './Child1'
import Child2 from './Child2'

function App2() {
  return (
    <div>
      <Child1 age={21} name={"shameem"} />
      <Child2 age ={22} name={"rishi"} />
      <Funu/>
    </div>
  )
}
 function Funu(){
    return (
        <div>Hiii</div>
    )
 }
export default App2
