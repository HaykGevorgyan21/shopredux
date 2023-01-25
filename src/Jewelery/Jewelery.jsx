import axios from '../API/API'
import { useState } from 'react';
import { useEffect } from 'react';
import classes from './Jewelery.module.scss'
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getJeweleryThunk } from '../Redux/Reducers/getJeweleryReducer';

function Jewelery() {
const {jewelery} = useSelector(state => state.jeweleryState)
const disptach = useDispatch()
 useEffect(() => {
   disptach(getJeweleryThunk())
 }, []);

 return (
   <>
     <div className={classes["image_background"]}>
       {jewelery.map((element) => {
         return (
           <div className={classes["container"]}>
             <img className={classes["image"]} src={element.image} />
             <span className={classes["category"]}>{element.category}</span>
             <span className={classes["Description"]}>
               {element.description.slice(0, 100) + "..."}
             </span>
             <p className={classes["price"]}>Price: ${element.price}</p>
             <button className={classes["add-card"]}>add to cart</button>
           </div>
         );
       })}
     </div>
   </>
 );
}

export default Jewelery;
