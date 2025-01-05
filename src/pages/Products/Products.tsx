import React from 'react';
import { Layout } from 'antd';

const Products: React.FC = () => {
  return (
    <Layout className="min-h-screen">
      <Layout.Content className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 产品列表将在这里渲染 */}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Products; 