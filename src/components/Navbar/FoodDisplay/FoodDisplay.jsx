import React, { useContext } from 'react';
import './FoodDisplay.css';
import { Storecontext } from '../../../context/Storecontext';
import FoodItem from '../../FoodItem/FoodItem';
const FoodDisplay = ({categeory}) => {

    const {food_list} = useContext(Storecontext)
  return (
    <div className='fooddisplay' id='fooddisplay'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          {console.log(categeory,item.categeory);}
          if(categeory==="All" || categeory===item.categeory) {
          return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;



