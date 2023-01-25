import axios from '../../API/API'


const initialState = {
    jewelery: []
}

export const getJeweleryReducer = (state = initialState, action) => {

  if (action.type === "GET_PRODUCTS") {
        return {
            ...state,
            jewelery: action.payload.data
        }
  }
  return state;
};

export const getJeweleryThunk = () => async (dispatch) => {
  const { data } = await axios.get("/products/category/jewelery");
  dispatch({ type: "GET_PRODUCTS", payload:{
    data
  } });
};