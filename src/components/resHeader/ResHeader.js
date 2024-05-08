import React from 'react'
import "./resHeader.scss"

import { GoHomeFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch , IoCartOutline ,IoHeartOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";

const ResHeader = () => {
  return (
    <div id='resheader'>
        <div className="container">
      <div className="footer-lists">
        <button className="footer__fixsed-button">
          <GoHomeFill/>
          <p className="footer-item-list">Home</p>
        </button>
        <div className="div-item">
          <a href="#">
            <IoHeartOutline/>
            <span className="div-item-textsesss"></span>
            <p className="footer-item-list">Избранное</p>
          </a>
        </div>
        <a href="#" className="nav-item">
          <IoSearch/>
          <p className="footer-item-list">Explore</p>
        </a>
        <div className="div-item">
          <a href="#" target="_blank">
            <IoCartOutline/>
            <p className="div-item-textes"></p>
            <p className="footer-item-list">Корзина</p>
          </a>
        </div>
        <div className="div-item">
          <a href="#" target="_blank">
            <MdPerson/>
            <p className="div-item-textes"></p>
            <p className="footer-item-list">Account</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ResHeader