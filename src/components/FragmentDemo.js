import React,{Fragment} from 'react'
import Table from './Table'

function FragmentDemo() {
  return (
    // <Fragment>
    //        Fragment Demo.      
    //         {
    //           Array(1000).fill().map((_,i)=>{
    //             return <p key={i}>Paragraph {i+1}</p>
    //           })
    //         }   
    // </Fragment>
    // <div>
    // <h1>hello</h1>
    // <p>hey tktlmgtlkmbgmdsf</p>
    // </div>
    <>
    <Table></Table>
    </>
  )
}

export default FragmentDemo
