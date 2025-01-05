import React from 'react';
import { Sidebar } from '../../components/index';
// import MainContent from './MainContent/MainContent';
import './SellerDashboard.css';
// import { setActiveMenu } from '../../store/menuSlice';
// import ProductForm from './ProductForm/ProductForm';

interface SellerDashboardProps {
  className?: string;
}

const SellerDashboard: React.FC<SellerDashboardProps> = ({ className = '' }) => {
  return (
    <div className={`main-component ${className}`}>
      <Sidebar />
      {/* {activeSubMenu === 'Add a Product' && <ProductForm />} */}
    </div>
  );
};

export default SellerDashboard; 