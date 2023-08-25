import React,{useState} from 'react'

function HookCounterFour() {
  const [list,setList] = useState([])
  const handleClick = ()=>{
      setList([...list,{
          id:list.length,
          value:Math.floor(Math.random()*10)+1
      } ])
  }

  
    return (
    <div>
        <button onClick={handleClick}>Add</button>
      <ul>
       { list.map(item => (
           <li key={item.id}>{item.value}</li>
       )) } 
      </ul>
    </div>
  )
}

export default HookCounterFour
