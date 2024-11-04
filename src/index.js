
import React from 'react';
import ReactDOM from 'react-dom/client';  // 从 'react-dom/client' 导入
import Root from "./routers/root"
import {Provider} from 'react-redux'
// import store from './store/store'
import store from './store/index'
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

