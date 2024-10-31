import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';  
import Registerpage from './pages/Register/Registerpage';
import Homepage from './pages/HomePage/Homepage';
// import SellerDashboard from './pages/SellerDashboard/SellerDashboard';
import Sidebar from './components/Sidebar/Sidebar';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/registerpage" element={<Registerpage />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* <Route path="/sellerdashboard" element={<SellerDashboard />} /> */}
        <Route path="/seller/menus" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;

