import React, {useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'
import { useDebouncedCallback } from 'use-debounce';

const Searchbar = ({dispatch,state}) => {
    const query =state.query;
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
            console.log('Filtered Results:', filtereddata);
            dispatch({
                type:'setFilteredResults',
                payload:filtereddata,
                    isDisplay: true,})
                    // isLoading:false,
                }catch (error) {
            // console.error('Error fetching products!:', error);
            dispatch({
                type:'setErr',
                payload:error.message,})
                } finally {
                    dispatch({type:'setIsLoading',payload:false});
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
                type:'setMultipleStates',
                payload:{ 
                query: query || '',
                isLoading:true,
                err:null}
            })
            debouncedFetchData(query.toLowerCase()); // Call the debounced function
        } else {
            dispatch({
                isLoading:true,
                err:null,
            })
        }
    }, [query, debouncedFetchData, dispatch]); 
    const handleInputChange = (value)=>{
        dispatch({
            type:'setMultipleStates',
            payload:{
                // isLoading:true,
                query: value || '',
                isFirst:false,
            }
        })
        debouncedFetchData(value);
    };
    
    return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
        placeholder='Type to search...'
        value={query}
        onChange={(e)=>handleInputChange(e.target.value)}
        />
    </div>
  );
};

export default Searchbar
