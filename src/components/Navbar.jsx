import React from 'react';
import '../components/navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="navbar-title">Mi App</h1>
      </div>
      <ul className="navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#carrito">Carrito</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
