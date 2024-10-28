import React, { Component } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom'; 

export default class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
            <div className="container clearfix">
                <div className="welcome leftfix">
                    <span className="hello" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Welcome</span>
                    <span>Please</span>
                    <Link to="/Login" className="login" style={{ fontWeight: 'bold' }}> Log in</Link>
                    <Link to="/Register" className="register" style={{ fontWeight: 'bold' }}> Register</Link>
                    {/* <a href="#" className="login">Log in</a> */}
                    {/* <a href="#" className="register">Register</a> */}
                </div>
                <div className="topbar-nav rightfix">
                    <ul className="list clearfix">
                        <li><a href="#">My Order</a></li>
                        <li><a href="#">My Warenkob</a></li>
                        <li><a href="#">My account</a></li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Corporate Sourcing</a></li>
                        <li><a href="#">Cooperation and Merchants</a></li>
                        <li><a href="#">Merchant background</a></li>                  
                    </ul>
                </div>
            </div>
     </div>
    )
  }
}
