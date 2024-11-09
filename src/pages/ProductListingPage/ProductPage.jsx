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
    // switch (action.type) {
    //     case 'setQuery':
    //         return{
    //             ...state,
    //             query:action.payload,
    //         };
    //     case 'setisFirst':
    //         return{
    //             ...state,
    //             isFirst:action.payload,
    //         };
    //     case 'setisLoading':
    //         return{
    //             ...state,
    //             isLoading:action.payload,
    //         };
    //     case 'setErr':
    //         return{
    //             ...state,
    //             err:action.payload,
    //         };
    //     case 'setMultiple':
    //         return{
    //             ...state,
    //             ...action.payload,
    //         };
    //     default:
    //         return state;
    // }
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

      case 'changed': {
        const index = draft.findIndex(t =>
          t.id === action.task.id
        );
        draft[index] = action.task;
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

    // const {query, isFirst, isLoading, err} = querystate
    // const {brand,color,productType,energyEfficiency,country,priceRange} = filterstate
    const [filteredResults, setFilteredResults] = useState([])
    
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
    const filters = [
        {
            filtername:"color",
            options: [
                {'name':'red', checked: false},
                {'name':'blue', checked: false},
            ]
        },
        {
            filtername:"brand",
            options: [
                {'name':'Siemens', checked: false},
                {'name':'Bosch', checked: false},
            ] 
        },
        {
            filtername:"brand1",
            options: [
                {'name':'Siemens2', checked: false},
                {'name':'Bosch3', checked: false},
            ] 
        },
    ]
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
            handleRemoveAllFilter();
            filters.map((filter) => (
                handleAddFilter(filter)
            ))


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
                        payload: { 
                            isLoading:false,
                        },
                    });
        }
    };

    useEffect(()=>{
        fetchData(querystate.query);
    },[querystate.query]);

    return (
        
    <div className={styles.productingListingPage}>
        <div className="search-bar-container">
            <Searchbar querydispatch={querydispatch} querystate={querystate}/>
        </div>
            <h2 className={styles.sum}>In total:{filteredResults.length}</h2>
            <FilterSidebar filterdispatch={filterdispatch} filterstate={filterarray}/>
            <SearchResultsList  querystate={querystate}  filteredResults={filteredResults}/>
    </div>
    )
}

export default ProductPage
