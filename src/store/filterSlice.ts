import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../api/products';

// 添加 Filter 相关的接口定义
export interface FilterOption {
  value: string;
  label: string;
}

export interface Filter {
  id: string;
  type: 'range' | 'checkbox';
  filtername: string;
  currentValue?: number[];
  options?: FilterOption[];
  value?: string;
}

interface FilterState {
  filters: Filter[];
  priceRange: number[];
  selectedBrands: string[];
  productTypes: string[];
  searchResults: Product[];
  filteredResults: Product[];
  currentPage: number;
  pageSize: number;
  total: number;
  isLoading: boolean;
}

const initialState: FilterState = {
  filters: [],
  priceRange: [0, 1000],
  selectedBrands: [],
  productTypes: [],
  searchResults: [],
  filteredResults: [],
  currentPage: 1,
  pageSize: 10,
  total: 0,
  isLoading: false
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
    setProductTypes: (state, action: PayloadAction<string[]>) => {
      state.productTypes = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Product[]>) => {
      state.searchResults = action.payload;
      state.filteredResults = action.payload;
    },
    setFilteredResults: (state, action: PayloadAction<Product[]>) => {
      state.filteredResults = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    // ... 其他 reducers
  },
});

export const {
  setPriceRange,
  setProductTypes,
  setSearchResults,
  setFilteredResults,
  setCurrentPage,
  setPageSize,
  setTotal,
  setIsLoading,
} = filterSlice.actions;

export default filterSlice.reducer; 