import React, { Component } from 'react';
import './Header.css';
import logo from '../Pictures/NGO.png'


export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <div className="logo leftfix"> 
                <img src={logo} 
                alt="Welcome" 
                style={{ width: '190px', height: '120px' }}
                />
            </div>
            <div className="search rightfix"> 
                <form action="#">
                    <input type="text" />
                    <button></button>
                </form>
            </div>
        </div>
    )
  }
}
