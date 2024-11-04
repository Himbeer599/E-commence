import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
// import MainContent from './MainContent/MainContent';
import './SellerDashboard.css'; // 导入样式文件
import ProductForm from './ProductForm/ProductForm';

const SellerDashboard = () => {
  const [activeSubMenu, setactiveSubMenu] = useState('');
  
  // const menuConfig = (page) => setactiveSubMenu(page);
  console.log(activeSubMenu)
  return (
          <div className="main-component">
            <Sidebar config={setactiveSubMenu} />
            {activeSubMenu === 'Add a Product' && <ProductForm />}
          </div>
        );
};

export default SellerDashboard;
