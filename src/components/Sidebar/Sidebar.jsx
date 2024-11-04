import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setMenus } from '../../store/menuSlice';
// import MenuItem from './MenuItem';
// import { fetchMenus } from '../../api/menuApi';
import './Sidebar.css'
// import {useState} from 
// import ProductForm from '../../pages/SellerDashboard/ProductForm/ProductForm';

const Sidebar = ({ menus: initialMenus  }) => {
  const [menus, setMenus] = useState([initialMenus]);
  useEffect(() => {
          const fetchMenus = async () => {
              try {
                  const response = await fetch('http://192.168.2.31:5000/api/seller/menus');
                  if (!response.ok) {
                    throw new Error('Failed to fetch menus');
                  }
                  const data = await response.json();
                  setMenus(data);
              } catch (error) {
                  console.error('Error fetching menu items!:', error);
              }
          };
          fetchMenus();
      }, []);
    
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <ul className="menu-list">
        {menus.map((menu,index) => (
          <li key={index}>
            <Link to=''>{menu.section}</Link>
            <div className="second-menu">
              {menu.submenus.map((features,featureIndex)=>(
                <dl key={featureIndex}>
                  <Link to=''>{menu.features}</Link>
                </dl>
              ))}
            </div>
          </li>
          // <MenuItem key={menu._id} name={menu.section} subMenus={menu.features} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
