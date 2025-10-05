import React, { useState } from 'react'
import user from '../assets/ashokrd1.jpg'
import logo from '../assets/messge.png'
import '../components/Chat.css'

const ProfileUpdate = () => {
  const[image, setImage]=useState(false);
  return (
    <div className='d-flex justify-content-center flex-row align-items-center bg-secondary vh-100'>
    
      <div style={{height:'25rem', width:'50rem'}} className='d-flex justify-content-around align-items-center flex-row bg-light shadow card rounded-3'>
              <div className='w-50'>
        <from>
          <h2>Profile Update</h2>
          <label htmlFor='avatar' className='d-flex flex-row justify-content-center align-items-center'>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='avatar' accept='.png, .jpg, .jpeg' hidden/>
            <img className='userImage' src={image ? URL.createObjectURL(image) : user} alt='user' />
            <h4 className='ms-3'>upload profile image</h4>

          </label>

          {/* <div className='d-flex justify-content-center align-items-center'>
            <img style={{ width: '5rem', height: '5rem', borderRadius: '50%', border: '1px solid black' }} src={user} alt='user' />
            <h4 className='ms-3'>upload profile image</h4>
          </div> */}
          <input style={{ marginTop: '10px' }} type='text' placeholder='Your name' autoCapitalize='off' name='name' className='form-control rounded-0' />
          <textarea style={{ resize: 'none', marginTop: '1rem' }} placeholder='Write profile bio' name='bio' autoComplete='off' className='form-control rounded-0' />
          <button type='submit' className='btn btn-primary w-100 mt-4'>Save</button>

        </from>
               
      </div>
        
          <img className='logoProfile' src={image ? URL.createObjectURL(image) : logo} alt='logo'/>
      
      </div>
    </div>
  )
}

export default ProfileUpdate
