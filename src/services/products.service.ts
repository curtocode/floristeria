// src/services/products.service.ts
import apiClient from './apiClient';
import type { Product } from '../types/product.types';

export const productsService = {
  /**
   * Obtiene el listado completo de productos
   * Endpoint: /product
   */
  getAllProducts: async (): Promise<Product[]> => {
    
    const response = await apiClient.get<Product[]>('/product');
    
    // console.log("Datos de la API:", response.data);
    
    return response.data;
  },

  /**
   * Obtiene el detalle de un producto específico
   * Endpoint: /product/:id
   */
  getProductById: async (id: string): Promise<Product> => {
    const response = await apiClient.get<Product>(`/product/${id}`);
    return response.data;
  }
};