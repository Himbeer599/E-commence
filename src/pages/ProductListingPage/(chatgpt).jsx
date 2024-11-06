// ProductListingPage.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Searchbar from './Searchbar';
import FilterSidebar from './FilterSidebar';
import ProductList from './ProductList';
// 用户在 Searchbar 输入关键词，触发 handleSearch 更新 searchQuery。
// 用户在 FilterSidebar 选择筛选条件，触发 handleFilterChange 更新 filters。
// ProductListingPage 根据 searchQuery 和 filters 计算 filteredProducts。
// ProductList 组件根据 filteredProducts 重新渲染产品列表。

const ProductListingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        brand: [],
        color: [],
        priceRange: [0, 100],
    });

    const handleSearch = (query) => setSearchQuery(query);

    const handleFilterChange = (filterType, selectedOptions) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: selectedOptions,
        }));
    };

    // Assuming filterProducts is a function that filters products based on searchQuery and filters
    const filteredProducts = filterProducts(searchQuery, filters);

    return (
        <>
            <Header />
            <div className="content">
                <Searchbar onSearch={handleSearch} />
                <div className="main">
                    <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
                    <ProductList products={filteredProducts} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductListingPage;
