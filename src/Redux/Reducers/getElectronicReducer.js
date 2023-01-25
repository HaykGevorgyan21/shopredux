import axios from '../../API/API'


const initialState = {
    electronics: []
}

export const getElectronicsReducer = (state = initialState, action) => {

  if (action.type === "GET_PRODUCTS") {
        return {
            ...state,
            electronics: action.payload.data
        }
  }
  return state;
};

export const getElectronicsThunk = () => async (dispatch) => {
  const { data } = await axios.get("/products/category/electronics");
  dispatch({ type: "GET_PRODUCTS", payload:{
    data
  } });
};