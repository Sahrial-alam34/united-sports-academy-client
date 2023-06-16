import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUsers } from 'react-icons/fa';
import { SiGoogleclassroom, SiGoogletagmanager } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi';
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const DashBoard = () => {
    const [cart] = useCart();
    const { role, user } = useContext(AuthContext)
    // console.log('role', role)
    // if(role =='admin'){
    //     console.log('clicked')
    // }
    // else if(role =='instructor'){
    //     console.log('instuctor')
    // }
    // else{
    //     console.log('hi')
    // }
    // TODO

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side  ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-purple-500 to-purple-600 text-base-content ">
                    <div className="w-[288px] h-[122px]">
                        <h2 className="text-white uppercase flex flex-wrap justify-center">{role} DashBoard</h2>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-6/12 sm:w-4/12 px-4">
                                <img src={user?.photoURL} alt={user?.displayName} className="shadow rounded-full w-[65px] h-[80px] align-middle border-none" />
                            </div>
                        </div>
                        <p className="text-white uppercase flex flex-wrap justify-center">{user?.displayName}</p>
                    </div>

                    <div className="divider"></div>
                    {
                        role === 'admin' ? (<>
                            <li className="text-white uppercase"><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            {/* <li className="text-white uppercase"><NavLink to="/dashboard/addItem"> <SiGoogleclassroom></SiGoogleclassroom> Add a Class</NavLink></li> */}
                            <li className="text-white uppercase"><NavLink to="/dashboard/adminManageClasses"><SiGoogletagmanager></SiGoogletagmanager> Manage Classes</NavLink></li>
                            <li className="text-white uppercase"><NavLink to="/dashboard/manageUsers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            {/* <li className="text-white">
                                <NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li> */}
                        </>)
                            :
                            role === 'instructor' ? (<>
                                <li className="text-white uppercase"><NavLink to="/dashboard/instructorHome"><FaHome></FaHome> Instructor Home</NavLink></li>
                                <li className="text-white uppercase"><NavLink to="/dashboard/addClass"> <SiGoogleclassroom></SiGoogleclassroom> Add a Class</NavLink></li>
                                <li className="text-white uppercase"><NavLink to="/dashboard/instructorMyClass"><SiGoogleclassroom></SiGoogleclassroom> My Classes</NavLink></li>
                                {/* <li className="text-white">
                                <NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li> */}

                            </>)
                                :
                                (<>
                                    <li className="text-white uppercase"><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li className="text-white uppercase" ><NavLink to="/dashboard/enrolledClasses"><FaCalendarAlt></FaCalendarAlt> Enrolled Classes</NavLink></li>
                                    <li className="text-white uppercase"><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li className="text-white">
                                        <NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart
                                            <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
                                        </NavLink>

                                    </li>
                                </>)
                    }
                    {/* Sidebar content here */}

                    <div className="divider"></div>
                    <li className="text-white uppercase"><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li className="text-white uppercase"><NavLink to="/instructor"><GiTeacher></GiTeacher> Instructor </NavLink></li>
                    <li className="text-white uppercase"><NavLink to="/classes"><SiGoogleclassroom></SiGoogleclassroom> Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;