import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminFeedback from "../pages/Dashboard/AdminFeedback/AdminFeedback";
import InstructorMyClass from "../pages/Dashboard/InstructorMyClass/InstructorMyClass";
import UpdateClass from "../pages/Dashboard/UpdateClass/UpdateClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";

import InstructorMoreDetails from "../pages/InstructorMoreDetails/InstructorMoreDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path:'/instructorMoreDetails/:id',
          element:<InstructorMoreDetails></InstructorMoreDetails>,
          loader:({params}) => fetch(`http://localhost:5000/instructorMoreDetails/${params.id}`)
        },
    
        {
          path:'/classes',
          element:<Classes></Classes>
        },
   
     
      ],
   
    },
    {
     path:"dashboard",
     element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
     children:[
      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'instructorHome',
        element:<InstructorHome></InstructorHome>
      },
      {
        path:'myCart',
        element:<MyCart></MyCart>
      },
      {
        path:'enrolledClasses',
        element:<EnrolledClasses></EnrolledClasses>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'manageUsers',
        element:<AllUsers></AllUsers>
      },
      {
        path:'addClass',
        element:<AddClass></AddClass>
      },
      {
        path:'updatedAClass/:id',
        element:<UpdateClass></UpdateClass>,
        loader: ({params})=>fetch(`http://localhost:5000/updatedClass/${params.id}`)
        
      },
      {
        path:'instructorMyClass',
        element:<InstructorMyClass></InstructorMyClass>
      },
      {
        path:'adminManageClasses',
        element:<ManageClasses></ManageClasses>
      },
      {
        path: 'payment/:id',
        element:<Payment></Payment>,
        loader:({params}) => fetch(`http://localhost:5000/carts/${params.id}`)
      },
      {
        path:'adminFeedback/:id',
        element:<AdminFeedback></AdminFeedback>,
        loader:({params}) => fetch(`http://localhost:5000/feedback/${params.id}`)
      },
     ]  
    }
  ]);

export default router;