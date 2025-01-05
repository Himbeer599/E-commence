import React, { useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';
import './BestSeller.css';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

// 示例数据
const bestSellerProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Headphones',
    price: 199.99,
    image: '/images/headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: '/images/smartwatch.jpg',
    description: 'Latest generation smartwatch with health monitoring'
  },
  {
    id: '3',
    name: 'Laptop Pro',
    price: 1299.99,
    image: '/images/laptop.jpg',
    description: 'Powerful laptop for professionals'
  },
  {
    id: '4',
    name: 'Wireless Earbuds',
    price: 149.99,
    image: '/images/earbuds.jpg',
    description: 'True wireless earbuds with premium sound'
  }
];

const BestSeller: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bestseller">
      <h2>Best Sellers</h2>
      <div className="bestseller-container">
        <button 
          className="scroll-button scroll-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <LeftOutlined />
        </button>
        
        <div className="bestseller-items" ref={scrollContainerRef}>
          {bestSellerProducts.map((product) => (
            <div key={product.id} className="bestseller-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button 
          className="scroll-button scroll-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default BestSeller; 