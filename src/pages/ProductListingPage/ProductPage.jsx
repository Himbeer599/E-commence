import React, {useReducer} from 'react'
// import Header,Footer组件
import Searchbar from './Searchbar/Searchbar'
import SearchResultsList from './SearchResultsList/SearchResultsList'
import FilterSidebar from './FilterSidebar/FilterSidebar'
import styles from './ProductListingPage.module.css' 

const initialState ={
    search:{
        query:'',
        isFirst:true,
        isLoading:false,
        err:null,
    },
    filters:{
        brand:[],
        color:[],
        priceRange:[0,3000],
    },
    filteredResults:[],
}

function reducer (state,action){
    // console.log("-----------------------",action.payload.isFirst);
    //下面的含义是在case'setSearchQuery'情况下，return：首先展开...state，对state里面的键名search的数值进行修改（采用键值对写法）
    // action.payload是指的searchbar组件中：
    // dispatch({type:'setSearchQuery',payload:{...state.search, isLoading:false},});
    //上述payload首先打开state.search,然后对其中的isLoading进行更改，其他值保持不变，整体包裹在action.payload里面
    switch (action.type) {
        case 'setSearchQuery':
            return {
                ...state,
                search: action.payload,
            };
        // case 'setQuery':
        //     return {...state,query:action.payload};
        // case 'setIsFirst':
        //     return {...state,isFirst:action.payload};
        // case 'setIsLoading':
        //     return {...state,isLoading:action.payload};
        // case 'setErr':
        //     return {...state,err:action.payload};
        case 'setFilter':
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [action.filterName]:action.payload
                }
            };
        case 'setFilteredResults':
            return {...state,filteredResults:action.payload};  
            //一定要在action.payload上加filterreddata
        // case 'setMultipleStates':
        //     return {...state,...action.payload};
        default:
            return state;
    }
}

const ProductPage = () => {
      const [state, dispatch] = useReducer (reducer, initialState)
      //下面可以看到payload数据结构（数据组成），因为其作为dispatch入参
      const callback = (dict) => {
        console.log("2222",dict);
        dispatch(dict);
      }
      
      console.log('callback',state);
    //   console.log('search in productpage',state);
      // const { query, filteredResults, isFirst, isLoading, error } = state;
      return (
        <div className={styles.productingListingPage}>
                  <div className="search-bar-container">
                    <Searchbar dispatch={callback} state={state}/>
                  </div>
                    <h2 className={styles.sum}>In total:{state.filteredResults.length}</h2>
                    <FilterSidebar/>
                    <SearchResultsList  props={state} />
        </div>
      )
}



export default ProductPage
