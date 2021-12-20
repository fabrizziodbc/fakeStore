import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/products';
import ProductCard from '../ProductCard';

import './style.scss';

const Gallery = () => {
  const { productList } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const title = 'Nombre de la galería';
  return (
    <div className="gallery">
      <h1 className="gallery__title">{title}</h1>
      <div className="gallery__grid">
        {productList.map((e) => (
          <ProductCard key={e.id} title={e.title} img={e.image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
