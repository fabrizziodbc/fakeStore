import PropTypes from 'prop-types';
import useDispatchLimit from '../../utils/hooks/useDispatchLimit';
import useTimer from '../../utils/hooks/useTimer';

const Timer = ({ id }) => {
  useDispatchLimit(id);
  const timer = useTimer(id);
  return <p>{timer}</p>;
};
Timer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Timer;
