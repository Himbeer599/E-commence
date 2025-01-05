import React from 'react';
import { Card, Button, Rate } from 'antd';
import { Product } from '../../../../api/products';

interface SearchResultProps {
  result: Product;
}

const SearchResult: React.FC<SearchResultProps> = ({
  result
}) => {
  return (
    <Card
      hoverable
      cover={<img alt={result.name} src={result.image} />}
      actions={[
        <Button key="cart">Add to Cart</Button>,
        <Button key="wishlist">Wishlist</Button>
      ]}
    >
      <Card.Meta
        title={result.name}
        description={
          <>
            <p>{result.description}</p>
            <p className="text-lg font-bold">${result.price}</p>
            <Rate disabled defaultValue={result.rating} />
          </>
        }
      />
    </Card>
  );
};

export default SearchResult; 