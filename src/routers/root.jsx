import Login from '../pages/Login/Login';  
import Registerpage from '../pages/Register/Registerpage';
import Homepage from '../pages/HomePage/Homepage';
import SellerDashboard from '../pages/SellerDashboard/SellerDashboard';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error-page';
import ProductForm from '../pages/SellerDashboard/ProductForm/ProductForm';
import ProductPage from '../pages/ProductListingPage/ProductPage';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login />
    },
    {
        path:"/registerpage",
        element: <Registerpage />
    },
    {
        path:"/homepage",
        element: <Homepage />
    },
    {
        path:"/sellerdashboard",
        element: <SellerDashboard />,
        children:[
            {
                path:'add a new product',
                element:<ProductForm/>
            }
        ]
    },
    
    {
        path:"/products",
        element: <ProductPage />
    },
    {
        path:"*",
        element: <ErrorPage />
    }
])

export default router;