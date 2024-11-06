import React from 'react'
import './SearchResult.css'
const SearchResult = ({filteredResult}) => {
  return (
    <div className='search-result'>
      <div>Name:{filteredResult.name}</div>
      <div>Brand:{filteredResult.brand}</div>
      <div>Price:{filteredResult.price}</div>
    </div>
  )
}

export default SearchResult
