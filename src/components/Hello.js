import React from 'react'

const Hello=()=>{
    // return(
    //     <div>
    //         <h1>
    //             Hello Prabhat
    //         </h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'hello', className:'dummyClass'},
        React.createElement('h1',null,'hello prabaht')
    )
}


export default Hello