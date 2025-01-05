import type { RouteObject } from 'react-router-dom';

// 扩展路由类型
export interface AppRouteObject {
  path?: string;
  element?: React.ReactNode;
  children?: AppRouteObject[];
  index?: false;  // 明确指定 index 只能是 false 或 undefined
  auth?: boolean;
  title?: string;
}

// 转换函数：将 AppRouteObject 转换为 RouteObject
export function convertToRouteObject(route: AppRouteObject): RouteObject {
  const { auth, title, ...routeObject } = route;
  return {
    ...routeObject,
    children: route.children?.map(convertToRouteObject)
  };
} 