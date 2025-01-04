import React from 'react';
import Login from './pages/Login/Login';  
import Registerpage from './pages/Register/Registerpage';
import Homepage from './pages/HomePage/Homepage';
import SellerDashboard from './pages/SellerDashboard/SellerDashboard';
// import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductPage from '../pages/ProductListingPage/ProductPage';
import './styles/global.css';
// import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div>
        <Login />
        <Registerpage />
        <Homepage />
        <SellerDashboard />
        {/* <ProductListingPage/> */}
        <ProductPage/>
    </div>
  );
}

export default App;

