import React from 'react';
import Home from './pages/home/ui/Home.tsx';
import Login from './pages/login/ui/Login.tsx';
import Register from './pages/register/ui/Register.tsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./shared/header/ui/Header";
import Footer from './shared/footer/ui/Footer.tsx';
import Cart from './pages/cart/ui/Cart.tsx';
import {useState} from "react";
import ProductType from './shared/product-card/ui/ProductType.tsx';

function App() {
  const [cart, setCart] = useState<ProductType[]>([]);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
            <Route path="/login" element={<Login />} />
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
