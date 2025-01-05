import React from 'react';
import Topbar from './pages/HomePage/Topbar/Topbar';
import Footer from './pages/HomePage/Footer/Footer';
import AppRoutes from './routers';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Topbar />
      <main className="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App; 