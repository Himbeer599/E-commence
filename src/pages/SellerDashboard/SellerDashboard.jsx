
import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar/Sidebar';
// import MainContent from './MainContent/MainContent';
import './SellerDashboard.css'; // 导入样式文件

import { useDispatch, useSelector } from 'react-redux';
import {fetchNaviList} from '../../store/slices/seller'


const SellerDashboard = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchNaviList())
    },[dispatch])
    const navi = useSelector(state1 => state1.naviList );
    const navilist = navi.naviList
    console.log(navilist)
    try {
        navilist.map((menuItem) => (
            console.log(menuItem)
        ))
        return (
            <div className="seller-dashboard">
              {navilist.map((menuItem, index) => {
                return(<li key={menuItem._id}>{menuItem.section}</li>)
              })}
            </div>
        );
    } catch (error) {
        console.error('error ', error);
    }
     
};

export default SellerDashboard;
