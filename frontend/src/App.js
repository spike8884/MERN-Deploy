import React, { Component } from 'react'
import {Routes, Route, BrowserRouter as Router, BrowserRouter} from'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Pet from './components/PetComponent'
export default class App extends Component {
  render() {
    return (
<BrowserRouter>
<Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/shop' element={<Pet/>}/>
  </Routes>
  <Footer />
</BrowserRouter>
    )
  }
}
