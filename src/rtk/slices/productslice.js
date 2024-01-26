import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
	const res = await fetch("https://fakestoreapi.com/products");
	const data = await res.json();
	return data;
});
export const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct:(state,action)=>{
      return state
    }
  },
  extraReducers : (builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      return action.payload;
    })
  }
})
export const {addProduct} = products.actions;
export default products.reducer;