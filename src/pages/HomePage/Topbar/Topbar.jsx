import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Topbar.css';

const { Text } = Typography;

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-welcome">
        <Text className="hello" strong italic>
          Welcome
        </Text>
        <span>Please</span>
        <Link to="/Login" className="login">
          <strong>Log in</strong>
        </Link>
        <Link to="/Register" className="register">
          <strong>Register</strong>
        </Link>
      </div>
      <Menu mode="horizontal" className="topbar-menu">
        <Menu.Item key="order">
          <a href="#">My Order</a>
        </Menu.Item>
        <Menu.Item key="warenkorb">
          <a href="#">My Warenkob</a>
        </Menu.Item>
        <Menu.Item key="account">
          <a href="#">My Account</a>
        </Menu.Item>
        <Menu.Item key="membership">
          <a href="#">Membership</a>
        </Menu.Item>
        <Menu.Item key="corporate">
          <a href="#">Corporate Sourcing</a>
        </Menu.Item>
        <Menu.Item key="cooperation">
          <a href="#">Cooperation and Merchants</a>
        </Menu.Item>
        <Menu.Item key="background">
          <a href="#">Merchant Background</a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Topbar;
