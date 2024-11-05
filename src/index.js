
import React from 'react';
import ReactDOM from 'react-dom/client';  // 从 'react-dom/client' 导入
import Root from "./routers/root"
import { RouterProvider } from 'react-router-dom';
// import ErrorPage from './error-page';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Root/>,
//   }
// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <RouterProvider router={router} />
//   </Provider>
// )

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <RouterProvider router={Root}/>
  </React.StrictMode>
)

