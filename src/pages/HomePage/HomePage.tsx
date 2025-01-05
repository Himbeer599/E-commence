import React from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import MainMenu from './Main-menu/MainMenu';
import MainContent from './Main-content/MainContent';
import BestSeller from './BestSeller/BestSeller';
import { User } from '../../models/User';
import './Homepage.css';

interface HomepageProps {
  user?: User | null;
  onLogout?: () => void;
}

const Homepage: React.FC<HomepageProps> = ({
  user,
  onLogout
}) => {
  const navigate = useNavigate();

  const bannerItems = [
    {
      id: '1',
      imageUrl: require('./Pictures/banner1.jpg'),
      title: 'Summer Sale',
      description: 'Up to 50% off on summer collection'
    },
    {
      id: '2',
      imageUrl: require('./Pictures/banner2.jpg'),
      title: 'New Arrivals',
      description: 'Check out our latest products'
    },
    {
      id: '3',
      imageUrl: require('./Pictures/banner3.jpg'),
      title: 'Special Offers',
      description: 'Discover our exclusive deals'
    },
    {
      id: '4',
      imageUrl: require('./Pictures/banner4.jpg'),
      title: 'Winter Collection',
      description: 'Stay warm with our latest winter styles'
    },
    {
      id: '5',
      imageUrl: require('./Pictures/banner5.jpg'),
      title: 'Tech Gadgets',
      description: 'Latest technology at best prices'
    },
    {
      id: '6',
      imageUrl: require('./Pictures/banner6.jpg'),
      title: 'Accessories',
      description: 'Complete your look with our accessories'
    }
  ];

  const menuItems = [
    { 
      key: 'home', 
      label: 'Home', 
      onClick: () => navigate('/')
    },
    { 
      key: 'products', 
      label: 'Products', 
      onClick: () => navigate('/products')
    },
    { 
      key: 'about', 
      label: 'About', 
      onClick: () => navigate('/about')
    },
    { 
      key: 'contact', 
      label: 'Contact', 
      onClick: () => navigate('/contact')
    }
  ];

  return (
    <Layout className="min-h-screen">
      <Header 
        isLoggedIn={!!user}
        cartItemCount={0}
        onSearch={(value) => console.log('Search:', value)}
      />
      <MainMenu items={menuItems} />
      <Layout.Content className="container mx-auto px-4 py-6">
        <MainContent 
          bannerItems={bannerItems}
        />
        <BestSeller />
      </Layout.Content>
    </Layout>
  );
};

export default Homepage; 