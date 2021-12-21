import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/products';
import { updateTime } from '../../store/slices/timer';
import ProductCard from '../ProductCard';

import './style.scss';

const Gallery = () => {
  const { productList } = useSelector((state) => state.products);
  const { dateNow } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    const countDownTimer = setTimeout(() => {
      dispatch(updateTime());
    }, 1000);
    return () => clearTimeout(countDownTimer);
  }, [dispatch, dateNow]);
  return (
    <div className="gallery">
      <h1 className="gallery__title">Products</h1>
      <div className="gallery__grid">
        {productList.map((e) => (
          <ProductCard
            key={e.id}
            title={e.title}
            img={e.image}
            id={e.id}
            dateNow={dateNow}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
