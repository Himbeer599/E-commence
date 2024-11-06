import React, { useReducer } from 'react'
import Searchbar from './Searchbar/Searchbar'
import SearchResultsList from './SearchResultsList/SearchResultsList';
import styles from './ProductListingPage.module.css'

const initialState ={
  query:'',
  isFirst:true,
  isLoading:false,
  filteredResults:[],
  err:null,
}
function reducer (state,action){
  switch (action.type){
      case 'setQuery':
          // setState((prevState)=>({...prevState,query:action.payload}));
          // break;
          return {...state,query:action.payload};
      case 'setIsFirst':
          return {...state,isFirst:action.payload};
          // setState((prevState)=>({...prevState,isFirst:action.payload}));
          // break;
      case 'setIsLoading':
          return {...state,isLoading:action.payload};
          // setState((prevState)=>({...prevState,isLoading:action.payload}));
          // break;
      // case 'setIsDisplay':
      //   return {...state,isDisplay:action.payload};
      case 'setFilteredResults':
        return {...state,filteredResults:action.payload};  
        // setState((prevState)=>({...prevState,filteredResults:action.payload}));
        //   break;  
      case 'setErr':
          return {...state,err:action.payload};
        // setState((prevState)=>({...prevState,err:action.payload}));
        //   break; 
      case 'setMultipleStates':
          return {...state,...action.payload};
        // setState((prevState)=>({...prevState,...action.payload}));
        //   break; 
      default:
          return state;
  }
}

const ProductListingPage = () => {
  const [state,dispatch] = useReducer (reducer,initialState)
  // const { query, filteredResults, isFirst, isLoading, error } = state;
  return (
    <div className={styles.productingListingPage}>
              <div className="search-bar-container">
                <Searchbar dispatch={dispatch} state={state}/>
              </div>
                <h2 className={styles.sum}>In total:{state.filteredResults.length}</h2>
                <SearchResultsList {...state} />
    </div>
  )
}

export default ProductListingPage
