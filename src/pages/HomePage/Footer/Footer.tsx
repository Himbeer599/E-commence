import React from 'react';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './Footer.css';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Your trusted online destination for quality electronics and fashion at competitive prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <MailOutlined className="mr-2" />
              info@example.com
            </li>
            <li>
              <PhoneOutlined className="mr-2" />
              +1 234 567 8900
            </li>
            <li>
              <EnvironmentOutlined className="mr-2" />
              123 Street, City, Country
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form>
            <input 
              type="email" 
              placeholder="Enter your email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 