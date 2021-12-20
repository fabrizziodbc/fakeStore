import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: { productList: [] },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { setProductList } = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = () => (dispatch) =>
  fetch('https://fakestoreapi.com/products?limit=9')
    .then((res) => res.json())
    .then((data) => dispatch(setProductList(data)))
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
