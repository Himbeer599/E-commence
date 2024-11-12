import React from 'react'
import './SearchResult.css'
const SearchResult = ({filteredResult}) => {
  return (
    <div className='search-result'>
      <div className='title'>
        <span>Name</span>
        :{filteredResult.name}
      </div>
      <div className='title'>
        <span>Brand</span>
        :{filteredResult.brand}
      </div>
      <div className='title'>
        <span>Price</span>
        :{filteredResult.price}
      </div>
    </div>
  )
}

export default SearchResult
