import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBook, FaUsers } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi';
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const DashBoard = () => {
    const [cart] = useCart();
    const { role } = useContext(AuthContext)
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

                    {

                        <>

                        </>
                    }

                    {
                        role === 'admin' ? (<>
                            <li className="text-white uppercase"><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li className="text-white uppercase"><NavLink to="/dashboard/addItem"> <SiGoogleclassroom></SiGoogleclassroom> Add a Class</NavLink></li>
                            <li className="text-white uppercase"><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Classes</NavLink></li>
                            <li className="text-white uppercase"><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li className="text-white uppercase"><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                        </>) : role === 'instructor' ? (<>
                            <li className="text-white uppercase"><NavLink to="/dashboard/userhome"><FaHome></FaHome> Instructor Home</NavLink></li>
                            <li className="text-white uppercase" ><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Add Item</NavLink></li>
                            <li className="text-white uppercase"><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li className="text-white">
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>) : (<>
                            <li className="text-white uppercase"><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li className="text-white uppercase" ><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li className="text-white uppercase"><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li className="text-white">
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
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