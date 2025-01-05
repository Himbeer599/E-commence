import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      hoverable
      cover={
        <div className="h-48 overflow-hidden">
          <img
            alt={product.name}
            src={product.image}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      }
      actions={[
        <Button key="addToCart" type="primary" icon={<ShoppingCartOutlined />}>
          Add to Cart
        </Button>,
        <Button key="wishlist" icon={<HeartOutlined />}>
          Wishlist
        </Button>
      ]}
    >
      <Card.Meta
        title={
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold truncate">{product.name}</span>
            <span className="text-lg font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
          </div>
        }
        description={
          <p className="text-gray-600 h-12 overflow-hidden">
            {product.description}
          </p>
        }
      />
    </Card>
  );
};

export default ProductCard; 