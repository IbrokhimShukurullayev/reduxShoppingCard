import React from "react";
import Header from "./components/header/Header"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single"
import Footer from "./components/footer/Footer";
import Favourite from './pages/favouriteProduct/Favourite';
import {Routes , Route} from "react-router-dom"
import Karzinka from './pages/karzinka/Karzinka';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/karzinka" element={<Karzinka />} />
        {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/" element={<Auth />} >
        <Route path="/admin" element={<Admin />} />
      </Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
