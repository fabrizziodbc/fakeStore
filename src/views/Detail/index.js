import { useParams } from 'react-router-dom';
import useFetchProductById from '../../utils/hooks/useFetchProductById';
import './styles.scss';

const Detail = () => {
  const { id } = useParams();
  const { data, loading } = useFetchProductById(id);
  const { title, price, description, category, image, rating } = data;
  return (
    <div>
      {loading ? (
        'cargando'
      ) : (
        <div className="product">
          <p className="product__title">{title}</p>
          <p className="product__category">tags: {category}</p>
          <div className="product__rating">
            <p className="product__rate">{rating.rate} Stars</p>
            <p className="product__count">{rating.count} reviews</p>
          </div>
          <img src={image} alt={title} className="product__img" />
          <p className="product__price">S./ {price}</p>
          <p className="product__tag">About:</p>
          <p className="product__description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
