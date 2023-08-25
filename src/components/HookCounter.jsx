import React,{useState} from 'react'

function HookCounter() {
const initialValue = 0;
const [count, setCount] = useState(initialValue)

  return (
    <div>
      Count: {count}<br/>
      <button onClick={()=>setCount(initialValue)}>Reset</button><br/>
      <button onClick={()=>setCount(count+1)}>Increment</button><br/>
      <button onClick={()=>setCount(count-1)}>Decrement</button><br/>
      <button onClick={()=>setCount(count-5)}>Decrement 5</button><br/>
      <button onClick={()=>setCount(count+5)}>Increment 5</button><br/>
      {/* <button onClick={setCount(count+1)}>Increment</button><br/>
      <button onClick={setCount(count-1)}>Decrement</button><br/> */}
    </div>
  )
}

export default HookCounter
