import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'
import { useDebouncedCallback } from 'use-debounce';

const Searchbar = ({querydispatch,querystate}) => {
    const { query, isFirst, isLoading,err} = querystate;

    const handleInputChange = (searchTerm)=>{
        console.log(searchTerm);
        debouncedQuery(searchTerm);
    }

    const debouncedQuery = useDebouncedCallback ((searchTerm)=>{
        querydispatch({
            type:'setMultiple',
            payload:{
                    query:searchTerm, 
                    isLoading:true,
                    err:err,
                    isFirst:false,
                }
        })
    },300);

    return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
        // value={inputValue}
        placeholder='Type to search...'
        // value={query},这里这么写会引起第11行的初始query数值一直赋值给input，导致页面一直刷新且无法显示
        onChange={(e)=>handleInputChange(e.target.value)}
        />
    </div>
  );
};

export default Searchbar
