import React, {useEffect, useReducer, useState} from 'react'
// import Header,Footer组件
import Searchbar from './Searchbar/Searchbar'
import SearchResultsList from './SearchResultsList/SearchResultsList'
import FilterSidebar from './FilterSidebar/FilterSidebar'
import styles from './ProductPage.module.css' 

const query_initailState = {
    query:'',
    isFirst:true,
    isLoading:false,
    err:null,
}
const filter_initialState = {
    brand:[],
    color:[],
    productType:[],
    energyEfficiency:[],
    country:[],
    priceRange:[0,10000],
}
function queryReducer (state,action) {
    switch (action.type) {
        case 'setQuery':
            return{
                ...state,
                query:action.payload,
            };
        case 'setisFirst':
            return{
                ...state,
                isFirst:action.payload,
            };
        case 'setisLoading':
            return{
                ...state,
                isLoading:action.payload,
            };
        case 'setErr':
            return{
                ...state,
                err:action.payload,
            };
        case 'setMultiple':
            return{
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

function filterReducer (state,action) {
    switch (action.type) {
        case 'updatedFilterOption':
            return {
                ...state,
                [action.filterName] : action.payload,
            };
        case 'resetFilters':
            return filter_initialState;
        default:
            return state;
    }
}

const ProductPage = () => {
    const [querystate, querydispatch] = useReducer(queryReducer, query_initailState)
    const [filterstate, filterdispatch] = useReducer(filterReducer, filter_initialState)

    const {query, isFirst, isLoading, err} = querystate
    const {brand,color,productType,energyEfficiency,country,priceRange} = filterstate
    const [filteredResults, setFilteredResults] = useState([])
    
    const fetchData = async (searchTerm) => {
        try {
            const response = await fetch('http://192.168.2.31:5000/api/products/productslist');
            const data = await response.json();
            console.log('backend data:', data);
            console.log('searchTerm', searchTerm);
            setFilteredResults(data.filter((product)=>{
                const matchesBrand = product?.brand?.toLowerCase() === searchTerm.toLowerCase();
                const matchesName = product?.productType?.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesBrand || matchesName;
            }));
            console.log('Filtered Results:', filteredResults);
        }catch (error) {
            console.error('Error fetching products!:', error);
            querydispatch({
                type:'setErr',
                payload:{ 
                    err:error.message,
                },
            });
        } finally {
            console.log("1111111111111111111111");
            querydispatch({
                        type:'setisLoading',
                        payload: false,
                    });
        }
    };

    useEffect(()=>{
        fetchData(query);
    },[query,brand,color,productType,energyEfficiency,country,priceRange]);

    return (
    <div className={styles.productingListingPage}>
        <div className="search-bar-container">
            <Searchbar querydispatch={querydispatch} querystate={querystate}/>
        </div>
            <h2 className={styles.sum}>In total:{filteredResults.length}</h2>
            <FilterSidebar filterdispatch={filterdispatch} filterstate={filterstate}/>
            <SearchResultsList  querystate={querystate}  filteredResults={filteredResults}/>
    </div>
    )
}

export default ProductPage
