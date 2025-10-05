import React from 'react'
import user from '../assets/ashokrd1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import '../components/Chat.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const RightSidebar = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column w-25 h-100 userRight'>
     <div className='rs-profile d-flex justify-content-center align-items-center flex-column p-4'>
      <img style={{width:'8rem', height:'8rem', borderRadius:'50%', alignItems:'center', border:'1px solid black'}} src={user} alt='user'/>
      <div className='d-flex justify-content-center align-items-center flex-row'>
         <p className='text-light'>Aditya RD </p>
         <p className='text-light ms-2'><FontAwesomeIcon icon={faDotCircle}/></p>
      </div>
      <p className='text-light'>Hey, There I am Aditya RD using ChatsApp</p>
     </div>
  
        <p className='text-light'>Media </p>

     <div className='rs-media'>
      {
        Array(12).fill("").map((item, index)=>(
          <div key={index} >
        <img style={{width:'4rem', height:'4rem', margin:'5px', border:'1px solid black'}} src={user} alt='media'/>
      </div>
        ))
      }
     </div>
     <div className='d-flex justify-content-center align-items-center'>
      <button className='btn btn-danger m-3' onClick={()=> signOut(auth)}>Logout</button>
     </div>
    </div>
  )
}

export default RightSidebar
