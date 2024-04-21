import React from 'react'
import "./hero.scss"

import shoes from "../../assets/images/shoes.png"

function Hero() {
  return (
    <div id="hero">
        <div className="container hero">
            <div className="hero__left">
                <h2 className="hero__title">
                    Adidas Men Running <br /> Sneakers
                </h2>
                <p className="hero__text">
                    Performance and design. Taken right to the edge.
                </p>
                <button className='hero__button'>SHOP NOW</button>
            </div>
            <div className="hero__right">
                <img src={shoes} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero