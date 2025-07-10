import React from 'react';
import Home from './pages/home/ui/Home.tsx';
import Login from './pages/login/ui/Login.tsx';
import Register from './pages/register/ui/Register.tsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./shared/header/ui/Header";
import Footer from './shared/footer/ui/Footer.tsx';
import Cart from './pages/cart/ui/Cart.tsx';
import {useState, useEffect} from "react";
import ProductType from './shared/product-card/ui/ProductType.tsx';
import axios from "axios";

function App() {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('/api/check-auth', {withCredentials: true})
      .then(res => {
          if (res.data.user) setLoggedIn(true);
          setLoading(false)
      })
      .catch(() => {
          setLoggedIn(false)
          setLoading(false)
      });
  }, [])
  if (loading) {
    return <div className="text-green-600 text-center mt-10">Loading...</div>;
  }
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

