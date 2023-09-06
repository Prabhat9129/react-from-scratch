import { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter]=useState(15)

  const handleAdd=()=>{
    console.log(counter);
    setCounter(counter+1)
  }

  const handledRemove=()=>{
    setCounter(counter-1)
  }
  
  return (
    <>
      <h1>hello</h1>
      <h1>Counter value : {counter}</h1>

      <button
       onClick={handleAdd}
       >
        Add value {counter}
      </button><br/>

      <button
      onClick={handledRemove}
      >
        remove value {counter}
      </button>
    
    </>
  )
}

export default App