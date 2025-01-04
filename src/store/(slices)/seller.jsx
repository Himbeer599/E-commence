import { createSlice } from "@reduxjs/toolkit";

const sellerSlice = createSlice({
    name:'firstnav',
    initialState:{
        _id: '',
        section: '',
        description: '',
        features: []
    },
    reducers:{
        setNaviList(state, action){
            console.log(action.payload)
            state.naviList = action.payload
        }
    }
})

const{setNaviList} = sellerSlice.actions
const fetchNaviList = () => {
    return async(dispatch) =>{
        const res = await fetch('http://192.168.2.52:5000/api/seller/firstnavi')
        const data = await res.json();
        // console.log(data)
        dispatch(setNaviList(data))
    }
}

// const fetchMenuItems = async (dispatch) => {
//     try {
//         const response = await fetch('http://192.168.2.52:5000/api/seller/firstnavi');
//         const data = await response.json();
//         dispatch(setFoodsList(res.data));
//     } catch (error) {
//         console.error('Error fetching menu items!:', error);
//     }
// };



export{fetchNaviList}

const reducer = sellerSlice.reducer
export default reducer