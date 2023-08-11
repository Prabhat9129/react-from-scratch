import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>{person.id}, I am {person.name},I am {person.age} year old,and I know {person.skill}</h1>
    </div>
  )
}

export default Person
