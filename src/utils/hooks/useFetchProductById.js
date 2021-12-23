import { useState, useEffect } from 'react';
import { getProductById } from '../getProducts';

const useFetchProductById = (id) => {
  const [state, setState] = useState({ data: [], loading: true });
  useEffect(() => {
    getProductById(id).then((dta) => setState({ data: dta, loading: false }));
  }, [id]);
  return state;
};

export default useFetchProductById;
