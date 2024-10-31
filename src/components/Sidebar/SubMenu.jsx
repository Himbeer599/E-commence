import React from 'react';

const SubMenu = ({ subMenus }) => {
  return (
    <ul className="sub-menu" >
      {subMenus.map((subMenu, index) => (
        <li key={index} className="sub-menu-item">
          {subMenu}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
