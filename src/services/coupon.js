import axiosApi from '../api/axiosApi';

export async function validateCoupon(code) {
  try {
    const result = await axiosApi.get('/coupon/' + code);
    return result.data;
  } catch (e) {
    return null;
  }
}
