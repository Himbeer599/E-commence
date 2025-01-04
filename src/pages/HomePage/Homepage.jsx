import React from 'react';
import { Layout } from 'antd';
import Topbar from './Topbar/Topbar';
import Header from './Header/Header';
import Mainmenu from './Main-menu/Mainmenu';
import Maincontent from './Main-content/Maincontent';
import BestSeller from './BestSeller/BestSeller';
import Footer from './Footer/Footer';
import './Homepage.css';

const { Content } = Layout;

const Homepage = () => {
  return (
    <Layout className="homepage-layout">
      <div className="homepage-topbar">
        <Topbar />
      </div>
      <div className="homepage-header">
        <Header />
      </div>
      <div className="homepage-menu">
        <Mainmenu />
      </div>
      <Content className="homepage-main-content">
        <Maincontent />
      </Content>
      <Content className="homepage-best-seller">
        <BestSeller />
      </Content>
      <Footer className="homepage-footer" />
    </Layout>
  );
};

export default Homepage;
