import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeLimit } from '../../store/slices/timer';

const useDispatchLimit = (id) => {
  const { dateNow } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    const limit = dateNow + Math.floor(Math.random() * (80000 - 3000)) + 3000;
    dispatch(setTimeLimit({ id, limit }));
  }, []);
};

export default useDispatchLimit;
