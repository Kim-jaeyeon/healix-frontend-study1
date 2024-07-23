import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Price from './Price'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/About' element={<About/>}/>
          <Route path='/Price' element={<Price/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
