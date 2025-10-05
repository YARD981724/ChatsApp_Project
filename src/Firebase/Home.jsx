import React from 'react'
import { Route } from 'react-router-dom'
import LeftSidebar from '/src/components/LeftSidebar'
import Chatbox from '../components/Chat'
import RightSidebar from '../components/RightSidebar'


const Home = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-body-secondary vh-100 w-100'>
    <div className='d-flex justify-content-center align-items-center w-100 h-100 bg-light rounded-2'>
       {/* <Route path='/' element={<LeftSidebar/>}/>
       <Route path='/' element={<Chatbox/>}/>
       <Route path='/' element={<RightSidebar/>}/> */}

       <LeftSidebar/>
       <Chatbox/>
       <RightSidebar/>
    </div>
      
    </div>
  )
}

export default Home
