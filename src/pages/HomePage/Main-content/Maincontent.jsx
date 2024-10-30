import React, { Component } from 'react'
import './Maincontent.css'
import SlideNav from './SlideLeftNav/SlideLeftNav'
import Banner from './Banner/Banner';

export default class Maincontent extends Component {
  render() {
    return (
        <div className="main-content">
          <div className="mainmiddel">
              <SlideNav/>
              <Banner/>
          </div>
       </div>
    )
}
}
