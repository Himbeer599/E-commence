import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';

interface TopbarProps {
  className?: string;
  phone?: string;
  email?: string;
  onContactClick?: (type: 'phone' | 'email') => void;
}

const Topbar: React.FC<TopbarProps> = ({
  className = '',
  phone = '+1 234 567 8900',
  email = 'support@example.com',
  onContactClick
}) => {
  const handleClick: MenuProps['onClick'] = ({ key }) => {
    if (onContactClick) {
      onContactClick(key as 'phone' | 'email');
    }
  };

  const menuItems: MenuProps['items'] = [
    {
      key: 'phone',
      icon: <PhoneOutlined />,
      label: phone,
    },
    {
      key: 'email',
      icon: <MailOutlined />,
      label: email,
    }
  ];

  return (
    <div className={`topbar bg-gray-100 px-4 py-2 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="contact-info">
          <Menu
            mode="horizontal"
            items={menuItems}
            onClick={handleClick}
            className="bg-transparent border-0"
          />
        </div>
        <div className="quick-links">
          <Menu
            mode="horizontal"
            className="bg-transparent border-0"
            items={[
              {
                key: 'help',
                label: 'Help Center'
              },
              {
                key: 'track',
                label: 'Track Order'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar; 