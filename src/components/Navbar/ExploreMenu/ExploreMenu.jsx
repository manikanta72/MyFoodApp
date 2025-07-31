import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../../assets/assets';
const ExploreMenu = ( {categeory,setCategeory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore our menu</h1>
       <p className='explore-menu-text'>Welcome to the our restaurant!! Here are the some most samples of every products. Here we are having all types of food like south north east and west sides.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
              return(
                <div onClick={()=>setCategeory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={categeory===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
              )
            })}
        </div>
        <hr />
    </div>
  );
}

export default ExploreMenu;
