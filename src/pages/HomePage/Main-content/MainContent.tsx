import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/lib/carousel';
import './MainContent.css';

interface MainContentProps {
  bannerItems: Array<{
    id: string | number;
    imageUrl: string;
    title: string;
    description?: string;
  }>;
}

const MainContent: React.FC<MainContentProps> = ({
  bannerItems
}) => {
  const carouselRef = useRef<CarouselRef>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="main-content">
      <div className="main-middle">
        <div className="banner-col">
          <div className="carousel-container">
            <button 
              className="carousel-button prev" 
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <LeftOutlined />
            </button>
            <Carousel autoplay ref={carouselRef}>
              {bannerItems.map(item => (
                <div key={item.id} className="carousel-slide">
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="carousel-text">
                    <h2>{item.title}</h2>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </Carousel>
            <button 
              className="carousel-button next" 
              onClick={handleNext}
              aria-label="Next slide"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 