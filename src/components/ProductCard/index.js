import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Timer from '../Timer';

import './styles.scss';

const ProductCard = ({ title, img, id, dateNow }) => {
  const { timeLimit } = useSelector((state) => state.timer);
  return (
    <div className="productCard">
      <img className="productCard__img" src={img} alt={title} />
      <p className="productCard__title">{title} </p>
      <div className="productCard__footer">
        <Timer id={id} className="productCard__counter" />
        {timeLimit.length &&
        timeLimit.find((e) => e.id === id).limit - dateNow >= 0 ? (
          <button
            type="button"
            className="productCard__button"
            onClick={() => console.log('working')}
          >
            Go to detail
          </button>
        ) : (
          <button type="button" className="productCard__button">
            Go to detail
          </button>
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
