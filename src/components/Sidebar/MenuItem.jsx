import React, { useState } from 'react';
import SubMenu from './SubMenu';

const MenuItem = ({ name, subMenus, config }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // style={{ marginBottom: '10px', cursor: 'pointer' }}
      className="menu-item"
    >
      <div className="menu-item-title">{name}</div>
      {isHovered && <SubMenu subMenus={subMenus} config = {config} />}
    </li>
  );
};

export default MenuItem;
