import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const[err, setErr]=useState(false)
  const Navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    try {
      signInWithEmailAndPassword(auth, email, password)

      console.log("Login successfully")
           Navigate('/home')

    } catch (error) {
       setErr(true, error)
    }
    
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-body-secondary vh-100'>
      <div className='shadow p-3 mb-2 bg-light w-25 rounded-1'>
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'><strong>Email</strong></label>
          <input type='email' placeholder='Enter Email' name='email' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password'><strong>Password</strong></label>
          <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-success border rounded-0 w-100'>Login</button>
        {err && <span>Something went wrong</span>}
          </form>
        <p>Create a new account?</p>
        <NavLink to='/' className='btn btn-default border rounded-0 w-100'>Register</NavLink>
      
      </div>
    </div>
  )
}

export default Login
