import React, { Component } from 'react'
import {Routes, Route, BrowserRouter as Router, BrowserRouter} from'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
export default class App extends Component {
  render() {
    return (
<BrowserRouter>
<Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
  <Footer />
</BrowserRouter>
    )
  }
}
