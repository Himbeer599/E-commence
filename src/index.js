
import React from 'react';
import ReactDOM from 'react-dom/client';  // 从 'react-dom/client' 导入
import App from './App';
import {Provider} from 'react-redux'
import store from './store/store'

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// 使用 root.render 而不是 ReactDOM.render
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
