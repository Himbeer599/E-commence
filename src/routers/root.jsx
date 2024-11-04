import Login from '../pages/Login/Login';  
import Registerpage from '../pages/Register/Registerpage';
import Homepage from '../pages/HomePage/Homepage';
import SellerDashboard from '../pages/SellerDashboard/SellerDashboard';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error-page';

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
        element: <SellerDashboard />
    },
    {
        path:"*",
        element: <ErrorPage />
    }
])

export default router;