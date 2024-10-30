// Homepage.js
import React from 'react';
import Topbar from './Topbar/Topbar';
import Header from './Header/Header';
import Mainmenu from './Main-menu/Mainmenu';
import Maincontent from './Main-content/Maincontent';
import BestSeller from './BestSeller/BestSeller';
import Footer from './Footer/Footer'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <div>
      <Topbar/>
      <Header/>
      <Mainmenu/>
      <Maincontent/>
      <BestSeller/>
      <Footer/>
      </div>
    </div>

  );
};

export default Homepage;
