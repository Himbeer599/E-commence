import React, { Component } from 'react';
import './Header.css';
import logo from '../Pictures/NGO.png'


export default class Header extends Component {
  render() {
    return (
        <div class="header">
            <div class="container clearfix">
                <div class="logo leftfix"> 
                    <img src={logo} 
                    alt="Welcome" 
                    style={{ width: '190px', height: '120px' }}
                    />
                </div>
                <div class="search rightfix"> 
                    <form action="#">
                        <input type="text" />
                        <button></button>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}
