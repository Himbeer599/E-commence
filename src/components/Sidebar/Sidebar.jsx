import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
// import { fetchMenus } from '../../api/menuApi';
import './Sidebar.css'
// import ProductForm from '../../pages/SellerDashboard/ProductForm/ProductForm';

const Sidebar = ({config}) => {
  const [menus, setMenus] = useState([]);
  const fetchMenus = async () => {
    try {
      const response = await fetch('http://192.168.2.31:5000/api/seller/menus');
      if (!response.ok) {
        throw new Error('Failed to fetch menus');
      }
      const data = await response.json();
      setMenus(data); 
    } catch (error) {
      console.error('Failed to fetch menus:', error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);
  // console.log
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <ul className="menu-list">
        {menus.map((menu) => (
          <MenuItem key={menu._id} name={menu.section} subMenus={menu.features} config = {config} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
