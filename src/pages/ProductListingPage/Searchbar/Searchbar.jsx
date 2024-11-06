import React, {useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'
import { useDebouncedCallback } from 'use-debounce';

const Searchbar = ({dispatch,state}) => {
    console.log("State in Searchbar:", state);
    //下述解构时一定要按照initial Statae里面的位置顺序进行结构，右边要加上search节点
    const { query, isFirst, isLoading ,err} = state.search;
    // console.log("query after jiegou",query);
    const fetchData = async (searchTerm) => {
        try {
            const response = await fetch('http://192.168.2.31:5000/api/products/productslist');
            const data = await response.json();
            console.log('backend data:', data);
            const filtereddata = data.filter((product)=>{
                const matchesBrand = product?.brand?.toLowerCase() === searchTerm;
                const matchesName = product?.name?.toLowerCase().includes(searchTerm);
                return matchesBrand || matchesName;
            });
            // console.log('Filtered Results:', filtereddata);
            dispatch({
                type:'setFilteredResults',
                payload:filtereddata,//这里要和ProductPage里面payload节点一起理解
                })
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

    const debouncedFetchData = useDebouncedCallback ((searchTerm)=>{
        // const lowerCaseValue= value.toLowerCase();
        fetchData(searchTerm);
        // console.log('!!!',lowerCaseValue);
        // console.log('lowercasedata', value.toLowerCase()); 
    },300);

    useEffect(() => {
        // const queryStr = Array.isArray(query) ? query.join(' ') : query;
        if (typeof query === 'string' && query) { // Only call if there's some input
            dispatch({
                type:'setSearchQuery',
                payload:{ 
                    ...state.search,
                    query: query || '',
                    isLoading:true,
                },
            });
            debouncedFetchData(query.toLowerCase()); // Call the debounced function
        } else {
            // dispatch({
            //     type:'setSearchQuery',
            //     payload:{ 
            //     isLoading:true,
            //     err:null},
            // })
        }
    }, [query, debouncedFetchData, dispatch]); 
    const handleInputChange = (value)=>{
        // console.log('InputValue',isFirst)
        if (isFirst) {
            // dispatch({
            //     type:'setSearchQuery',
            //     payload:{ 
            //         ...state.search,
            //         isFirst:false,
            //     },
            // });
            // state.search.isFirst=false;
            // dispatch({
            //     type:'setSearchQuery',
            //     payload:state.search,
            // });
            
            dispatch({
                type:'setSearchQuery',
                payload:{ 
                    query:state.query,
                    isFirst:state.isFirst,
                    isLoading:state.isLoading,
                    err:state.err,
                    isFirst:false,
                },
            });
            
        }
        debouncedFetchData(value);
    };
    
    return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
        placeholder='Type to search...'
        // value={query},这里这么写会引起第11行的初始query数值一直赋值给input，导致页面一直刷新且无法显示
        onChange={(e)=>handleInputChange(e.target.value)}
        />
    </div>
  );
};

export default Searchbar
