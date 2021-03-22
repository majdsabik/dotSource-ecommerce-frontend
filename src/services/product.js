import axiosApi from '../api/axiosApi';

export async function getAllProducts() {
  const result = await axiosApi.get('/product');
  return result.data;
}
