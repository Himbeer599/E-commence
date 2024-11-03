import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSubMenu } from '../../store/menuSlice'

const SubMenu = ({ subMenus }) => {
  const dispatch = useDispatch();
  return (
    <ul className="sub-menu" >
      {subMenus.map((subMenu, index) => (
        <li key={index} 
        onClick={() => {dispatch(setActiveSubMenu(subMenu))}}
        className="sub-menu-item">
          {subMenu}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
