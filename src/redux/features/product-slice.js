import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data';

const initialState = {
  products:products,
  product:{}
}
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    single_product:(state,action) => {
      state.product = state.products.find(p => Number(p.id) === Number(action.payload))
    }
  }
})

export const {single_product} = productSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectProduct = (state) => state.products.product;
// export const selectProduct = (state,id) => {
//   const product = state.products.products.find(p => Number(p.id) === Number(id))
//   return product
// };
export default productSlice.reducer