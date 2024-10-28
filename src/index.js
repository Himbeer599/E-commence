
import React from 'react';
import ReactDOM from 'react-dom/client';  // 从 'react-dom/client' 导入
import App from './App';

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// 使用 root.render 而不是 ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
