import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { db } from '../../firebase'
import {doc, setDoc} from 'firebase/firestore'

import { createUserWithEmailAndPassword } from 'firebase/auth'
const Signup = () => {
  // const [email, setEmail]=useState('')
  // const [password, setPassword] = useState('')
  // const [username, setUserName]= useState('');
  const Navigate = useNavigate()
const [err, setErr]=useState(false)

  // const handleSubmit = async (e) =>{
  //   e.preventDefault();
  //   try {
  //    await createUserWithEmailAndPassword(auth, email, password)
  //     console.log("Account created")
  //     Navigate('/home')
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }

const handleSubmit= async (e)=>{
  e.preventDefault()
  const name = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  try {
   const res =  await createUserWithEmailAndPassword(auth, email, password)


     await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      name,
      email,
      password
     });
     await setDoc(doc(db, "userChats", res.user.uid),{});
     Navigate('/home')

  } catch (err) {
    setErr(true, err)
    
  }
  
    
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-body-secondary vh-100'>
      <div className='shadow p-3 mb-3 bg-light w-25 rounded-1'>
      <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name'><strong>Name</strong></label>
          <input type='text' placeholder='Enter Name' name='name' className='form-control rounded-0' />
        </div>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='text' placeholder='Enter email' name='email' className='form-control rounded-0' />
            </div>
             <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='text' placeholder='Enter password' name='email' className='form-control rounded-0' />
            </div>
            <button type='submit' className='btn btn-success border rounded-0 w-100'>Register</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>Already have an account?</p>
        <NavLink to='/login' className='btn btn-default border rounded-0 w-100'>Login</NavLink>
      </div>
    </div>
  )
}

export default Signup
