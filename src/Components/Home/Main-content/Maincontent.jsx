import React, { Component } from 'react'
import './Maincontent.css'
import SlideLeftNav from './SlideLeftNav/SlideLeftNav'
import Banner from './Banner/Banner';

export default class Maincontent extends Component {
  render() {
    return (
        <div className="main-content">
          <div className="mainmiddel">
              <SlideLeftNav/>
              <Banner/>
          </div>
       </div>
    )
}
}
