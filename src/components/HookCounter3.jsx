import React from 'react'
import { useState } from 'react'

function HookCounter3() {

    const [name, setName] = useState({firstName:'' , lastName:'' })

    
  return (
    <div>
      <form>
          <input 
          type="text"
          value = {name.firstName}
          onChange={e=>setName({...name,firstName: e.target.value})}
          /><br/>
          <input
          type="text"
          name='lastName'
          value={name.lastName}
          onChange={e=>setName({...name,lastName: e.target.value})}
          />
      </form>
     
      <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default HookCounter3
