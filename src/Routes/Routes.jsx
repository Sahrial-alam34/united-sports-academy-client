import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        },
   
     
      ],
   
    },
    {
     path:"dashboard",
     element:<DashBoard></DashBoard>,
     children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      }
     ]  
    }
  ]);

export default router;