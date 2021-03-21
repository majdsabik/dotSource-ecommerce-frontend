import axios from 'axios';

export function getAllProducts() {
  return axios.get('http://localhost:3000/product').then(response => {
    return response.data;
  });
}