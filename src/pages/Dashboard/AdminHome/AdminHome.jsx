import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";


const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
        <Helmet>
            <title>United Sports | Admin Home</title>

        </Helmet>
        <div className="w-full ml-5">
            <h2 className="text-3xl">Welcome Back, {user.displayName}</h2>
        </div>
        
        </>
    );
};

export default AdminHome;