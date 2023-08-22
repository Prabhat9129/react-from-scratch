import React from 'react'
import Column from './Column'

function Table() {
    const item=[
        {id:1, name:'prabhat', address:'232 sukhi nagar'},
        {id:2, name:'prashant', address:'232 sukhi nagar'},
        {id:3, name:'prashant', address:'232 sukhi nagar'}  
    ]
  return (
    <table className='table table-striped'>
        <thead>
            <tr>
            <th scope='col'>
                Id
            </th>
            <th scope='col'>
                Name
            </th>
            <th scope='col'>
                Address
            </th>
            </tr>
        </thead>
        <tbody>
                <Column items={item}>  </Column>
        </tbody>
    </table>
  )
}

export default Table
