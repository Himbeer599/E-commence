import React from 'react';
import { Menu, Typography } from 'antd';
import './Mainmenu.css';

const { Text } = Typography;

const Mainmenu = () => {
  return (
    <div className="main-nav">
      <div className="all-types">
        <span>All Electronics</span>
      </div>
      <Menu mode="horizontal" className="main-nav-menu">
        <Menu.Item key="supermarket">
          <a href="#">Offline Supermarket</a>
        </Menu.Item>
        <Menu.Item key="coupons">
          <a href="#">Coupons</a>
        </Menu.Item>
        <Menu.Item key="what-to-buy">
          <a href="#">What to Buy</a>
        </Menu.Item>
        <Menu.Item key="membership">
          <a href="#">Plus Membership</a>
        </Menu.Item>
        <Menu.Item key="flash-sale">
          <a href="#">Brand Flash Sale</a>
        </Menu.Item>
        <Menu.Item key="trade-ins">
          <a href="#">Trade-ins</a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Mainmenu;
