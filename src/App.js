import React from "react";
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Card/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
