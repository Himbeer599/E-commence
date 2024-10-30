import React, { Component } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom'; 

export default class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
            <div className="container">
                <div className="welcome">
                    <span className="hello" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Welcome</span>
                    <span>Please</span>
                    <Link to="/Login" className="login" style={{ fontWeight: 'bold' }}> Log in</Link>
                    <Link to="/Register" className="register" style={{ fontWeight: 'bold' }}> Register</Link>
                </div>
                <div className="topbar-nav">
                    <ul className="list">
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
