import React, { useEffect, useState } from 'react';
import { Button } from 'antd'; 
import { LeftOutlined, RightOutlined } from '@ant-design/icons';  
import './Banner.css';

const imageNames = [
  'electronics.jpg',
  'electronics2.jpg',
  'smart home.jpg',
  'Aktion.jpg',
  'coffee machine.jpg',
  'comics.jpg',
];

const images = imageNames.map(name => require(`../../Pictures/${name}`));

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // 每3秒切换一次

    return () => clearInterval(interval); // 清理定时器
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    // <>
        <div className="banner-container">
        {/* 左箭头按钮 */}
        <Button
            className="arrow left-arrow"
            icon={<LeftOutlined />}
            onClick={goToPrevious}
        />
        
        {/* 展示图片 */}
        <div className="banner">
            <img
            src={images[currentIndex]}
            alt="Banner"
            className="banner-image"
            />
        </div>

        {/* 右箭头按钮 */}
        <Button
            className="arrow right-arrow"
            icon={<RightOutlined />}
            onClick={goToNext}
        />
        </div>
    // </>
  );
};

export default Banner;
