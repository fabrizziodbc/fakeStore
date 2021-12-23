const getProductById = async (id) => {
  const productDetail = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await productDetail.json();
  return data;
};
const getProducts = async () => {
  const productDetail = await fetch(`https://fakestoreapi.com/products/`);
  const data = await productDetail.json();
  return data;
};
export { getProductById, getProducts };
