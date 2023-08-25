import React from 'react'

function ListRender() {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
        { title: 'banana', id: 4 },
      ];

    let listProduct = products.map((items)=>{
        return <li key={items.id}>{items.title}</li>
    })
console.log(listProduct);
    return (
    <div>
      <ol>
      {listProduct}
      </ol>
    </div>
  )
}

export default ListRender
