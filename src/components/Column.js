import React, { Fragment } from 'react'


function Column(props) {

    return (
        <>
        {props.items.map((item)=>{
            return <Fragment key={item.id}>
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            </tr>
            </Fragment>
        })
        }
        </>
    )
}

export default Column
