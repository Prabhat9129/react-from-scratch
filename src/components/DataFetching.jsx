import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DataFetching() {
 
  const [id, setId] = useState(1)
  const [post, setPost] = useState({})
  const [fetchFromButton,setFetchFromButton] = useState(1)

const handleClick = () =>{
    console.log('hello button clicked');
    console.log(id);
    setFetchFromButton(id)
}

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchFromButton}`).then((response)=>{
    console.log(response);    
    setPost(response.data)
    }).catch((error)=>{
        console.log(error);
    })
  },[fetchFromButton])

// let data=post.map((item)=>{
//     console.log(item);
//     return <li key={item.id}>{item.title}</li>
// })

    return (
    <div>
        <input type="text" onChange={(e)=>{setId(e.target.value)}}></input>
        <button type="button" onClick={handleClick}> fetch data</button>
     <ol>{post.title}</ol>
    </div>
  )
}

export default DataFetching
