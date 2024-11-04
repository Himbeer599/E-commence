
import React from 'react';
import {Sidebar} from '../../components/index';
// import MainContent from './MainContent/MainContent';
import './SellerDashboard.css'; // 导入样式文件
// import { setActiveMenu } from '../../store/menuSlice';
// import ProductForm from './ProductForm/ProductForm';


const SellerDashboard = () => {
    
  return (
          <div className="main-component">
          <Sidebar/>

          {/* {activeSubMenu === 'Add a Product' && <ProductForm />} */}
          
          </div>
        );
};

export default SellerDashboard;
