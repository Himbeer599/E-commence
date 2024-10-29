import React, { Component } from 'react';
import './SlideLeftNav.css'

// 菜单数据
const menuData = [
    {
        title: "Entertainment Electronics",
        submenus: [
            {
                title: "Visual Entertainment Devices",
                items: ["Televisions", "Projectors", "DVD/Blu-ray players"],
            },
            {
                title: "Audio Equipment",
                items: ["Home theater systems", "Speakers", "Headphones and earphones"],
            },
            {
                title: "Gaming Consoles and Accessories",
                items: ["Consoles", "VR headsets", "Accessories"],
            },
            {
                title: "Personal Media Devices",
                items: ["Tablets", "Portable media players", "E-readers"],
            },
            {
                title: "Recording and Playback Devices",
                items: ["Cameras", "Drones", "Microphones and audio recorders"],
            },
            {
                title: "Smart Entertainment Devices",
                items: ["Smart speakers", "Smart displays"],
            },
        ],
    },
    {
        title: "Kitchen Electronics",
        submenus: [
            {
                title: "Food Preparation",
                items: ["Blenders and smoothie makers", "Mixers", "Choppers and slicers"],
            },
            {
                title: "Cooking",
                items: ["Microwaves", "Toasters and ovens", "Air fryers", "Rice cookers"],
            },
            {
                title: "Beverage Makers",
                items: ["Coffee makers", "Electric kettles", "Juicers", "Soda makers"],
            },
            {
                title: "Food Storage and Preservation",
                items: ["Refrigerators and freezers", "Vacuum sealers"],
            },
            {
                title: "Cleaning and Maintenance",
                items: ["Dishwashers", "Garbage disposals"],
            },
            {
                title: "Specialty Appliances",
                items: ["Ice cream makers", "Bread makers", "Waffle makers", "Yogurt makers"],
            },
            {
                title: "Smart Kitchen Devices",
                items: ["Smart refrigerators", "Smart coffee makers"],
            },
        ],
    },
    {
        title: "Cleaning and Home Care Electronics",
        submenus: [
            {
                title: "Floor Cleaning",
                items: ["Robot vacuums", "Carpet cleaners and steam cleaners"],
            },
            {
                title: "Surface Care",
                items: ["Steam mops", "Steam fabric cleaners"],
            },
            {
                title: "Air Quality and Purification",
                items: ["Air purifiers", "Air conditioners"],
            },
            {
                title: "Laundry",
                items: ["Washing machines", "Clothes dryers", "Clothes steamers"],
            },
            {
                title: "Outdoor Cleaning",
                items: ["Pressure washers", "Electric leaf blowers", "Lawn mowers"],
            },
            {
                title: "Pet Care",
                items: ["Pet vacuum cleaners", "Automatic litter boxes", "Pet grooming devices"],
            },
            {
                title: "Smart Cleaning",
                items: ["Smart robot vacuums and mops", "Smart air purifiers"],
            },
        ],
    },
];

