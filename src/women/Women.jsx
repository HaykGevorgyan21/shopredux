import axios from "../API/API";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getWomenDataThunk } from "../Redux/Reducers/getWomenReducers";
import classes from "./Women.module.scss";

function Women() {
  const { WomenData } = useSelector((state) => state.womenDataState);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getWomenDataThunk());
  }, []);

  return (
    <>
      <div className={classes["image_background"]}>
        {WomenData.map((element) => {
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

export default Women;
