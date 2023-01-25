import axios from '../API/API'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getMenDataThunk } from '../Redux/Reducers/getMenReducer';
import classes from './men.module.scss'

function Men() {
  const {menData} = useSelector(state => state.menDataState)
const disptach = useDispatch()

 useEffect(() => {
  disptach(getMenDataThunk())
 }, []);
 return (
   <>
     <div className={classes["image_background"]}>
       {menData.map((element) => {
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

export default Men;
