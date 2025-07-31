import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Navbar/pages/Home/Home';
import Cart from './components/Navbar/pages/Cart/Cart';
import Placeorder from './components/Navbar/pages/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar/Navbar';
const App = () => {

  const[showLogin,setShowLogin] = useState(false)


  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
      </div>
      <Footer />

    </>

  );
}

export default App;
