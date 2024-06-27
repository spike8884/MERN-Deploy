import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div id='footerNav' >
      <footer>
        <div className="footer0 text-center fw-bolder">
          <h1>MAINE COON OHIO</h1>
        </div>
        <div classname="footer1">
          <div className="social-media">
            <a href="#"> <ion-icon name="logo-facebook" /> </a>
            <a href="#"> <ion-icon name="logo-linkedin" /> </a>
            <a href="#"> <ion-icon name="logo-youtube" /> </a>
            <a href="#"><ion-icon name="logo-instagram" /></a>
            <a href="#"> <ion-icon name="logo-twitter" /> </a>
          </div>
        </div>
        <div className="footer2">
          <div className="product">
            <div className="heading">Products</div>
            <div className="div">Availability</div>
            <div className="div">Pricing</div>
          </div>
          <div className="services">
            <div className="heading">Services</div>
            <div className="div">Cash Back</div>
            <div className="div">Returns</div>
          </div>
          <div className="Company">
            <div className="heading">Company</div>
            <div className="div">Careers</div>
            <div className="div">Support</div>
          </div>
          <div className="Get Help">
            <div className="heading">Get Help</div>
            <div className="div">Help</div>
            <div className="div">Privacy</div>
          </div>
        </div>
        <div className="footer3">
          Copyright ©
          1978-2055
        </div>
      </footer>

    </div>
  )
}

export default Footer