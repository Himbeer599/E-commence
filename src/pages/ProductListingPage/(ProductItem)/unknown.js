import React, {useState, useEffect} from 'react'
import {Searchbox, SortSelect, Pagination} from '../../components/index'
import { useLocation, useNavigate } from 'react-router-dom';
import ProductItem from './(ProductItem)/ProductItem'

const ProductListingPage = ()=>{
    const [productsData, setProductsData]=useState([]);
    const [searchTerm, setSearchTerm] =useState('');
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] =useState([]);
    const [sortOption, setsortOption] =useState('');
    const [currentPage, setcurrentPage] =useState('1');
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://192.168.2.31:5000/api/products/productslist');
                const data = await response.json();
                setProductsData(data); 
                setFilteredProducts(data);
            } catch (error) {
                console.error('Error fetching products!:', error);
            }
        };
        fetchProducts();
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('search') || '';
        setSearchTerm(searchQuery);
        const searchedProducts = productsData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchedProducts(searchedProducts);//save searchedProducts否则报错
        setFilteredProducts(searchedProducts);
    },[location.search]);
    
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`?search=${searchTerm}`);
        }
    };
    const handleSort = (e) => {
        setsortOption(e.target.value);
    };

    useEffect(()=>{
            let updatedProducts = [...searchedProducts]; // Create a copy to avoid mutating the original array
            if (sortOption === 'price') {
                updatedProducts.sort((a, b) => a.price - b.price);
            } else if (sortOption === 'brand') {
                updatedProducts.sort((a, b) => a.brand.localeCompare(b.brand));
            } else if (sortOption === 'size') {
                updatedProducts.sort((a, b) => a.size - b.size);
            }
    },[searchTerm,sortOption])

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem-itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setcurrentPage(page);
    };
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div className="product-listing-page">
            <h1>Product Listing Page</h1>
            <Searchbox searchTerm={searchTerm} onSearch={handleSearch}/>
            <SortSelect sortOption={sortOption} onSort={handleSort}/>

            <div className="products">
                {currentItems.map(product=>(
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>

            <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductListingPage;

