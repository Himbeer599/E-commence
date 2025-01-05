import React from 'react';
import { Carousel } from 'antd';

interface BannerItem {
  id: string | number;
  imageUrl: string;
  title: string;
  description?: string;
  link?: string;
}

interface BannerProps {
  items?: BannerItem[];
  className?: string;
  autoplay?: boolean;
  interval?: number;
}

const Banner: React.FC<BannerProps> = ({
  items = [],
  className = '',
  autoplay = true,
  interval = 5000
}) => {
  return (
    <Carousel
      autoplay={autoplay}
      autoplaySpeed={interval}
      className={`w-full ${className}`}
    >
      {items.map((item) => (
        <div key={item.id} className="relative h-[400px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
            {item.description && (
              <p className="text-xl mb-6">{item.description}</p>
            )}
            {item.link && (
              <a
                href={item.link}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner; 