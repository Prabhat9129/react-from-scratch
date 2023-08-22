import React, { useState } from 'react'
import sculptureList from './data';
import SculptureList from './data'

function UseState() {

const [index,setIndex]=useState(0);
const [showMore,setShowmore] = useState();

function handleIndex(){
  if(SculptureList.length-1 === index){
    return setIndex(0)
  }
  return setIndex(index + 1)
}

function handlePrev(){
  if(index === 0){
   return setIndex(sculptureList.length-1)
  }
  return setIndex(index - 1)
}

function handleDetails(){
  return setShowmore(!showMore)
}

let Sculpture=SculptureList[index]

return (
    <div>
     <button
      onClick={handlePrev} 
      >
        Previous
      </button>||
      <button
      onClick={handleIndex} 
      >
        next
      </button>
      
      <h1>
        {Sculpture.name}<br/> 
        BY {Sculpture.artist}
      </h1>
      <p>
        ({index + 1} of {SculptureList.length} )
      </p>

      <img 
      src={Sculpture.url}
      alt={Sculpture.alt}
      >
      </img>
      <br/><br/>
      <button 
      onClick={handleDetails}
      >
        {showMore?'Hide':'Show'} Details
      </button>
      
      {showMore&&<p className='container '>{Sculpture.description}</p>}
      
    </div>
  )
}

export default UseState
