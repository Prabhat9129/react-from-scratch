import React,{useState,useEffect} from 'react'

function HookMouse() {
 const [x,setX] = useState(0)
 const [y,setY] = useState(0)

 const logMousePosition=(e)=>{
     console.log('mouseEvent');
    setX(e.clientX)
    setY(e.clientY)
 }

 useEffect(()=>{
     console.log('mouse useEffect');
     window.addEventListener('mousemove',logMousePosition)
     
     return ()=>{
         window.removeEventListener('mousemove',logMousePosition)
     } 
 },[])

    return (
    <div>
      X - {x} and Y - {y}
    </div>
  )
}

export default HookMouse
