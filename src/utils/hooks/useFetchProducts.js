import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/slices/products';

const useFetchProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return data;
};

export default useFetchProducts;
