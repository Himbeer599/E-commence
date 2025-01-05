import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

interface Category {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: Category[];
}

interface SlideLeftNavProps {
  categories?: Category[];
  className?: string;
  onSelect?: (key: string) => void;
}

const SlideLeftNav: React.FC<SlideLeftNavProps> = ({
  categories = [],
  className = '',
  onSelect
}) => {
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (onSelect) {
      onSelect(key);
    }
  };

  const renderMenuItems = (items: Category[]): MenuProps['items'] => {
    return items.map(category => ({
      key: category.key,
      label: category.label,
      icon: category.icon,
      children: category.children ? renderMenuItems(category.children) : undefined
    }));
  };

  return (
    <div className={`slide-left-nav ${className}`}>
      <Menu
        mode="inline"
        className="h-full"
        items={renderMenuItems(categories)}
        onClick={handleMenuClick}
      />
    </div>
  );
};

export default SlideLeftNav; 