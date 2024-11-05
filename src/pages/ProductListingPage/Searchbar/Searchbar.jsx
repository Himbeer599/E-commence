import React, {useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'
import { useDebouncedCallback } from 'use-debounce';

const Searchbar = ({setResults}) => {
        const [filter,setFilter] =useState('')
        // const [searchedProducts, setSearchedProducts] = useState([]);
        const debouncedFetchData = useDebouncedCallback ((value)=>{
            const lowerCaseValue= value.toLowerCase();
            fetchData(lowerCaseValue);
            // console.log('!!!',lowerCaseValue);
            // console.log('lowercasedata', value.toLowerCase()); 
        },300);

        useEffect(() => {
            if (filter) { // Only call if there's some input
                debouncedFetchData(filter); // Call the debounced function
            } else {
                setResults([]); // Clear results if input is empty
            }
        }, [filter, debouncedFetchData]); 

        const fetchData = async (value) => {
            try {
                const response = await fetch('http://192.168.2.31:5000/api/products/productslist');
                const data = await response.json();
                console.log('Data:', data); 
                const lowerCaseValue= value.toLowerCase();
                // const lowerCaseKeyword= value.toLowerCase();
                console.log('@@@@@',lowerCaseValue);
                const results = data.filter((product)=>{
                    return(
                        value &&
                        product &&
                        product.brand &&
                        product.brand.toLowerCase() === lowerCaseValue ||
                        product.name &&
                        product.name.toLowerCase().includes(lowerCaseValue)
                        // product.name.toLowerCase().includes(lowerCaseValue)
                    )}
                );
                console.log('Filtered Results:', results);
                setResults(results);
            } catch (error) {
                console.error('Error fetching products!:', error);
            }
        };
        

    const handleChange = (value)=>{
        setFilter(value);
    };
    return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
        placeholder='Type to search...'
        onChange={(e)=>handleChange(e.target.value)}
        />
    </div>
  );
};

export default Searchbar
