import React from 'react'

function Registration() {
  return (
    <>
      <h1>SignUp</h1>
      <form className="container" >
        <div className='form-control'>
        <input 
        type="text"
         className="form-control mb-3" 
         placeholder='Name'
         />
        
        <input 
        type="email" 
        className="form-control mb-3" 
        placeholder='Email'
        />
            
        <input 
        type="number" 
        className="form-control mb-3" 
        placeholder='Mobil Number'
        />

        <input 
        type="password" 
        className="form-control mb-3" 
        placeholder='Password'
        />

        <textarea 
        className="form-control mb-3" 
        placeholder='Address'
        cols="5"
        rows="6"
        >
        </textarea>

        <button 
        type="submit" 
        className='form-control'>
             Signup
        </button>

        </div>
      </form>
    </>
  )
}

export default Registration
