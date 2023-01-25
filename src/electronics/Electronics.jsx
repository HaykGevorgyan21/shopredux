import axios from "../API/API";
import { useEffect, useState } from "react";
import { getElectronicsThunk } from "../Redux/Reducers/getElectronicReducer";
import { useSelector, useDispatch } from "react-redux/es/exports";
import classes from "./electronics.module.scss";


export function Electronics() {


  const {electronics} = useSelector((state) => state.electronicsState);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getElectronicsThunk());

  }, []);

 

  return (
    <>
      <div className={classes["image_background"]}>
        {electronics.map((element) => {
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



