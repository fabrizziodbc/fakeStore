import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from '../Timer';
import './styles.scss';

const ProductCard = ({ title, img, id, dateNow }) => {
  const { timeLimit, loading } = useSelector((state) => state.timer);
  return (
    <div className="productCard">
      <img className="productCard__img" src={img} alt={title} />
      <p className="productCard__title">{title} </p>
      <div className="productCard__footer">
        <Timer id={id} className="productCard__counter" />
        {!loading && (
          <Link
            to={
              timeLimit.find((e) => e.id === id).limit - dateNow >= 0 &&
              `/detalle/${id}`
            }
          >
            <button type="button" className="productCard__button">
              Go to detail
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dateNow: PropTypes.number.isRequired,
};

export default ProductCard;
