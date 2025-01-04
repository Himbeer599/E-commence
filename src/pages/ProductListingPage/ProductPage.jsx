import React, {useEffect, useReducer, useState} from 'react'
import { useImmerReducer } from 'use-immer';
// import Header,Footer组件
import Searchbar from './Searchbar/Searchbar'
import SearchResultsList from './SearchResultsList/SearchResultsList'
import FilterSidebar from './FilterSidebar/FilterSidebar'
import styles from './ProductPage.module.css' 
import { TbFlagSearch } from 'react-icons/tb';

const query_initailState = {
    query:'',
    isFirst:true,
    isLoading:false,
    err:null,
}
function queryReducer (state,action) {
    return{
        ...state,
        ...action.payload,
    };
}

const filter_initialarray = []
function filterReducer (draft, action) {
    switch (action.type) {
    case 'added': {
        draft.push({
            ...action.payload
        });
        break;
    }
    case "removeall": {
        draft.length=0;
        break;
    }
    case 'change':{
        switch(action.payload.type) { 
            case 'range': {
                draft.forEach(filter => {
                    if (filter.filtername === action.payload.filtername) {
                        filter.currentValue = action.payload.setvalue;
                        console.log("set", filter.filtername, "as", action.payload.setvalue);
                        return ;
                    }
                });
            break;
            }
            case "checkbox": {
                console.log("set checkbox", action.payload.filtername, "to", action.payload.setvalue);
                break;
            }
            default: {
                break;
            }
        }
        break;
    }

    case 'deleted': {
    return draft.filter(t => t.id !== action.id);
    }
    default: {
    throw Error('Unknown action: ' + action.type);
    }
    }
}
// https://zh-hans.react.dev/reference/react/useReducer#writing-the-reducer-function
const ProductPage = () => {
    const [querystate, querydispatch] = useReducer(queryReducer, query_initailState)
    const [filterarray, filterdispatch] = useImmerReducer(filterReducer, filter_initialarray)
    const [filteredResults, setFilteredResults] = useState([])
    const [filters,setFilters] =  useState([])
    const searchTerm = querystate.query
    
    //将added的reducer封装成一个函数，随时可以用函数调用
    function handleAddFilter(filter) {
        filterdispatch({
            type: 'added',
            payload:{
                ...filter,
            }
        });
    }
    function handleRemoveAllFilter() {
        filterdispatch({
            type: 'removeall'
        });
    }
    function handleChange (type, name, value){
        filterdispatch({
            type: 'change',
            payload:{
                type: type,
                filtername: name,
                setvalue: value,
            }
        });
    }

    useEffect(() => {
        const fetchData = async (searchTerm) => {
            try {
                console.log('searchTerm', searchTerm);
                // const response = await fetch('http://192.168.2.52:5000/api/products');
                const response = await fetch(`http://192.168.2.52:5000/api/products?search=${encodeURIComponent(searchTerm)}`);
                const productsData = await response.json();
                console.log('backend data based on searchquery:', productsData);
                
                const filterResponse = await fetch(`http://192.168.2.52:5000/api/products/filter?search=${encodeURIComponent(searchTerm)}`);
                if (!filterResponse.ok) {
                    // throw new Error('Failed to fetch filter');
                    return;
                }
                const filterData = await filterResponse.json();
                console.log('filterresponse from back:', filterData); 
                const newfilters = filterData.map((filter) => {
                    switch (filter.type) {
                        case "range":
                            return {
                                ...filter
                            };
                
                        case "checkbox":
                            return {
                                filtername: filter.filtername,
                                type: filter.type,
                                options: filter.options.map(option => ({
                                    name: option,
                                    checked: false
                                }))
                            };
                        default:
                            console.warn(`Unknown filter type: ${filter.type}`);
                            return null;
                    }
                });
                console.log("newfilters", newfilters);
                handleRemoveAllFilter();
                newfilters.map((filter) => (
                    handleAddFilter(filter)
                ))
            } catch (error) {
                console.error('Error fetching products!:', error);
                querydispatch({
                    type:'setErr',
                    payload:{ 
                        err:error.message,
                    },
                });
            } finally {
                // console.log("1111111111111111111111");
                querydispatch({
                            type:'setisLoading',
                            payload: { 
                                isLoading:false,
                            },
                        });
            }
        };
        fetchData(querystate.query);
    }, [querystate.query]);

    return (
    <div className={styles.productingListingPage}>
        <div className="search-bar-container">
            <Searchbar querydispatch={querydispatch} querystate={querystate}/>
        </div>
            <h2 className={styles.sum}>In total:{filteredResults.length}</h2>
            {filteredResults.length > 0 && <h2 className={styles.results}>Search Results</h2>}
        <div className={styles.resultsandfilter}>
            <div className="filter-sidebar-container">
                <FilterSidebar onChange={handleChange} filterstate={filterarray}/>
            </div>
            <div className="search-results-list-container">
                <SearchResultsList  querystate={querystate}  filteredResults={filteredResults}/>
            </div>
        </div>
    </div>
    )
}

export default ProductPage
