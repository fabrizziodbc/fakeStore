import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeLimit } from '../../store/slices/timer';
import Counter from '../Counter';

const Timer = ({ id }) => {
  const { timeLimit } = useSelector((state) => state.timer);
  const { dateNow } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    const limit = dateNow + Math.floor(Math.random() * (80000 - 3000)) + 3000;
    dispatch(setTimeLimit({ id, limit }));
  }, []);

  return (
    <div>
      {timeLimit.length && (
        <Counter diff={timeLimit.find((e) => e.id === id).limit - dateNow} />
      )}
    </div>
  );
};
Timer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Timer;
