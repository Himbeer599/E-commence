import React from 'react';
import { Layout, Input, Badge, Avatar, Button } from 'antd';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const { Header: AntHeader } = Layout;
const { Search } = Input;

interface HeaderProps {
  className?: string;
  isLoggedIn?: boolean;
  cartItemCount?: number;
  onSearch?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  className = '',
  isLoggedIn = false,
  cartItemCount = 0,
  onSearch
}) => {
  const navigate = useNavigate();

  return (
    <AntHeader className={`bg-white ${className}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/')}>
            E-Commerce
          </h1>
        </div>

        {/* Search Bar - Centered */}
        <div className="search">
          <Input.Search
            size="large"
            placeholder="Search for products"
            allowClear
            onSearch={onSearch}
            className="search-input"
          />
        </div>

        {/* User Actions */}
        <div className="user-actions">
          <Badge count={cartItemCount} className="cart-badge">
            <ShoppingCartOutlined className="text-xl cursor-pointer" />
          </Badge>
          {isLoggedIn ? (
            <Avatar icon={<UserOutlined />} className="cursor-pointer" />
          ) : (
            <span className="cursor-pointer" onClick={() => navigate('/login')}>Login</span>
          )}
        </div>
      </div>
    </AntHeader>
  );
};

export default Header; 