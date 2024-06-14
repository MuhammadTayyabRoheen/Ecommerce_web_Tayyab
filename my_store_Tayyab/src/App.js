import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Contact from './modules/Contact';
import About from './modules/About/About';
import Login from './modules/Login';
import Signup from './modules/Signup';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="About" element={<About/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
