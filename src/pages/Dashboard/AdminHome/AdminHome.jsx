import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import { MdBookmark, MdPayment } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({})


    useEffect(() => {

        fetch('http://localhost:5000/admin-stats')
            .then(res => res.json())
            .then(data => setStats(data))
    }, [])
    return (
        <>
            <Helmet>
                <title>United Sports | Admin Home</title>

            </Helmet>
            <div className="w-full ml-5">
                <h2 className="text-3xl">Welcome Back, {user.displayName}</h2>
            </div>
            <div className="stats shadow mt-5 text-white gap-3">

                <div className="stat bg-gradient-to-r from-cyan-500 to-cyan-200">
                    <div className="stat-figure ">
                        <MdPayment className="w-12 h-12"></MdPayment>
                    </div>
                    <div className="stat-title text-white">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>

                </div>

                <div className="stat bg-gradient-to-r from-purple-500 to-purple-200">
                    <div className="stat-figure ">
                        <FaUsers className="w-12 h-12"></FaUsers>
                    </div>
                    <div className="stat-title text-white">Users</div>
                    <div className="stat-value">${stats.users}</div>

                </div>

                <div className="stat bg-gradient-to-r from-red-500 to-red-200">
                    <div className="stat-figure ">
                    <SiGoogleclassroom className="w-12 h-12"></SiGoogleclassroom>
                    </div>
                    <div className="stat-title text-white">Total Classes</div>
                    <div className="stat-value">${stats.classes}</div>

                </div>
                <div className="stat bg-gradient-to-r from-orange-500 to-orange-200">
                    <div className="stat-figure ">
                      <MdBookmark className="w-12 h-12"></MdBookmark>
                    </div>
                    <div className="stat-title text-white">Booked Classes</div>
                    <div className="stat-value">${stats.orders}</div>
                   
                </div>

            </div>

        </>
    );
};

export default AdminHome;