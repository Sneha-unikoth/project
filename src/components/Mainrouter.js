import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SLIDER from '../Pages/SLIDER'
import PROFILE from '../Pages/PROFILE'
import TASKS from '../Pages/TASKS'







const Mainrouter = () => {
  return (
    <div>
        <Routes>
           <Route path='/Slider' element={<SLIDER/>}/>
           <Route path='/' element={<PROFILE/>}/>
           <Route path='/Task' element={<TASKS/>}/>
        </Routes>
   
    </div>
  )
}

export default Mainrouter
