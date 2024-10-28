import React, { Component } from 'react';
import './SlideLeftNav.css'

export default class SlideLeftNav extends Component {
  render() {
    return (
        <ul className="slide-nav leftfix">           
        <li>
            <a href="#">Entertainment Electronics</a>
             <div className="second-menu">
                <dl className="clearfix">
                    <dt><a href="#">Visual Entertainment Devices</a></dt>
                    <dd><a href="#">Televisions</a></dd>
                    <dd><a href="#">Projectors</a></dd>
                    <dd><a href="#">DVD/Blu-ray players</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Audio Equipment</a></dt>
                    <dd><a href="#">Home theater systems</a></dd>
                    <dd><a href="#">Speakers</a></dd>
                    <dd><a href="#">Headphones and earphones</a></dd>
                    {/* <dd><a href="#">Turntables and vinyl players</a></dd> */}
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Gaming Consoles and Accessories</a></dt>
                    <dd><a href="#">Consoles</a></dd>
                    <dd><a href="#">VR headsets</a></dd>
                    <dd><a href="#">Accessories</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Personal Media Devices</a></dt>
                    <dd><a href="#">Tablets</a></dd>
                    <dd><a href="#">Portable media players</a></dd>
                    <dd><a href="#">E-readers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Recording and Playback Devices</a></dt>
                    <dd><a href="#">Cameras</a></dd>
                    <dd><a href="#">Drones</a></dd>
                    <dd><a href="#">Microphones and audio recorders</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Smart Entertainment Devices</a></dt>
                    <dd><a href="#">Smart speakers</a></dd>
                    <dd><a href="#">Smart displays</a></dd>
                </dl>
             </div>
        </li>
        <li>
            <a href="#">Kitchen Electronics</a>
             <div className="second-menu">
                <dl className="clearfix">
                    <dt><a href="#">Food Preparation</a></dt>
                    <dd><a href="#">Blenders and smoothie makers</a></dd>
                    <dd><a href="#">Mixers</a></dd>
                    <dd><a href="#">Choppers and slicers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Cooking</a></dt>
                    <dd><a href="#">Microwaves</a></dd>
                    <dd><a href="#">Toasters and ovens</a></dd>
                    <dd><a href="#">Air fryers</a></dd>
                    <dd><a href="#">Rice cookers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Beverage Makers</a></dt>
                    <dd><a href="#">Coffee makers</a></dd>
                    <dd><a href="#">Electric kettles</a></dd>
                    <dd><a href="#">Juicers</a></dd>
                    <dd><a href="#">Soda makers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Food Storage and Preservation</a></dt>
                    <dd><a href="#">Refrigerators and freezers</a></dd>
                    <dd><a href="#">Vacuum sealers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Cleaning and Maintenance</a></dt>
                    <dd><a href="#">Dishwashers</a></dd>
                    <dd><a href="#">Garbage disposals</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Specialty Appliances</a></dt>
                    <dd><a href="#">Ice cream makers</a></dd>
                    <dd><a href="#">Bread makers</a></dd>
                    <dd><a href="#">Waffle makers</a></dd>
                    <dd><a href="#">Yogurt makers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Smart Kitchen Devices</a></dt>
                    <dd><a href="#">Smart refrigerators</a></dd>
                    <dd><a href="#">Smart coffee makers</a></dd>
                </dl>
             </div>
        </li>
        <li>
            <a href="#">Cleaning and Home Care Electronics</a>
             <div className="second-menu">
                <dl className="clearfix">
                    <dt><a href="#">Floor Cleaning</a></dt>
                    <dd><a href="#">Robot vacuums</a></dd>
                    <dd><a href="#">Carpet cleaners and steam cleaners</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Surface Care</a></dt>
                    <dd><a href="#">Steam mops</a></dd>
                    <dd><a href="#">Steam farbic cleaners</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Air Quality and Purification</a></dt>
                    <dd><a href="#">Air purifiers</a></dd>
                    <dd><a href="#">Air conditioners </a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Laundry </a></dt>
                    <dd><a href="#">Washing machines</a></dd>
                    <dd><a href="#">Clothes dryers</a></dd>
                    <dd><a href="#">Clothes steamers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Outdoor Cleaning</a></dt>
                    <dd><a href="#">Pressure washers</a></dd>
                    <dd><a href="#">Electric leaf blowers</a></dd>
                    <dd><a href="#">Lawn mowers</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Pet Care</a></dt>
                    <dd><a href="#">Pet vacuum cleaners</a></dd>
                    <dd><a href="#">Automatic litter boxes</a></dd>
                    <dd><a href="#">Pet grooming devices</a></dd>
                </dl>
                <dl className="clearfix">
                    <dt><a href="#">Smart Cleaning</a></dt>
                    <dd><a href="#">Smart robot vacuums and mops</a></dd>
                    <dd><a href="#">Smart air purifiers</a></dd>
                </dl>
             </div>
        </li>
    </ul>
    )
  }
}
