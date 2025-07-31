import React, { useState } from 'react';
import './Home.css';
import Header from '../../Header/Header';
import ExploreMenu from '../../ExploreMenu/ExploreMenu';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import AppDownload from '../../../AppDownload/AppDownload';
const Home = () => {

    const [categeory,setCategeory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu categeory={categeory} setCategeory={setCategeory}/>
      <FoodDisplay categeory={categeory}/>
      <AppDownload/>
    </div>
  );
}

export default Home;
