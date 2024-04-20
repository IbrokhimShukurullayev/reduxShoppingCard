import React from 'react'
import "./header.scss"

import logo from "../../assets/images/logo.png"

import { MdArrowDropDown } from "react-icons/md";
import { IoPersonOutline , IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <>
      <div className="header__top">
        <div className="nav__top container">
          <div className='nav__top__language'>
            <div>
              EN <MdArrowDropDown/>
            </div>
            <div>
              USD <MdArrowDropDown/>
            </div>
          </div>
          <div className="nav__top__right">
            <div className="person">
              <IoPersonOutline/>
              <p>My profile</p>
            </div>
            <div className="like">
              <FaRegHeart/>
              <p>Wishlist</p>
              <span>3</span>
            </div>
            <div className="cart">
              <BsCart3/>
              <p>Items</p>
              <span>3</span>
            </div>
            <div className="search">
              <p>$0.00</p>
              <IoSearchSharp/>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="nav container">
          <div className="nav__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link active">HOME</a></li>
            <li className="nav__item"><a href="#" className="nav__link">BAGS</a></li>
            <li className="nav__item"><a href="#" className="nav__link">SNEAKERS</a></li>
            <li className="nav__item"><a href="#" className="nav__link links">BELT </a></li>
            <li className="nav__item"><a href="#" className="nav__link links">CONTACT </a></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header