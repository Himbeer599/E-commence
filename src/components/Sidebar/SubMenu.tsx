import React, { useState } from 'react';

interface SubMenuProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({
  title,
  icon,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
      >
        {icon && <span className="mr-3">{icon}</span>}
        {title}
        <span className={`ml-auto transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`pl-4 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default SubMenu; 