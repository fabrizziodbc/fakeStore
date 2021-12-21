import { configureStore } from '@reduxjs/toolkit';
import products from './slices/products';
import timer from './slices/timer';

export default configureStore({
  reducer: { products, timer },
});
