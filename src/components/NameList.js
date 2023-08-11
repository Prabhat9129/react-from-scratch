import React from 'react'
// import Person from './Person'

function NameList() {

    const list=['prabhat','prashant','prakash']
    const nameList=list.map((fName,index)=><h1 key={index}>{index} {fName}</h1>)

    // const person=[
    //     {
    //         id:1,
    //         name:'prabhat',
    //         age:21,
    //         skill:'React',  
    //     },
    //     {
    //         id:2,
    //         name:'prakash',
    //         age:23,
    //         skill:'Angular',  
    //     },{
    //         id:3,
    //         name:'prashant',
    //         age:26,
    //         skill:'vue',  
    //     }
    // ]

    // const personList=person.map((person)=><Person key={person.id} person={person}></Person>)

//     return (
//     <div>
//         <h1>{list[0]}</h1>
//         <h1>{list[1]}</h1>
//         <h1>{list[2]}</h1>
//     </div>
//   )

// return(list.map((fName)=><h1>{fName}</h1>))
// return <div> {nameList} </div>

return <div>{nameList}</div>
}


export default NameList
