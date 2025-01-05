import React, { useEffect } from 'react';
import { Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { productApi } from '../../../api/products';
import { setSearchResults, setIsLoading, setProductTypes } from '../../../store/filterSlice';
import { RootState } from '../../../store';
import styles from './Searchbar.module.css';

const { Search } = Input;

const Searchbar: React.FC = () => {
  const dispatch = useDispatch();
  const productTypes = useSelector((state: RootState) => state.filter.productTypes);

  // 获取产品类型
  useEffect(() => {
    const fetchProductTypes = async () => {
      try {
        const types = await productApi.getProductTypes();
        dispatch(setProductTypes(types));
      } catch (error) {
        console.error('Error fetching product types:', error);
      }
    };

    fetchProductTypes();
  }, [dispatch]);

  // 处理搜索
  const handleSearch = async (value: string) => {
    try {
      dispatch(setIsLoading(true));
      const results = await productApi.searchProducts(value);
      dispatch(setSearchResults(results));
    } catch (error) {
      console.error('Error searching products:', error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  // 处理类别选择
  const handleCategoryChange = async (category: string) => {
    try {
      dispatch(setIsLoading(true));
      const results = category === 'all' 
        ? await productApi.getProducts({ page: 1, pageSize: 10 })
        : await productApi.searchProducts(category);
      dispatch(setSearchResults(results));
    } catch (error) {
      console.error('Error fetching products by category:', error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className={styles.searchbarContainer}>
      <Select
        defaultValue="all"
        style={{ width: 200 }}
        onChange={handleCategoryChange}
        options={[
          { value: 'all', label: 'All Categories' },
          ...productTypes.map(type => ({
            value: type,
            label: type
          }))
        ]}
        className={styles.categorySelect}
      />
      <Search
        placeholder="Search products..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        className={styles.searchInput}
      />
    </div>
  );
};

export default Searchbar; 