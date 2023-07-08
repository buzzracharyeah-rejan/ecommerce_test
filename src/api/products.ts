import axios from '../utils/axios';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type Rating = {
  rate: number;
  count: number;
};

export const getProducts = (): Promise<Product[]> => {
  return axios.get('/products', { method: 'get' }).then((resp) => resp.data);
};

export const getProduct = (id: string): Promise<Product> => {
  return axios.get(`/products/${id}`, { method: 'get' }).then((resp) => resp.data);
};
