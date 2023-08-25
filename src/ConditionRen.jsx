import React from 'react'

function ConditionRen({value}) {
let isLoggedIn=true;
    let content
if(isLoggedIn)
{
    content=<h1>Prabhat {value}</h1>
}
else
{
    content=<h1>Guest</h1>
}


  return (
    <div>
      <h1>Hello Rendering</h1>
      {content}
      {isLoggedIn?<h1>Prabhat {value}</h1>:<h1>Guest</h1>}
      {isLoggedIn && <h1>Prabhat {value}</h1>}
    </div>
  )
}

export default ConditionRen
