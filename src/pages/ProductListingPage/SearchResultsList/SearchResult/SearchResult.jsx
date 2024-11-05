import React from 'react'
import './SearchResult.css'
const SearchResult = ({result}) => {
  return (
    <div className='search-result'>
      <div>Name:{result.name}</div>
      <div>Brand:{result.brand}</div>
      <div>Price:{result.price}</div>
    </div>
  )
}

export default SearchResult
