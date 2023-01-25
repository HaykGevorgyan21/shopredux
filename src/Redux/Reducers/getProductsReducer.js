import axios from "../../API/API";


const initialState = {
    products: []
}

export const getProductsReducer = (state = initialState, action) => {

  if (action.type === "GET_PRODUCTS") {
        return {
            ...state,
            products: action.payload.data
        }
  }
  return state;
};

export const getProductsThunk = () => async (dispatch) => {
  const { data } = await axios.get("/products");
  dispatch({ type: "GET_PRODUCTS", payload:{
    data
  } });
};
