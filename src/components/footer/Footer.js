import React from 'react'
import "./footer.scss"

import logo from "../../assets/images/logo.png"

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__end">
            <ul className="footer__end-list-1">
              <li><img src={logo} alt="" /></li>
              <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p></li>
            </ul>
            <ul className="footer__end-list-2">
              <li><h2>Follow Us</h2></li>
              <li><p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p></li>
            </ul>
            <ul className="footer__end-list-3">
              <li><h2>Contact Us</h2></li>
              <li><p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p></li>
            </ul>
          </div>
          <div className="footer__top">
            <ul className="footer__top-list-1">
              <li><h3>Infomation</h3></li>
              <li><p>About Us</p></li>
              <li><p>Infomation </p></li>
              <li><p>Privacy Policy</p></li>
              <li><p>Terms & Conditions</p></li>
            </ul>
            <ul className="footer__top-list-2">
              <li><h3>Service</h3></li>
              <li><p>About Us</p></li>
              <li><p>Infomation </p></li>
              <li><p>Privacy Policy</p></li>
              <li><p>Terms & Conditions</p></li>
            </ul>
            <ul className="footer__top-list-3">
              <li><h3>My Account</h3></li>
              <li><p>About Us</p></li>
              <li><p>Infomation </p></li>
              <li><p>Privacy Policy</p></li>
              <li><p>Terms & Conditions</p></li>
            </ul>
            <ul className="footer__top-list-4">
              <li><h3>Our Offers</h3></li>
              <li><p>About Us</p></li>
              <li><p>Infomation </p></li>
              <li><p>Privacy Policy</p></li>
              <li><p>Terms & Conditions</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer