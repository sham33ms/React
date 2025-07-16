import React from 'react'

function Events() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}> click</button>
    </div>
  )
}

export default Events
