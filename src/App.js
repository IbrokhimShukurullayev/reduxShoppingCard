import React from "react";
import Header from "./components/header/Header"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single"
import Footer from "./components/footer/Footer";
import Favourite from './pages/favouriteProduct/Favourite';
import {Routes , Route} from "react-router-dom"
import Karzinka from './pages/karzinka/Karzinka';
import Login from './pages/login/Login';
import Auth from './Auth/Auth';
import Admin from './pages/admin/Admin';
import Cantact from "./pages/cantact/Cantact";
import NotFound from "./components/notFound/NotFound";
import ResHeader from "./components/resHeader/ResHeader";

function App() {
  return (
    <div className="App">
        <Header/>
        <ResHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cantact" element={<Cantact />} />
        <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Auth />} >
        <Route path="/admin" element={<Admin />} />
      </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
