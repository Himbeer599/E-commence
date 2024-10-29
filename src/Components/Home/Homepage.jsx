// Homepage.js
import React from 'react';
import Topbar from './Topbar/Topbar';
import Header from './Header/Header';
import Mainmenu from './Main-menu/Mainmenu';
import Maincontent from './Main-content/Maincontent';
import BestSeller from './BestSeller/BestSeller';
import Footer from './Footer/Footer'
// import Footer1 from './Footer1/Footer1';
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <div className="homepage-1">
      <Topbar/>
      <Header/>
      <Mainmenu/>
      <Maincontent/>
      <BestSeller/>
      <Footer/>
        {/* <Footer1/> */}
      </div>
    </div>

  );
};

export default Homepage;
