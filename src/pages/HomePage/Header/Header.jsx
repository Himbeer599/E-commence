import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons'; // 导入Ant Design的搜索图标
import './Header.css';
import logo from '../Pictures/NGO.png';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="header">
            <Row justify="space-between" align="middle" className="header-row">
                <Col>
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                </Col>
                <Col>
                    <div className="search">
                        <Input
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearchKeyDown}
                            style={{ width: 500 }}
                            suffix={<SearchOutlined />} 
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
