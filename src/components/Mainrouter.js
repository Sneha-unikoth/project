import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SLIDER from '../Pages/SLIDER'







const Mainrouter = () => {
  return (
    <div>
        <Routes>
           <Route path='/Slider' element={<SLIDER/>}/>
        </Routes>
   
    </div>
  )
}

export default Mainrouter
