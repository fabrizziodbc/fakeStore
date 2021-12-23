import useUpdateTime from '../../utils/hooks/useUpdateTime';
import useFetchProducts from '../../utils/hooks/useFetchProducts';
import ProductCard from '../ProductCard';

import './style.scss';
import ProductSkeleton from '../ProductSkeleton';

const Gallery = () => {
  const { productList, loading } = useFetchProducts();
  const dateNow = useUpdateTime();
  return (
    <div>
      <div className="gallery">
        <h1 className="gallery__title">Products</h1>
        <div className="gallery__grid">
          {loading ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : (
            productList.map((e) => (
              <ProductCard
                key={e.id}
                title={e.title}
                img={e.image}
                id={e.id}
                dateNow={dateNow}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
