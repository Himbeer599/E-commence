import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { convertToRouteObject } from './types';

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes.map(convertToRouteObject));
  return element;
};

export default AppRoutes; 