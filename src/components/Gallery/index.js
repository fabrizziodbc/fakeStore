import useUpdateTime from '../../utils/hooks/useUpdateTime';
import useFetchProducts from '../../utils/hooks/useFetchProducts';
import ProductCard from '../ProductCard';

import './style.scss';

const Gallery = () => {
  const { productList, loading } = useFetchProducts();
  const dateNow = useUpdateTime();
  return (
    <div>
      {loading ? (
        <p>Cargando</p>
      ) : (
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
      )}
    </div>
  );
};

export default Gallery;
