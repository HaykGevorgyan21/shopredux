import { useEffect } from "react";
import { useState } from "react";
import axios from "../API/API";
import classes from "./GetFullComponenet.module.scss";
import {getProductsThunk} from '../Redux/Reducers/getProductsReducer';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addCart } from "../Redux/Reducers/addCart";
function GetFullProduct() {
  const {products} = useSelector(state=> state.productsState);
  const disptach = useDispatch();

const addproduct = (product) => {
  disptach(addCart(product))
}

  useEffect(() => {
    disptach(getProductsThunk());
  }, []);

  return (
    <>
      <div className={classes["image_background"]}>
        {products.map((element) => {
          return (
            <div className={classes["container"]}>
              <img className={classes["image"]} src={element.image} />
              <span className={classes["category"]}>{element.category}</span>
              <span className={classes["Description"]}>
                {element.description.slice(0, 100) + "..."}
              </span>
              <p className={classes["price"]}>Price: ${element.price}</p>
              <button onClick={()=>addproduct(element)} className={classes["add-card"]}>add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetFullProduct;
