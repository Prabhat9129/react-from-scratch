import React,{useState,useEffect} from 'react'

function CounterHook() {

    const[count, setCount]=useState(0)
    const[name,setName]=useState()

    useEffect(()=>{
      document.title = `you clicked ${count} times`
      console.log('updating');
    },[count])

  return (
    <div>
      <h1>Hello useState hooks</h1>
      <input
      type="text"
      value={name}
      onChange={e=>setName(e.target.value)}
      >
      </input>
      <button onClick={()=>{setCount(count+1)}}>
          clicked {count} time
      </button>
    </div>
  )
}

export default CounterHook
