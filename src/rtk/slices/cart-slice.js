import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart:(state,action)=>{
      const foundedProduct = state.find((product)=> product.id === action.payload.id);
      if(foundedProduct){
        foundedProduct.quantity +=1
      }else{
        const productClone = {...action.payload,quantity:1}
        state.push(productClone);
      }
    },
    deleteFromCart:(state,action)=>{
      return state.filter((product)=> product.id !== action.payload.id)
    },
    clear:(state,action)=>{
      return []
    },
  },
  extraReducers:(builder)=>{}
})

export const { addToCart ,deleteFromCart,clear} = cartSlice.actions;
export default cartSlice.reducer