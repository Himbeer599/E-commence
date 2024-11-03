// src/components/Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css'; // 导入样式文件

const Sidebar = ({ onSelectMenu }) => {
    const [selectedMenu, setSelectedMenu] = useState('');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        onSelectMenu(menu); // 回调到父组件
    };

    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li onClick={() => handleMenuClick('Manage Inventory')}>Manage Inventory</li>
                <li onClick={() => handleMenuClick('Add a Product')}>Add a Product</li>
                <li onClick={() => handleMenuClick('View Pricing Dashboard')}>View Pricing Dashboard</li>
                <li onClick={() => handleMenuClick('Manage Pricing')}>Manage Pricing</li>
                <li onClick={() => handleMenuClick('Manage Orders')}>Manage Orders</li>
                <li onClick={() => handleMenuClick('Order Report')}>Order Report</li>
                <li onClick={() => handleMenuClick('Manage Returns')}>Manage Returns</li>
            </ul>
        </div>
    );
};

export default Sidebar;
