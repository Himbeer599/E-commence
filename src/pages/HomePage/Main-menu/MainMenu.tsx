import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: MenuItem[];
}

interface MainMenuProps {
  items?: MenuItem[];
  className?: string;
  mode?: MenuProps['mode'];
  selectedKeys?: string[];
}

const MainMenu: React.FC<MainMenuProps> = ({
  items = [],
  className = '',
  mode = 'horizontal',
  selectedKeys = []
}) => {
  const renderMenuItems = (menuItems: MenuItem[]): MenuProps['items'] => {
    return menuItems.map(item => ({
      key: item.key,
      label: item.label,
      icon: item.icon,
      onClick: item.onClick,
      children: item.children ? renderMenuItems(item.children) : undefined
    }));
  };

  return (
    <Menu
      mode={mode}
      className={`main-menu ${className}`}
      selectedKeys={selectedKeys}
      items={renderMenuItems(items)}
    />
  );
};

export default MainMenu; 