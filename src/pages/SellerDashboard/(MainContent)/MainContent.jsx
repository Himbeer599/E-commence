// src/components/MainContent.jsx
import React from 'react';

const MainContent = ({ selectedMenu }) => {
    const renderContent = () => {
        switch (selectedMenu) {
            case 'Manage Inventory':
                return <h2>Manage Inventory Content</h2>;
            case 'Add a Product':
                return <h2>Add a Product Content</h2>;
            case 'View Pricing Dashboard':
                return <h2>View Pricing Dashboard Content</h2>;
            case 'Manage Pricing':
                return <h2>Manage Pricing Content</h2>;
            case 'Manage Orders':
                return <h2>Manage Orders Content</h2>;
            case 'Order Report':
                return <h2>Order Report Content</h2>;
            case 'Manage Returns':
                return <h2>Manage Returns Content</h2>;
            default:
                return <h2>Please select a menu item</h2>;
        }
    };

    return (
        <div className="main-content">
            {renderContent()}
        </div>
    );
};

export default MainContent;
