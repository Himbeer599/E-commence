import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenus } from '../../store/menuSlice';
import MenuItem from './MenuItem';
// import { fetchMenus } from '../../api/menuApi';
import './Sidebar.css'
// import ProductForm from '../../pages/SellerDashboard/ProductForm/ProductForm';

const Sidebar = ({ menus }) => {
  const dispatch = useDispatch();
  const activeSubMenu = useSelector((state) => state.menu.activeSubMenu);

  const fetchMenus = async () => {
    try {
      const response = await fetch('http://192.168.2.31:5000/api/seller/menus');
      if (!response.ok) {
        throw new Error('Failed to fetch menus');
      }
      const data = await response.json();
      dispatch(setMenus(data)); // 将数据存储到 Redux 中
    } catch (error) {
      console.error('Failed to fetch menus:', error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <ul className="menu-list">
        {menus.map((menu) => (
          <MenuItem key={menu._id} name={menu.section} subMenus={menu.features} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
