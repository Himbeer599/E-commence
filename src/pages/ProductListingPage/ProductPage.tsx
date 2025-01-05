import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import Searchbar from './Searchbar/Searchbar';
import SearchResultsList from './SearchResultsList/SearchResultsList';
import FilterSidebar from './FilterSidebar/FilterSidebar';
import { productApi } from '../../api/products';
import { setSearchResults, setFilteredResults, setIsLoading } from '../../store/filterSlice';
import styles from './ProductPage.module.css';

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state: RootState) => state.filter.searchResults);
  const priceRange = useSelector((state: RootState) => state.filter.priceRange);
  const selectedBrands = useSelector((state: RootState) => state.filter.selectedBrands);
  const productTypes = useSelector((state: RootState) => state.filter.productTypes);

  // 组合筛选函数
  const applyFilters = () => {
    let filteredProducts = [...searchResults];

    // 应用产品类型筛选
    if (productTypes.length > 0) {
      filteredProducts = filteredProducts.filter(
        product => productTypes.includes(product.productType)
      );
    }

    // 应用价格范围筛选
    if (priceRange && priceRange.length === 2) {
      filteredProducts = filteredProducts.filter(
        product => 
          product.price >= priceRange[0] && 
          product.price <= priceRange[1]
      );
    }

    // 应用品牌筛选
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(
        product => selectedBrands.includes(product.brand)
      );
    }

    dispatch(setFilteredResults(filteredProducts));
  };

  // 监听筛选条件变化
  useEffect(() => {
    applyFilters();
  }, [productTypes, priceRange, selectedBrands]);

  // 初始加载
  useEffect(() => {
    const fetchInitialProducts = async () => {
      try {
        dispatch(setIsLoading(true));
        const products = await productApi.getProducts({ page: 1, pageSize: 10 });
        dispatch(setSearchResults(products));
      } catch (error) {
        console.error('Error fetching initial products:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchInitialProducts();
  }, [dispatch]);

  return (
    <Layout className={styles.productPage}>
      <Searchbar />
      <div className={styles.mainContent}>
        <FilterSidebar />
        <SearchResultsList />
      </div>
    </Layout>
  );
};

export default ProductPage; 