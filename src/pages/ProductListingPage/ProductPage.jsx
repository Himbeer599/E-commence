import React, {useEffect, useReducer, useState} from 'react'
// import Header,Footer组件
import Searchbar from './Searchbar/Searchbar'
import SearchResultsList from './SearchResultsList/SearchResultsList'
import FilterSidebar from './FilterSidebar/FilterSidebar'
import styles from './ProductPage.module.css' 

const initialState ={
    search:{
        query:'',
        isFirst:true,
        isLoading:false,
        err:null,
    },
    filters:{
        brand:[],
        color:[],
        productType:[],
        energyEfficiency:[],
        country:[],
        priceRange:[0,10000],
    },
}

function reducer (state,action){
    switch (action.type) {
        case 'setSearchQuery':
            return {
                ...state,
                search: action.payload,
            };
        case 'setFilter':
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [action.filterName]:action.payload
                }
            };
        default:
            return state;
    }
}

const ProductPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {search, filters} = state;
    const {query, isFirst, isLoading, err} = search;
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
            dispatch({
                type:'setSearchQuery',
                payload:{ 
                    ...state.search,
                    err:error.message,
                },
            });
        } finally {
            // console.log("1111111111111111111111");
            dispatch({
                        type:'setSearchQuery',
                        payload:{ 
                            ...state.search,
                            isLoading:false,
                        },
                    });
        }
    };
    useEffect(()=>{
        fetchData(query);
    },[query,filters]);
    return (
    <div className={styles.productingListingPage}>
                <div className="search-bar-container">
                <Searchbar dispatch={dispatch} search={search}/>
                </div>
                <h2 className={styles.sum}>In total:{filteredResults.length}</h2>
                <FilterSidebar dispatch={dispatch} filters={filters}/>
                <SearchResultsList  props={state}  filteredResults={filteredResults}/>
    </div>
    )
}

export default ProductPage
