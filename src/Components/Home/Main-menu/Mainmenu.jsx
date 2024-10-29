import React, { Component } from 'react'
import './Mainmenu.css'
export default class Mainmenu extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="all-types leftfix">All Electronics</div>
            <ul className="main-nav-list leftfix clearfix">
                <li><a href="#">Offline Supermarket</a></li>
                <li><a href="#">Coupons</a></li>
                <li><a href="#">What to buy</a></li>
                <li><a href="#">Plus Membership</a></li>
                <li><a href="#">Brand Flash Sale</a></li>
                <li><a href="#">Trade-ins</a></li>
            </ul>
     </div>
    )
  }
}
