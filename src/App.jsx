import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path ='navbar' element = {<Navbar/>}/>
      </Routes>
    </>
  )
}
export default App