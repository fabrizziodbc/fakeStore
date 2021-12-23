import { useSelector } from 'react-redux';
import getTimeString from '../getTimeString';

const useTimer = (id) => {
  const { timeLimit, loading } = useSelector((state) => state.timer);
  let rta;
  if (loading) {
    rta = '00:00:00';
  } else {
    rta = getTimeString(timeLimit.find((e) => e.id === id).limit - Date.now());
  }
  return rta;
};

export default useTimer;
