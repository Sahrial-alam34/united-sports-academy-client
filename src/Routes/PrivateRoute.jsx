import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    //console.log('dfd 8',user);
    const location = useLocation();
    //console.log('locaca 10', location)
    // if (loading) {
    //     return <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
    //         <p className='text-7xl font-thin'>L</p>
    //         <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
    //         <p className='text-7xl font-thin'>ading....</p>
    //     </div>
    // }

    if(loading){
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;