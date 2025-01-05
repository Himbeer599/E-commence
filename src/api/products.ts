import { fetchApi } from './index';

export interface Product {
  _id: string;
  id: string;
  name: string;
  price: number;
  description: string;
  productType: string;
  color: string;
  countryOfManufacture: string;
  energyEfficiency: string;
  image: string;
  rating: number;
  brand: string;
  cleaningType: string;
  feature: string;
}

interface PaginationParams {
  page: number;
  pageSize: number;
}

interface PaginatedResponse<T> {
  products: T[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

interface PriceRange {
  min: number;
  max: number;
}

export const productApi = {
  // 获取所有产品
  getProducts: async (params: PaginationParams): Promise<Product[]> => {
    return fetchApi(`/products/productslist?page=${params.page}&pageSize=${params.pageSize}`);
  },
  
  // 获取产品类型列表
  getProductTypes: async (): Promise<string[]> => {
    const response = await fetchApi('/products/types');
    return response;
  },
  
  // 搜索产品
  searchProducts: (searchTerm: string) => 
    fetchApi(`/products?search=${encodeURIComponent(searchTerm)}`),
  
  // 获取筛选器
  getFilters: (searchTerm?: string) => 
    fetchApi(`/products/filter${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ''}`),
  
  // 获取侧边栏产品
  getSideNavProducts: () => fetchApi('/products/sidenavi'),
  
  // 获取畅销产品
  getBestSellers: () => fetchApi('/products/bestseller'),
  
  getPriceRange: async (): Promise<PriceRange> => {
    const products = await fetchApi('/products/price-range');
    return products;
  },
}; 