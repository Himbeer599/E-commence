import React, { Component } from 'react'
import './Maincontent.css'
import SlideLeftNav from './SlideLeftNav/SlideLeftNav'
// import bannerfOTO from '../Pictures/electronics.jpg'
import Banner from './Banner/Banner';

export default class Maincontent extends Component {
  render() {
    return (
        <div className="main-content">
          <div className="main-c1">
              <SlideLeftNav/>
              <Banner/>
          </div>
       </div>
    )
}
}
