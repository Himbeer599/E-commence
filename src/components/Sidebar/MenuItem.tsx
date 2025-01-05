import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  icon?: React.ReactNode;
  title: string;
  to: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  to,
  active = false
}) => {
  return (
    <Link
      to={to}
      className={`
        flex items-center px-4 py-2 text-sm rounded-md
        ${active ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}
      `}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {title}
    </Link>
  );
};

export default MenuItem; 