import React from 'react';
import Login from './pages/Login/Login';  
import Registerpage from './pages/Register/Registerpage';
import Homepage from './pages/HomePage/Homepage';
import SellerDashboard from './pages/SellerDashboard/SellerDashboard';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
// import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div>
        <Login />
        <Registerpage />
        <Homepage />
        <SellerDashboard />
        <ProductListingPage/>
    </div>
  );
}

export default App;

