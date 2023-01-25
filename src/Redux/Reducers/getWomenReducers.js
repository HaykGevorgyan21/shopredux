import axios from "../../API/API";


const initialState ={
    WomenData: []
}

export const getWomenDataReducer = (state=initialState, action)=>{
    if(action.type === "GET_PRODUCTS"){
        return {
            ...state,
            WomenData: action.payload.data
        }
    }
    return state
}

export const getWomenDataThunk = ()=> async (dispatch)=>{
    const {data}= await axios.get("/products/category/women's clothing");
    dispatch({type: "GET_PRODUCTS", payload:{
        data
    }})
};

