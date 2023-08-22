import React from 'react'

function MemoComp({name}) {
    console.log("Memo Component")
  return (
    <div>
     Memo Components {name}
    </div>
  )
}

export default React.memo(MemoComp)
