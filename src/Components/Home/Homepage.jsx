// Homepage.js
import React from 'react';
import Topbar from './Topbar/Topbar';
import Header from './Header/Header';
import Mainmenu from './Main-menu/Mainmenu';
import Maincontent from './Main-content/Maincontent';
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Topbar/>
      <Header/>
      <Mainmenu/>
      <Maincontent/>
    </div>

  );
};

export default Homepage;