// 菜单组件
const SlideNav = () => {
    return (
        <ul className="slide-nav">
            {menuData.map((menuItem, index) => (
                <li key={index}>
                    <a href="#">{menuItem.title}</a>
                    <div className="second-menu">
                        {menuItem.submenus.map((submenu, submenuIndex) => (
                            <dl key={submenuIndex}>
                                <dt><a href="#">{submenu.title}</a></dt>
                                {submenu.items.map((item, itemIndex) => (
                                    <dd key={itemIndex}><a href="#">{item}</a></dd>
                                ))}
                            </dl>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SlideNav;

// export default class SlideLeftNav extends Component {
//   render() {
//     return (
//     <ul className="slide-nav">           
//         <li>
//             <a href="#">Entertainment Electronics</a>
//              <div className="second-menu">
//                 <dl>
//                     <dt><a href="#">Visual Entertainment Devices</a></dt>
//                     <dd><a href="#">Televisions</a></dd>
//                     <dd><a href="#">Projectors</a></dd>
//                     <dd><a href="#">DVD/Blu-ray players</a></dd>
//                 </dl>
//                 <dl>
//                     <dt><a href="#">Audio Equipment</a></dt>
//                     <dd><a href="#">Home theater systems</a></dd>
//                     <dd><a href="#">Speakers</a></dd>
//                     <dd><a href="#">Headphones and earphones</a></dd>
//                     {/* <dd><a href="#">Turntables and vinyl players</a></dd> */}
//                 </dl>
//                 <dl>
//                     <dt><a href="#">Gaming Consoles and Accessories</a></dt>
//                     <dd><a href="#">Consoles</a></dd>
//                     <dd><a href="#">VR headsets</a></dd>
//                     <dd><a href="#">Accessories</a></dd>
//                 </dl>
//                 <dl>
//                     <dt><a href="#">Personal Media Devices</a></dt>
//                     <dd><a href="#">Tablets</a></dd>
//                     <dd><a href="#">Portable media players</a></dd>
//                     <dd><a href="#">E-readers</a></dd>
//                 </dl>
//                 <dl>
//                     <dt><a href="#">Recording and Playback Devices</a></dt>
//                     <dd><a href="#">Cameras</a></dd>
//                     <dd><a href="#">Drones</a></dd>
//                     <dd><a href="#">Microphones and audio recorders</a></dd>
//                 </dl>
//                 <dl>
//                     <dt><a href="#">Smart Entertainment Devices</a></dt>
//                     <dd><a href="#">Smart speakers</a></dd>
//                     <dd><a href="#">Smart displays</a></dd>
//                 </dl>
//              </div>
//         </li>
//         <li>
//             <a href="#">Kitchen Electronics</a>
//              <div className="second-menu">
//                 <dl >
//                     <dt><a href="#">Food Preparation</a></dt>
//                     <dd><a href="#">Blenders and smoothie makers</a></dd>
//                     <dd><a href="#">Mixers</a></dd>
//                     <dd><a href="#">Choppers and slicers</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Cooking</a></dt>
//                     <dd><a href="#">Microwaves</a></dd>
//                     <dd><a href="#">Toasters and ovens</a></dd>
//                     <dd><a href="#">Air fryers</a></dd>
//                     <dd><a href="#">Rice cookers</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Beverage Makers</a></dt>
//                     <dd><a href="#">Coffee makers</a></dd>
//                     <dd><a href="#">Electric kettles</a></dd>
//                     <dd><a href="#">Juicers</a></dd>
//                     <dd><a href="#">Soda makers</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Food Storage and Preservation</a></dt>
//                     <dd><a href="#">Refrigerators and freezers</a></dd>
//                     <dd><a href="#">Vacuum sealers</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Cleaning and Maintenance</a></dt>
//                     <dd><a href="#">Dishwashers</a></dd>
//                     <dd><a href="#">Garbage disposals</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Specialty Appliances</a></dt>
//                     <dd><a href="#">Ice cream makers</a></dd>
//                     <dd><a href="#">Bread makers</a></dd>
//                     <dd><a href="#">Waffle makers</a></dd>
//                     <dd><a href="#">Yogurt makers</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Smart Kitchen Devices</a></dt>
//                     <dd><a href="#">Smart refrigerators</a></dd>
//                     <dd><a href="#">Smart coffee makers</a></dd>
//                 </dl>
//              </div>
//         </li>
//         <li>
//             <a href="#">Cleaning and Home Care Electronics</a>
//              <div className="second-menu">
//                 <dl >
//                     <dt><a href="#">Floor Cleaning</a></dt>
//                     <dd><a href="#">Robot vacuums</a></dd>
//                     <dd><a href="#">Carpet cleaners and steam cleaners</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Surface Care</a></dt>
//                     <dd><a href="#">Steam mops</a></dd>
//                     <dd><a href="#">Steam farbic cleaners</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Air Quality and Purification</a></dt>
//                     <dd><a href="#">Air purifiers</a></dd>
//                     <dd><a href="#">Air conditioners </a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Laundry </a></dt>
//                     <dd><a href="#">Washing machines</a></dd>
//                     <dd><a href="#">Clothes dryers</a></dd>
//                     <dd><a href="#">Clothes steamers</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Outdoor Cleaning</a></dt>
//                     <dd><a href="#">Pressure washers</a></dd>
//                     <dd><a href="#">Electric leaf blowers</a></dd>
//                     <dd><a href="#">Lawn mowers</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Pet Care</a></dt>
//                     <dd><a href="#">Pet vacuum cleaners</a></dd>
//                     <dd><a href="#">Automatic litter boxes</a></dd>
//                     <dd><a href="#">Pet grooming devices</a></dd>
//                 </dl>
//                 <dl >
//                     <dt><a href="#">Smart Cleaning</a></dt>
//                     <dd><a href="#">Smart robot vacuums and mops</a></dd>
//                     <dd><a href="#">Smart air purifiers</a></dd>
//                 </dl>
//              </div>
//         </li>
//     </ul>
//     )
//   }
// }
