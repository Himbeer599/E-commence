import React from 'react';
import { Layout } from 'antd';

const About: React.FC = () => {
  return (
    <Layout className="min-h-screen">
      <Layout.Content className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <div className="prose lg:prose-xl">
            <p className="mb-4">
              Welcome to our online store! We are dedicated to providing the best shopping experience for our customers.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to provide high-quality products at competitive prices while delivering exceptional customer service.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Customer Satisfaction</li>
              <li>Quality Products</li>
              <li>Integrity</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default About; 