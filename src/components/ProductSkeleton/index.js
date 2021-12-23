import './styles.scss';

const ProductSkeleton = () => {
  return (
    <div className="productSkeleton">
      <span className="productSkeleton__img skeleton" />
      <p className="productSkeleton__title skeleton"> </p>
      <div className="productSkeleton__footer">
        <span className="productSkeleton__counter skeleton" />
        <span className="productSkeleton__button skeleton" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
