import React, { useState } from 'react'
import logo from '/src/assets/messge.png'
import user from '/src/assets/ashokrd1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faMagnifyingGlass, faPen, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import '../components/Chat.css'
import { faReact } from '@fortawesome/free-brands-svg-icons'
const LeftSidebar = () => {
  const[isOpen, setIsOpen]=useState(false)

  const toggleDropdown = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div style={{width:'25rem' }} className='d-flex flex-column  h-100 userRight'>
      <div className='d-flex justify-content-between flex-row mt-2 ms-2'>
        <div className='d-flex flex-row text-white'>
          <img style={{height:20, width:20}} src={logo} alt='logo'/>
        <p ><b>ChatsApp</b></p>
        </div>
        {/* <button style={{border:'none', outline:'none'}} className='btn btn-default text-white'><FontAwesomeIcon icon={faEllipsisV}/></button> */}
        <div className="dropdown-start">
      <button style={{border:'none'}}
        className="btn btn-default text-light"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}>
       <FontAwesomeIcon icon={faEllipsisV}/>
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li><button className="dropdown-item" type="button"><FontAwesomeIcon icon={faPen}/> Edit Profile</button></li>
        <hr />
        <li><button className="dropdown-item" type="button"><FontAwesomeIcon icon={faQuestionCircle}/> Help & Support</button></li>
        <li><button className="dropdown-item" type="button"><FontAwesomeIcon icon={faReact}/> FAQ</button></li>
      </ul>
    </div>
      </div>
      <div style={{width:'15rem'}} className='d-flex flex-row shadow card me-3 ms-3'>
        <button style={{cursor:'default', border:'none'}} className='btn btn-default rounded-circle'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        <input  style={{border:'none', outline:'none', borderRadius:10}} type='text' placeholder='Search...' name='search' />
      </div>
      <div style={{scrollbarWidth:'none'}}  className='d-flex flex-column  h-100 overflow-y-scroll mt-2'>
       {
        Array(20).fill("").map((item, index)=>(
             <div key={index} className='d-flex flex-row  pt-2 text-white userH ps-2'>
            <img style={{height:'3rem', width:'3rem', borderRadius:50, border:'1px solid black', marginLeft:1}} src={user} alt='user'/>
            <div style={{listStyle:'none', paddingLeft:'1rem'}}>
                <li>Aditya RD</li>
                <li className='text-light'>Hello, How are you?</li>
            </div>
        </div>
        ))
       }


      </div>
    </div>
  )
}

export default LeftSidebar
