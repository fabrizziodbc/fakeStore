import PropTypes from 'prop-types';

const Counter = ({ diff }) => {
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const timeDiffString = `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`}:${
    s > 9 ? s : `0${s}`
  }`;
  return <p>{diff >= 0 ? timeDiffString : 'Time out!'}</p>;
};

export default Counter;

Counter.propTypes = {
  diff: PropTypes.number.isRequired,
};
