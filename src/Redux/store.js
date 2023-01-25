import { getProductsReducer } from "./Reducers/getProductsReducer";
import { configureStore } from "@reduxjs/toolkit";
import { getElectronicsReducer } from "./Reducers/getElectronicReducer";
import { getJeweleryReducer } from "./Reducers/getJeweleryReducer";
import { getMenDataReducer } from "./Reducers/getMenReducer";
import { getWomenDataReducer } from "./Reducers/getWomenReducers";
import rootReducers from "./Reducers";

export const store = configureStore({
    reducer: {
        productsState: getProductsReducer,
        electronicsState: getElectronicsReducer,
        jeweleryState: getJeweleryReducer,
        menDataState: getMenDataReducer,
        womenDataState: getWomenDataReducer,
        rootReducers: rootReducers
        
    }
})


