import React from "react";
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Card/>
      <Hero/>
    </div>
  );
}

export default App;
