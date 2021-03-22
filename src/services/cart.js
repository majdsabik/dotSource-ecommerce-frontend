import axiosApi from '../api/axiosApi';

export async function getCart() {
  const result = await axiosApi.get('/cart');
  return result.data;
}

export async function updateCart(cart) {
  const cartId = cart._id;
  const result = await axiosApi.put('/cart/' + cartId, cart);
  return result.data;
}
