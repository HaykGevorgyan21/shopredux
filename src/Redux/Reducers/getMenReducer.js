import axios from '../../API/API'


const initialState = {
    menData: []
}

export const getMenDataReducer = (state = initialState, action) => {

  if (action.type === "GET_PRODUCTS") {
        return {
            ...state,
            menData: action.payload.data
        }
  }
  return state;
};

export const getMenDataThunk = () => async (dispatch) => {
  const { data } = await axios.get("/products/category/men's clothing");
  dispatch({ type: "GET_PRODUCTS", payload:{
    data
  } });
};