import React from 'react';
import { Pagination, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import SearchResult from './SearchResult/SearchResult';
import { RootState } from '../../../store';
import { setCurrentPage, setPageSize } from '../../../store/filterSlice';
import styles from './SearchResultsList.module.css';

const SearchResultsList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    searchResults,
    currentPage,
    pageSize,
    total,
    isLoading,
    priceRange,
    selectedBrands
  } = useSelector((state: RootState) => state.filter);

  // 筛选结果
  const filteredResults = searchResults.filter(product => {
    const price = product.price;
    const inPriceRange = price >= priceRange[0] && price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return inPriceRange && matchesBrand;
  });

  const handlePageChange = (page: number, size?: number) => {
    dispatch(setCurrentPage(page));
    if (size) {
      dispatch(setPageSize(size));
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.searchResultsList}>
      <div className={styles.resultsList}>
        {filteredResults
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map(result => (
            <SearchResult key={result._id} result={result} />
          ))}
      </div>
      
      <div className={styles.pagination}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredResults.length}
          onChange={handlePageChange}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
};

export default SearchResultsList; 