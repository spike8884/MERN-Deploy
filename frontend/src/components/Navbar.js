import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  <header>
  <div className="logo"><a href="#">Maine Coon Ohio</a></div>
  <div className="menu">
    <a href><ion-icon name="close" className="close" /></a>
    <ul>
      <li><Link to="./home.js" className="under">HOME</Link></li>
      <li><Link to="./shop.js" className="under">INFORMATION</Link></li>
      <li><Link to="./about.js" className="under">ABOUT US</Link></li>
      <li><Link to="./contact.js" className="under">CONTACT INFO</Link></li>
    </ul>
  </div>
  <div className="search">
    <input type="text" placeholder="search products" id="input" />
      <ion-icon className="s" name="search" />
    
  </div>
  <div className="heading">
    <ul>
      <li><Link to="./home.js" className="under">HOME</Link></li>
      <li><Link to="./shop.js" className="under">INFORMATION</Link></li>
      <li><Link to="./about.js" className="under">ABOUT US</Link></li>
      <li><Link to="./contact.js" className="under">CONTACT INFO</Link></li>
    </ul>
  </div>
  <div className="heading1">
    <ion-icon name="menu" className="ham" />
  </div>
</header>

  )
}

export default Navbar