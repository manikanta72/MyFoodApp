import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('Home');
  const {getTotalCartAmount} = useContext(Storecontext);

  return (
    <div className='navbar'>
     <Link><h1>Mali<span>Cious</span></h1></Link>
      
      <ul className="navbar-menu">
        <Link to='' className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</Link>
        <a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
        <a href='#app-download' className={menu === "Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile app</a>
        <a href='#footer' className={menu === "Contact us" ? "active" : ""} onClick={() => setMenu("Contact us")}>Contact us</a>
      </ul>
      
    
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
         <Link to='/cart'> <img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;

