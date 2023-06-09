import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/unitedlogo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart, FaUser, FaUserShield } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import { MdSports } from "react-icons/md";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const { role } = useContext(AuthContext)
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
        //console.log('clicked');

    }
    const navOptions = <>
        <li className="uppercase"><NavLink
            to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}
        >Home</NavLink></li>
        <li className="uppercase"><NavLink
            to='/instructor'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
        >Instructor</NavLink></li>
        <li className="uppercase"><NavLink
            to='/classes'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
        >Classes</NavLink></li>

        {
            role === 'admin' ? (<>

                <li className="text-white uppercase">
                    <NavLink to="/dashboard/adminHome"><FaUserShield></FaUserShield> Admin Panel

                    </NavLink>

                </li>
            </>)
                :
                role === 'instructor' ? (<>

                    <li className="text-white uppercase">
                        <NavLink to="/dashboard/instructorHome"><MdSports></MdSports> Instructor Panel

                        </NavLink>
                    </li>



                </>)
                    :
                    (<>
                        <li className="text-white uppercase">

                            <NavLink to="/dashboard/userHome"><FaUser></FaUser> User Panel
                              
                            </NavLink>
                        </li>

                        <li className="text-white uppercase">
                            <Link to="/dashboard/myCart">
                                <button className="btn gap-2">
                                    <FaShoppingCart></FaShoppingCart>
                                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </button>
                            </Link>
                        </li>

                    </>)
        }



        {
            user ? <div className=' hidden space-x-8 lg:flex '>


                <div>
                    <div className="
                            relative 
                            before:content-[attr(data-tip)]
                            before:px-3 before:py-2;
                            before:left-10 before:top-0
                            before:w-max before:max-w-xs
                            before:-translate-x-1/2 before:-translate-y-full
                            before:bg-gray-700 before:text-white
                            before:rounded-md before:opacity-0
                            before:transition-all

                            after:absolute
                            after:left-1/2 after:top-0
                            after:h-0 after:w-0
                            after:-translate-x-1/2 after:border-8
                            after:border-t-gray-700
                            after:border-l-transparent
                            after:border-b-transparent
                            after:border-r-transparent
                            after:opacity-0
                            after:transition-all 
 
                            hover:before:opacity-100 


                             " data-tip={user.displayName}>
                        <button className="mt-2 h-10 w-10  rounded-full bg-gray-300">
                            <img className="rounded-full h-full w-full"
                                referrerPolicy="no-referrer"
                                src={user.photoURL} alt={user.displayName} />
                        </button>
                    </div>
                    {/* <div className="absolute bottom-0 left-0 transform translate-y-full -translate-x-1/2">
                                <div className="py-2 px-4 bg-gray-800 text-white rounded text-center">
                                    {user.displayName}
                                </div>
                            </div> */}

                </div>
                <li className="uppercase">
                    <NavLink className='mt-2 uppercase'>
                        <button
                            onClick={handleLogOut}
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            LOGOUT
                        </button>
                    </NavLink>
                </li>

            </div> :
                <div className='hidden space-x-8 lg:flex gap-0'>

                    <li className="uppercase">
                        <NavLink
                            to='/login'
                            aria-label='Login'
                            title='Login'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            login
                        </NavLink>
                    </li>

                    <li className="uppercase">
                        <NavLink
                            to='/register'
                            aria-label='Register'
                            title='Register'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            register
                        </NavLink>
                    </li>

                </div>
        }


    </>
    return (
        < >
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link
                        to='/'
                        aria-label='unitedSport'
                        title='unitedSport'
                        className='inline-flex items-center'
                    >
                        <div className='flex items-center justify-center w-12 h-12 rounded-full'>
                            <img src={logo} alt="" />
                        </div>
                        <span className='ml-2 text-xl font-bold tracking-wide bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text '>
                            United Sports <br /> Academy
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </>
    );
};

export default Navbar;