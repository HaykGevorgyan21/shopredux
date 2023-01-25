

export const addCart = (product)=>{
    return {
        type: "ADDCART",
        payload: product
    }
}

export const deletitem = (product)=>{
    return {
        type: "DELITEM",
        payload: product
    }
}