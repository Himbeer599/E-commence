import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../Pictures/NGO.png'


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            // navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
            navigate(`/products`);
        }
    };

    return (
        <div className="header">
            <div className="logo leftfix"> 
                <img src={logo} 
                alt="Welcome" 
                style={{ width: '190px', height: '120px' }}
                />
            </div>
            <div className="search rightfix"> 
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                />
            
            </div>
        </div>
    )
  }



export default Header;
