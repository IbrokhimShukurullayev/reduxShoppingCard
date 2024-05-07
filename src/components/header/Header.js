import React , {useState}  from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./header.scss"

import logo from "../../assets/images/logo.png"

import { MdArrowDropDown } from "react-icons/md";
import { IoPersonOutline , IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header() {

const [isShirnk, setIsShirnk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsShirnk(true);
      } else {
        setIsShirnk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const wishes = useSelector(state => state.wishlist.value)
    const karzinka = useSelector(state => state.karzinka.value)
  return (
    <>
      <div className={isShirnk ? 'header__top navbar-shirnk' : 'header__top'}>
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
            <Link to={`/admin`} className="person">
              <IoPersonOutline/>
              <p>My profile</p>
            </Link>
            <Link to={`/favourite`} className="like">
              <FaRegHeart/>
              <p>Wishlist</p>
              <span>{wishes.length}</span>
            </Link>
            <Link to={`/karzinka`} className="cart">
              <BsCart3/>
              <p>Items</p>
              <span>{karzinka.length  }</span>
            </Link>
            <div className="search">
              <p>$0.00</p>
              <IoSearchSharp/>
            </div>
          </div>
        </div>
      </div>
      <header className={isShirnk ? 'header navbar-shirnk' : 'header'}>
        <div className="nav container">
          <div className="nav__logo">
            <Link to={`/`}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="nav__list">
            <li className="nav__item"><Link to={`*`} className="nav__link active">HOME</Link></li>
            <li className="nav__item"><Link to={`*`} className="nav__link">BAGS</Link></li>
            <li className="nav__item"><Link to={`*`} className="nav__link">SNEAKERS</Link></li>
            <li className="nav__item"><Link to={`*`} className="nav__link links">BELT </Link></li>
            <li className="nav__item"><Link to={`/cantact`} className="nav__link links">CONTACT </Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header