import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd'; // 导入 Ant Design 布局组件
import './Maincontent.css';
import SlideNav from './SlideLeftNav/SlideLeftNav';
import Banner from './Banner/Banner';

const { Content } = Layout; // 使用 Ant Design 的 Layout 组件

export default class Maincontent extends Component {
  render() {
    return (
      <Content className="main-content">
        <Row gutter={16} justify="start" align="top" className="main-middle">
        
          <Col xs={24} md={6} lg={5} className="slide-nav-col">
            <SlideNav />
          </Col>

          <Col xs={24} md={18} lg={19} className="banner-col">
            <Banner />
          </Col>
        </Row>
      </Content>
    );
  }
}
