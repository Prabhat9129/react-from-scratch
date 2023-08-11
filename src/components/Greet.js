// Stateless functional component.
import React from 'react'

// function Greet(){
//     return <h1>Hello Prabhat</h1>
// }
const Greet = (props)=>
{
const{fName,heroName,children}=props
return (
    <div>
        <h1>Hello {fName} that is a {heroName}</h1>
        { children}
    </div>

)}

export default Greet
