import React from 'react'
import styles from './SearchResultsList.module.css'
import SearchResult from './SearchResult/SearchResult'
const SearchResultsList = ({props}) => {
  console.log(props)
  const {isFirst,isLoading,err} = props.search;
  // const { isLoading, isFirst, err } = search;
  const filteredResults = props.filteredResults;
  console.log('isFirst in SearchResult',isFirst,'isLoading',isLoading,'filteredResults',filteredResults,'ERROR',err)
  return (
    <div>
      {filteredResults.length > 0 && <h2 className={styles.results}>Search Results</h2>}
      {
        isFirst ? <h2>Welcome, please enter the key word</h2>:
        isLoading ? (
        <><div className={styles.loading}><h2>Loading...</h2><h2>Please wait</h2></div></>):
        err ? (
        <h2>{err}</h2>):
        filteredResults.length > 0 ?(
          <div className={styles.results_list}>
            {
            filteredResults.map((filteredResult,id)=>(
            <SearchResult filteredResult={filteredResult} key={id}/>
            ))}
          </div>
        ):(
          <h2>Products not Found</h2>
        )
      }
    </div>
  )
}

export default SearchResultsList

