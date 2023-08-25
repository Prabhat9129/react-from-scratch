import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function HookIntervalCounter() {
    const [count, setCount] = useState(0)

    const tic=()=>{
       setCount(prevCount => prevCount+1);
    }

    useEffect(()=>{
        const interval = setInterval(tic,1000)
        return () => {
            clearInterval(interval)
        }
    },[])


    return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default HookIntervalCounter