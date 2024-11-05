import React, { useState } from 'react'
import Searchbar from './Searchbar/Searchbar'
import SearchResultsList from './SearchResultsList/SearchResultsList';
import styles from './ProductListingPage.module.css'

const ProductListingPage = () => {
    const [results,setResults] = useState([]);
  return (
    <div className={styles.productingListingPage}>
      <div className="search-bar-container">
        <Searchbar setResults={setResults}/>
      </div>
        <h2>In total:{results.length}</h2>
        <SearchResultsList results={results} />
    </div>
  )
}

export default ProductListingPage
