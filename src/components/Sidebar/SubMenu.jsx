import React from 'react';

const SubMenu = ({ subMenus, config}) => {
  return (
    <ul className="sub-menu" >
      {subMenus.map((subMenu, index) => (
        <li key={index} 
        onClick={() => {config(subMenu)}}
        className="sub-menu-item">
          {subMenu}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
