import React, { useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'

const Searchbar = ({dispatch,search,debouncedQuery}) => {
    // const { query, isFirst, isLoading ,err} = search;
    // console.log("query after jiegou",query);
    // const [inputValue, setInputValue] = useState(query)
    
    const handleInputChange = (searchTerm)=>{
        console.log(searchTerm);
        // const value = e.target.value
        // setInputValue(value);
        // dispatch ({
        //     type:'setSearchQuery',
        //         payload:{ 
        //             query:searchTerm,
        //             isLoading:false,
        //             err:err,
        //             isFirst:false,
        //         }
        // })
        debouncedQuery(searchTerm);
    }
        // debouncedQuery && dispatch({ type: 'setSearchQuery', payload: { query: value, isLoading: true } });
 
    // };
   
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
