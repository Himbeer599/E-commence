import React from 'react';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  onClose
}) => {
  return (
    <div
      className={`
        fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-4">
        {/* Add your menu items here */}
      </nav>
    </div>
  );
};

export default Sidebar; 