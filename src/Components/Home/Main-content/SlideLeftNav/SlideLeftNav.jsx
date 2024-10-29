
import React, { useEffect, useState } from 'react';
import './SlideLeftNav.css'
const SlideNav = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/getproduct');
                const data = await response.json();
                setMenuItems(data);
            } catch (error) {
                console.error('Error fetching menu items1111:', error);
            }
        };

        fetchMenuItems();
    }, []);
    // menuItems.map((menuItem, index) => (
    //     console.log(menuItem.submenus)
    // ))
    return (
        <ul className="slide-nav">
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <a href="#">{menuItem.title}</a>
                    <div className="second-menu">
                        {menuItem.submenus.map((submenu, submenuIndex) => (
                            <dl key={submenuIndex}>
                                <dt><a href="#">{submenu.title}</a></dt>
                                {submenu.items.map((item, itemIndex) => (
                                    <dd key={itemIndex}><a href="#">{item}</a></dd>
                                ))}
                            </dl>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SlideNav;

