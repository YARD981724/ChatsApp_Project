import React, { useState } from 'react'
import user from '../assets/ashokrd1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faContactBook, faFile, faImage, faLaugh, faLink, faMicrophone, faPaperPlane, faPenFancy, faPhone, faPoll, faQuestionCircle, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import './Chat.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

const Chatbox = () => {
  const [show, setShow] = useState(false)
  const [isPickerVisible, setPickerVisible]=useState(false)
  const [currentEmoji, setCurrentEmoji]=useState(null)
  const toggleDropUp = () => {
    setShow(!show)
  }
  const emoji = ()=>{
    setPickerVisible(!isPickerVisible)
  }

  return (
    <div  className='d-flex justify-content-between flex-column w-100 h-100 bg-light'>
      {/* Header of chat-message */}
      <div className='d-flex justify-content-between align-items-center w-100 bg-success'>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <img style={{ width: '3rem', height: '3rem', borderRadius: "50%", marginLeft: 10 }} src={user} alt='user' />
          <div className='text-white ps-2'>
            <li>Aditya RD </li>
            <li>Last seen today: 10:45 AM</li>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <button style={{ cursor: 'default', fontSize: '1.5rem', outline: 'none', border: 'none' }} className='btn btn-default text-light'><FontAwesomeIcon icon={faPhone} /></button>
          <button style={{ cursor: 'default', fontSize: '1.5rem', outline: 'none', border: 'none' }} className='btn btn-default text-light'><FontAwesomeIcon icon={faVideoCamera} /></button>
          <button style={{ cursor: 'default', fontSize: '2rem', outline: 'none', border: 'none' }} className='btn btn-default text-light'><FontAwesomeIcon icon={faQuestionCircle} /></button>
        </div>
        
      </div>
      {/* Body of chat-message */}

      <div className='chat-msg'>
        <div className='s-msg'>
          <p className='msg'>Hello, From maharishi university of information technology</p>
          <p>2:30 PM</p>
        </div>
        <div className='r-msg'>
          <p className='msg'>Hello, From maharishi university of information technology</p>
          <p>2:30 PM</p>
        </div>
      </div>

      {/* Input chat-message */}
      <div className='d-flex justify-content-between align-bottom flex-row shadow card p-2'>
        
        <div className='dropup-left'>
          <button style={{ border: 'none' }} className='btn btn-default' aria-expanded={isPickerVisible}><FontAwesomeIcon icon={faLaugh} onClick={emoji} /></button>
          <ul className={`dropdown-menu up ${isPickerVisible?'show':'none'}`}>
            <Picker data={data} previewPosition='none' onEmojiSelect={(e)=>{setCurrentEmoji(e.native); setPickerVisible(!isPickerVisible)}}/>
          </ul>
        </div>


        <div className="dropup-start">
          <button className="btn btn-default border-0" type="button" aria-expanded={show} onClick={toggleDropUp}>
            <FontAwesomeIcon icon={faLink}/>
          </button>
          <ul className={`dropdown-menu up ${show ? 'show': ''}`}>
            <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faImage}/> Photos & Videos</a></li>
            <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faCamera}/> Camera</a></li>
            <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faFile}/> Document</a></li>
            <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faContactBook}/> Contact</a></li>
            <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faPoll}/> Poll</a></li>
            <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faPenFancy}/> Drawing</a></li>
          </ul>
        </div>

        <input style={{ border: 'none', outline: 'none', width: '100%' }} type='text' placeholder='Type a message...' name='message'  />
        <button style={{ border: 'none' }} className='btn btn-primary rounded-circle'><FontAwesomeIcon icon={faPaperPlane} /></button>
        <button style={{ border: 'none', borderRadius: '50%' }} className='btn btn-default'><FontAwesomeIcon icon={faMicrophone} /></button>
      </div>
    </div>
  )
}

export default Chatbox;
