import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../../store/slices/timer';

const useUpdateTime = () => {
  const { dateNow } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  useEffect(() => {
    const countDownTimer = setTimeout(() => {
      dispatch(updateTime());
    }, 1000);
    return () => clearTimeout(countDownTimer);
  }, [dispatch, dateNow]);
  return dateNow;
};

export default useUpdateTime;
