import React from 'react'
import "./Home.scss"

import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";
import Homes from '../../components/homes/Homes';

function Home() {
  return (
    <div>
      <Banner/>
      <Homes/>
      <Card/>
      <Hero/>
    </div>
  )
}

export default Home