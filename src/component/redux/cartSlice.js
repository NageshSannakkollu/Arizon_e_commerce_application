import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) =>{
             state.push(action.payload)
        },
        deleteCartProduct:(state,action) => {
            return state.filter(product => product.id !== action.payload)
        },
        decreaseQty:(state,action) => {
            //console.log(action.payload)
            const product = state.find(item => item.id === action.payload)
            if(product){
                if(product.quantity > 1){
                    product.quantity -= 1
                }
                else{
                    return state.filter(item => item.id !== action.payload)
                }
            }
        },
        increaseQty:(state,action) => {
            const product = state.find(item => item.id === action.payload)
            if(product){
                product.quantity += 1;
            }else{
                state.push({...action.payload,quantity:1})
            }
        }
    }
})

export const {addToCart,deleteCartProduct,increaseQty,decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;