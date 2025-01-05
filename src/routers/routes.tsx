import React from 'react';
import type { AppRouteObject } from './types';
import Login from '../pages/Login/Login';
import HomePage from '../../src/pages/HomePage/HomePage';
import ProductListingPage from '../pages/ProductListingPage/ProductPage';
import SellerDashboard from '../pages/SellerDashboard/SellerDashboard';

export const routes: AppRouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    auth: true,
    title: 'Home'
  },
  {
    path: '/login',
    element: <Login />,
    auth: false,
    title: 'Login'
  },
  {
    path: '/products',
    element: <ProductListingPage />,
    auth: false,
    title: 'Product List'
  },
  {
    path: '/seller',
    element: <SellerDashboard />,
    auth: true,
    title: 'Seller Dashboard'
  }
]; 