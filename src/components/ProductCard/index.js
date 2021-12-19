import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ title, img }) => {
  return (
    <div className="productCard">
      <img className="productCard__img" src={img} alt={title} />
      <p className="productCard__title">{title} </p>
      <div className="productCard__footer">
        <span className="productCard__counter">Aquí va el contador</span>
        <button type="button" className="productCard__button">
          Go to detail
        </button>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductCard;
